import type { NextPage, GetServerSideProps } from 'next';
import { Testimony, Props } from '../utils/validators';
import { getTestimonyData } from '../utils/sanity';
import { urlFor } from '../utils/imageBuilder';

interface ServerSideData {
  testimony: Testimony
}

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await getTestimonyData();

  return {
    props: {
      data: {
        testimony: data,
      },
    },
  };
};

const Home: NextPage<Props<ServerSideData>> = ({ data }) => {
  const comment = data.testimony[0].comment || null;
  const picture = data.testimony[0].picture || null;

  return (
    <div>
      <h3>Ejemplo</h3>
      <h1>{comment}</h1>
      {
        picture
        &&
        <img src={urlFor(picture).url()} alt="" />
      }
    </div>
  );
};

export default Home;
