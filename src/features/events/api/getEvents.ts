import dummyEventsData from '../../../data/dummy-events.json'
import type { Event } from '../types'

const dummyEvents = dummyEventsData as Event[]

export async function getEvents() {
  const sortedEvents = dummyEvents.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  )
  return { data: sortedEvents, error: null }
}

export async function getEventById(id: string) {
  const event = dummyEvents.find((e: Event) => e.id === id)
  if (!event) {
    return { data: null, error: { message: 'Event not found' } }
  }
  return { data: event, error: null }
}

export async function getEventBySlug(slug: string) {
  const event = dummyEvents.find((e: Event) => e.slug === slug)
  if (!event) {
    return { data: null, error: { message: 'Event not found' } }
  }
  return { data: event, error: null }
}

export async function getUpcomingEvents() {
  const upcomingEvents = dummyEvents
    .filter((e: Event) => new Date(e.date) >= new Date())
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())

  const upcomingEvent = upcomingEvents[0]
  if (!upcomingEvent) {
    return { data: null, error: { message: 'No upcoming events found' } }
  }
  return { data: upcomingEvent, error: null }
}
