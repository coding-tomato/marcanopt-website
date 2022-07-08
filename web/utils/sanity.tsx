import sanityClient from '@sanity/client'
import { 
  testimonyValidator,
  missionValidator,
} from './validators';

export const client = sanityClient({
    projectId: 'eqlzn09g',
    dataset: 'production',
    apiVersion: '2022-05-30',
    useCdn: true,
});

export const getTestimonyData = async () => {
  const response = await client
      .fetch(`
          *[_type == "testimony"]
        `)
      .then(data => data);
  
  return testimonyValidator.parse(response);
}

export const getMissionData = async () => {
  const response = await client
      .fetch(`
          *[_type == "mission"]
        `)
      .then(data => data);
  
  return missionValidator.parse(response);
}