import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
})

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: 'recipe'
  })

  return {
    paths: [{params: {slug: }}, {}]
  }
}

export default function RecipeDetails() {
  return (
    <div>
      Recipe Details
    </div>
  )
}