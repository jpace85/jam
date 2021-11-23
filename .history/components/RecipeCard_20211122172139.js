export default function RecipeCard({recipe}) {
    const { title, slug, cookingTime, thumbnail } = recipe.fields

    return (
        <div>
            {recipe.fields.title}
        </div>
    )
}
