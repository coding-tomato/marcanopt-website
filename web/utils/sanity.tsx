import sanityClient from '@sanity/client'
import { 
  Testimony,
  testimonyValidator,
  Mission,
  missionValidator,
} from './objectSchemas';

export const client = sanityClient({
    projectId: 'eqlzn09g',
    dataset: 'production',
    useCdn: true,
});

export const getTestimonyData: () => Promise<Testimony> = async () => {
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