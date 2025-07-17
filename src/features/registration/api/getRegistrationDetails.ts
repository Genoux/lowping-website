import { getEventById } from '@events/api/getEvents'
import { FormData } from '@registration/types/forms'

type RegistrationDetails = {
  event: NonNullable<Awaited<ReturnType<typeof getEventById>>['data']>
  registration: FormData | null
  receipt_url: string | null
}

export async function getRegistrationDetails(): Promise<RegistrationDetails | null> {
  try {
    const { data: event } = await getEventById('1')
    if (!event) return null

    const registration = {
      id: 'demo-registration-id',
      event_id: '1',
      email: 'demo@lowping.com',
      name: 'Demo User',
      discord: 'DemoUser#1234',
      riot_id: 'DemoUser#TAG',
      rank: 'Platinum',
      payment_id: 'pi_demo_payment',
      created_at: new Date().toISOString(),
    }

    const receipt_url = `https://example.com/receipt/demo-receipt`

    return {
      event,
      registration,
      receipt_url,
    }
  } catch (error) {
    console.error('Error fetching registration details:', error)
    return null
  }
}
