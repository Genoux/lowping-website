import { NextRequest, NextResponse } from 'next/server'
import { handleWebhook } from '@registration/actions/webhook'

export async function POST(request: NextRequest) {
  try {
    const body = await request.text()
    const mockEvent = JSON.parse(body)

    const result = await handleWebhook(mockEvent)
    return NextResponse.json(result)
  } catch (error) {
    console.error(
      'Webhook error:',
      error instanceof Error ? error.message : 'Unknown Error',
    )
    return NextResponse.json({ error: 'Webhook failed' }, { status: 400 })
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
}
