import { createClient } from "contentful";
import RecipeCard from "../components/RecipeCard";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })

  const res = await client.getEntries({ content_type: 'dragQueens'})

  console.log(res)

  return {
    props: {
      dragQueens: res.items
    },
    revalidate: 1
  }
}

export default function Recipes( { dragQueens }) {
  return (
    <div className="recipe-list">
      {dragQueens.map(queen => (
        <RecipeCard key={queen.sys.id} recipe={recipe}/>
      ))}

      <style jsx>{`
        .recipe-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 20px 60px
        }
      `}</style>
    </div>
  )
}