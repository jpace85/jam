import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
})

export const getStaticPaths = async({paths}) => {
  const res = await client.getEntries({
    content_type: 'recipe'
  })

  return {
    paths
  }
}

export default function RecipeDetails() {
  return (
    <div>
      Recipe Details
    </div>
  )
}