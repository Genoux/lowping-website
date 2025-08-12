import { NextResponse } from 'next/server'
import { handleCheckout } from '@registration/actions/checkout'

export async function POST() {
  try {
    const result = await handleCheckout()
    return NextResponse.json(result)
  } catch (err) {
    console.error('Checkout error:', err)
    return NextResponse.json({ error: 'Checkout failed' }, { status: 500 })
  }
}
