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
    fallback: false
  }
}

export async function getStaticProps({ params }) {
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

  
  return (
    <div>
      Queen Details
    </div>
  )
}