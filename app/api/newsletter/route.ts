import { NextResponse } from 'next/server'

const ECOMAIL_API_URL = 'https://api2.ecomailapp.cz/lists'
export const runtime = 'edge'

type NewsletterBody = {
  email?: string
}

export async function POST(request: Request) {
  try {
    const apiKey = process.env.ECOMAIL_API_KEY?.trim()
    const listId = process.env.ECOMAIL_LIST_ID?.trim()

    if (!apiKey || !listId) {
      return NextResponse.json(
        { error: 'Missing Ecomail configuration' },
        { status: 500 }
      )
    }

    const body = (await request.json()) as NewsletterBody
    const email = body.email?.trim().toLowerCase()

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }

    const ecomailResponse = await fetch(`${ECOMAIL_API_URL}/${listId}/subscribe`, {
      method: 'POST',
      headers: {
        key: apiKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        subscriber_data: {
          email,
        },
        update_existing: true,
      }),
    })

    if (!ecomailResponse.ok) {
      const errorText = await ecomailResponse.text()

      // Ecomail muze vratit chybu i kdyz je kontakt uz v seznamu.
      // V tomhle pripade to pro UI bereme jako uspesne prihlaseni.
      const normalizedError = errorText.toLowerCase()
      const alreadySubscribed =
        normalizedError.includes('already') ||
        normalizedError.includes('exists') ||
        normalizedError.includes('existuje') ||
        normalizedError.includes('subscriber')

      if (alreadySubscribed) {
        return NextResponse.json({ success: true, alreadySubscribed: true })
      }

      return NextResponse.json(
        {
          error: 'Ecomail request failed',
          details: errorText,
          upstreamStatus: ecomailResponse.status,
        },
        { status: 502 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Unexpected server error' }, { status: 500 })
  }
}
