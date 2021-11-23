import { createClient } from "contentful";
import Image from 'next/image';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
})

export const getStaticPaths = async() => {
  const res = await client.getEntries({
    content_type: 'dragQueens'
  })

  const paths = res.items.map(item => {
    return {
      params: {
        slug: item.fields.slug
      }
    }
  })

  return {
    paths,
  }
}

export async function getStaticProps({params}) {
  const {items} = await client.getEntries({
    content_type: 'dragQueens',
    'fields.slug': params.slug 
  })
  return {
    props: {
      recipe: items[0]
    },
    revalidate: 1
  }
}

export default function DragQueen({dragQueens}) {
  console.log(dragQueens)
  const {featuredImage, title, wins, attributes, bio} = dragQueens.fields
  return (
    <div>
      <div className="banner">
        <Image 
          src={'https:'+featuredImage.fields.file.url}
          width={featuredImage.fields.file.details.image.width}
          height={featuredImage.fields.file.details.image.height}
        />
        <h2>{title}</h2>
      </div>
      <div className="info">
        <p>Has won {wins} maxi-challenges in total</p>
        <h3>Appeared in these seasons:</h3>
        {attributes.map(season => (
          <span key={season}>{season}</span>
        ))}
      </div>
      <div className="method">
        <h3>Bio:</h3>
          <div>{documentToReactComponents(bio)}</div>
      </div>

      <style jsx>{`
        h2,h3 {
          text-transform: uppercase;
        }
        .banner h2 {
          margin: 0;
          background: #fff;
          display: inline-block;
          padding: 20px;
          position: relative;
          top: -60px;
          left: -10px;
          transform: rotateZ(-1deg);
          box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
        }
        .info p {
          margin: 0;
        }
        .info span::after {
          content: ", ";
        }
        .info span:last-child::after {
          content: ".";
        }
      `}</style>
    </div>
  )
}