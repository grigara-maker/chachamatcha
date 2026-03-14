'use client';

import { useEffect, useRef } from 'react';
import { Renderer, Transform, Vec3, Color, Polyline } from 'ogl';

const Ribbons = ({
  colors = ['#0E7D23', '#A3E6B5', '#1B4D25'],
  baseSpring = 0.05,
  baseFriction = 0.8,
  baseThickness = 50,
  offsetFactor = 0.05,
  maxAge = 500,
  pointCount = 50,
  speedMultiplier = 0.6,
  enableFade = true,
  enableShaderEffect = false,
  effectAmplitude = 2,
  backgroundColor = [0, 0, 0, 0] // Transparent
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Initialize OGL Renderer
    const renderer = new Renderer({ dpr: 2, alpha: true });
    const gl = renderer.gl;
    
    // Ensure transparent background
    gl.clearColor(0, 0, 0, 0);

    // Force styling via JS to ensure it works even if Tailwind fails temporarily
    gl.canvas.style.position = 'absolute';
    gl.canvas.style.top = '0';
    gl.canvas.style.left = '0';
    gl.canvas.style.width = '100%';
    gl.canvas.style.height = '100%';
    gl.canvas.style.pointerEvents = 'none'; // Click-through
    
    container.appendChild(gl.canvas);

    const scene = new Transform();
    const lines: any[] = [];

    // --- Vertex Shader ---
    const vertex = `
      precision highp float;
      attribute vec3 position;
      attribute vec3 next;
      attribute vec3 prev;
      attribute vec2 uv;
      attribute float side;
      uniform vec2 uResolution;
      uniform float uDPR;
      uniform float uThickness;
      uniform float uTime;
      varying vec2 vUV;
      
      vec4 getPosition() {
          vec4 current = vec4(position, 1.0);
          vec2 aspect = vec2(uResolution.x / uResolution.y, 1.0);
          vec2 nextScreen = next.xy * aspect;
          vec2 prevScreen = prev.xy * aspect;
          vec2 tangent = normalize(nextScreen - prevScreen);
          vec2 normal = vec2(-tangent.y, tangent.x);
          normal /= aspect;
          normal *= mix(1.0, 0.1, pow(abs(uv.y - 0.5) * 2.0, 2.0));
          float dist = length(nextScreen - prevScreen);
          normal *= smoothstep(0.0, 0.02, dist);
          float pixelWidthRatio = 1.0 / (uResolution.y / uDPR);
          float pixelWidth = current.w * pixelWidthRatio;
          normal *= pixelWidth * uThickness;
          current.xy -= normal * side;
          return current;
      }
      
      void main() {
          vUV = uv;
          gl_Position = getPosition();
      }
    `;

    // --- Fragment Shader ---
    const fragment = `
      precision highp float;
      uniform vec3 uColor;
      uniform float uOpacity;
      varying vec2 vUV;
      void main() {
          float fade = smoothstep(0.0, 0.5, vUV.y) * smoothstep(1.0, 0.5, vUV.y);
          gl_FragColor = vec4(uColor, uOpacity * fade);
      }
    `;

    function resize() {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      renderer.setSize(width, height);
      lines.forEach(line => line.polyline.resize());
    }
    window.addEventListener('resize', resize);

    // Create lines based on colors
    colors.forEach((color, index) => {
      const line: any = {
        spring: baseSpring,
        friction: baseFriction,
        mouseVelocity: new Vec3(),
        mouseOffset: new Vec3((index - (colors.length - 1) / 2) * offsetFactor, 0, 0),
        points: Array(pointCount).fill(null).map(() => new Vec3())
      };

      line.polyline = new Polyline(gl, {
        points: line.points,
        vertex,
        fragment,
        uniforms: {
          uColor: { value: new Color(color) },
          uThickness: { value: baseThickness },
          uOpacity: { value: 1.0 },
          uResolution: { value: new Vec3() }, // Placeholder, updated internally by OGL usually
          uDPR: { value: 2 },
          uTime: { value: 0 }
        }
      });
      line.polyline.mesh.setParent(scene);
      lines.push(line);
    });

    resize();

    const mouse = new Vec3();
    function updateMouse(e: MouseEvent | TouchEvent) {
      const x = ('touches' in e && e.touches) ? e.touches[0].clientX : ('clientX' in e ? e.clientX : 0);
      const y = ('touches' in e && e.touches) ? e.touches[0].clientY : ('clientY' in e ? e.clientY : 0);
      mouse.set(
        (x / window.innerWidth) * 2 - 1,
        (y / window.innerHeight) * -2 + 1,
        0
      );
    }
    window.addEventListener('mousemove', updateMouse);
    window.addEventListener('touchstart', updateMouse);
    window.addEventListener('touchmove', updateMouse);

    let frameId: number;
    function update() {
      frameId = requestAnimationFrame(update);
      lines.forEach(line => {
        const target = new Vec3().copy(mouse).add(line.mouseOffset);
        const force = new Vec3().copy(target).sub(line.points[0]).multiply(line.spring);
        line.mouseVelocity.add(force).multiply(line.friction);
        line.points[0].add(line.mouseVelocity);
        
        for (let i = 1; i < line.points.length; i++) {
          line.points[i].lerp(line.points[i - 1], 0.4);
        }
        line.polyline.updateGeometry();
      });
      renderer.render({ scene });
    }
    update();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', updateMouse);
      window.removeEventListener('touchstart', updateMouse);
      window.removeEventListener('touchmove', updateMouse);
      cancelAnimationFrame(frameId);
      if (gl.canvas.parentNode) gl.canvas.parentNode.removeChild(gl.canvas);
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 w-full h-full pointer-events-none z-50"
    />
  );
};

export default Ribbons;
