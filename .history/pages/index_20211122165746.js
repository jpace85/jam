import { createClient } from "contentful";

export async function getStaticProps() {
  const client = createClient({
    space: "3oyfle6txgdd",
    accessToken: "FZGJ1qGJ3o_hrW4SJwPJESF1yt2HQmQcX4IyQ06Uf2g",
  })
}

export default function Recipes() {
  return (
    <div className="recipe-list">
      Recipe List
    </div>
  )
}