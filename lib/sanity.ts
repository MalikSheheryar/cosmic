import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'oak2dqmt',
  dataset: 'production', // This will come from your client
  apiVersion: '2023-05-03', // Use a UTC date string for consistent API behavior
  useCdn: true, // Set to `false` if you need to see unpublished drafts or very fresh data during development
})
