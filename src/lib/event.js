/**
 * Client side functions - gets events from the API route
 */
export async function getAllEvents(page, pageSize, eventTypes) {
  const resp = await fetch(`/api/events?start=${page}&length=${pageSize}&eventTypes=${eventTypes}`);
  return (await resp.json());
}

/**
 * Client side functions - gets event types from the API route
 */
export async function getAllTypes() {
  const resp = await fetch("/api/types");
  return await resp.json();
}
