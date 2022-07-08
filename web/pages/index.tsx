
import { useState, useEffect } from 'react';
import Image from 'next/image'
import type { NextPage, GetServerSideProps } from 'next'
import sanityClient from '@sanity/client'

const client = sanityClient({
    projectId: 'eqlzn09g',
    dataset: 'production',
    useCdn: true,
});

interface Props {
  data: {
    example: string,
  }
}

interface Testimony {
  name: string,
  comment: string,
  imageUrl: string,
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const data = {
    example: "test",
  }

  return {
    props: {
      data: { ...data }
    }
  }
}

const Home: NextPage<Props> = ({ data }) => {
  const [sanityData, setSanityData] = useState<Testimony>({
    name: "",
    comment: "",
    imageUrl: "",
  });

  useEffect(() => {
    const response = client
      .fetch(`
          *[_type == 'testimony'] {
            name,
            comment,
            "imageUrl": picture.asset->url
          }
        `)
      .then(data => {
        setSanityData(data[0])
      });
  }, [])

  return (
    <div>
      <h3>Testimonios</h3>
      <p>{sanityData.name}</p>
      <p>{sanityData.comment}</p>
      {
        sanityData.imageUrl !== "" &&
          <Image
            src={sanityData.imageUrl}
            width={200}
            height={250}
            alt="Francys"
          />
      }
      
    </div>
  )
}

export default Home
