import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
})

const getStaticProps

export default function RecipeDetails() {
  return (
    <div>
      Recipe Details
    </div>
  )
}