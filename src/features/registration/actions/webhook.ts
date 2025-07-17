interface WebhookEvent {
  type: string
  data?: unknown
}

export async function handleWebhook(mockEvent: WebhookEvent) {
  try {
    if (mockEvent.type === 'checkout.session.completed') {
      // Webhook processed successfully for demo
    }
    return { received: true }
  } catch (error) {
    console.error('Webhook error:', error)
    throw error
  }
}
