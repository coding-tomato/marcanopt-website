import type { NextPage, GetServerSideProps } from 'next'
import { Testimony, Props } from '../utils/objectSchemas';
import { getMissionData } from '../utils/sanity';
import { urlFor } from '../utils/imageBuilder';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const data = await getMissionData();

  return {
    props: {
      data,
    }
  }
}

const Home: NextPage<Props<Testimony>> = ({data}) => {
  const picture = data[0].picture || null;

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
  )
}

export default Home
