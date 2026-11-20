import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const body = await request.json()
    const name = String(body?.name || '').trim()
    const email = String(body?.email || '').trim()
    const message = String(body?.message || '').trim()
    const phone = String(body?.phone || '').trim()
    const company = String(body?.company || '').trim()
    const service = String(body?.service || '').trim()
    const budget = String(body?.budget || '').trim()

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: 'Please complete your name, work email, and project brief.' },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { ok: false, error: 'Please enter a valid email address.' },
        { status: 400 }
      )
    }

    // Optional webhook / Resend integration when RESEND_API_KEY is configured in environment
    if (process.env.RESEND_API_KEY) {
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Techo Labs Website <noreply@techotraders.com.lk>',
          to: ['labs@techotraders.com.lk'],
          reply_to: email,
          subject: `[Techo Labs Inquiry] ${name}${company ? ` — ${company}` : ''}`,
          text: [
            `Name: ${name}`,
            `Email: ${email}`,
            `Phone/WhatsApp: ${phone || 'Not provided'}`,
            `Company: ${company || 'Not provided'}`,
            `Service: ${service || 'Not specified'}`,
            `Budget: ${budget || 'Not specified'}`,
            '',
            'Project Brief:',
            message,
          ].join('\n'),
        }),
      })
    }

    return NextResponse.json({
      ok: true,
      reference: `TL-${Date.now().toString(36).toUpperCase()}`,
      receivedAt: new Date().toISOString(),
    })
  } catch {
    return NextResponse.json(
      { ok: false, error: 'Unable to process request right now. Please try again or message us via WhatsApp.' },
      { status: 500 }
    )
  }
}
