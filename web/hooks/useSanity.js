import sanityClient from '@sanity/client'

const client = sanityClient({
    projectId: 'eqlzn09g',
    dataset: 'production',
    useCdn: true,
});

console.log(client);