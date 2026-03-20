import { NextResponse } from 'next/server'

const ECOMAIL_API_URL = 'https://api2.ecomailapp.cz/lists'

type NewsletterBody = {
  email?: string
}

export async function POST(request: Request) {
  try {
    const apiKey = process.env.ECOMAIL_API_KEY
    const listId = process.env.ECOMAIL_LIST_ID

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
        trigger_autoresponders: true,
        update_existing: true,
      }),
    })

    if (!ecomailResponse.ok) {
      const errorText = await ecomailResponse.text()
      return NextResponse.json(
        { error: 'Ecomail request failed', details: errorText },
        { status: 502 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Unexpected server error' }, { status: 500 })
  }
}
