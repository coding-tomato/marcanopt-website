import type { NextPage, GetServerSideProps } from 'next';
import { Testimony, Props } from '../utils/validators';
import { getMissionData } from '../utils/sanity';
import { urlFor } from '../utils/imageBuilder';

interface ServerSideData {
  testimony: Testimony
}

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await getMissionData();

  return {
    props: {
      data: {
        testimony: data,
      },
    },
  };
};

const Home: NextPage<Props<ServerSideData>> = ({ data }) => {
  const picture = data.testimony[0].picture || null;

  return (
    <div>
      <h3>Ejemplo</h3>
      {
        picture
        &&
        <>
          <img
            src={urlFor(picture).width(300).width(300).url()}
          />
        </>
      }
    </div>
  );
};

export default Home;
