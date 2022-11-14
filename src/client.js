import client from '@sanity/client';

export default client({
  projectId: '41c3pgq3',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2022-11-10',
});

// Deployed sanity link
// https://peniel-day-foundation.sanity.studio/
