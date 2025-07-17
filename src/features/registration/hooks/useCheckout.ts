import { useState } from 'react'
import { Database } from '@generated/index'
import { useToast } from '@hooks/use-toast'
import { FormData } from '../types/forms'

type Event = Database['public']['Tables']['events']['Row']

export function useCheckout() {
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleCheckout = async (event: Event, formData: FormData) => {
    try {
      setIsLoading(true)
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ event, formData }),
      })
      const data = await response.json()

      if (!data.sessionId) {
        throw new Error('No session ID returned')
      }

      if (data.mockCheckout) {
        await new Promise((resolve) => setTimeout(resolve, 1500))

        await fetch('/api/webhook', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            type: 'checkout.session.completed',
            data: { object: { id: data.sessionId } },
          }),
        })

        window.location.href = `/events/registration/success?session_id=${data.sessionId}`
        return
      }

      throw new Error('Checkout not available')
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Erreur',
        description:
          'Un problème est survenu lors du traitement de votre inscription.',
      })
      console.error('Registration error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return {
    isLoading,
    handleCheckout,
  }
}
