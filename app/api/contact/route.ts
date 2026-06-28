import { NextResponse } from 'next/server'

const MISSION_CONTROL_URL = 'https://mission-control-betterstacks.vercel.app'

export async function POST(req: Request) {
  const secret = process.env.LEAD_CAPTURE_SECRET
  if (!secret) {
    return NextResponse.json({ error: 'Server misconfigured' }, { status: 500 })
  }

  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const res = await fetch(`${MISSION_CONTROL_URL}/api/leads`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-lead-secret': secret,
    },
    body: JSON.stringify(body),
  })

  const data = await res.json()
  return NextResponse.json(data, { status: res.status })
}
