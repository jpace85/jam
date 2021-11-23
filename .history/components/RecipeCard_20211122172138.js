export default function RecipeCard({recipe}) {
    const { title, slug, cookingTime, thumbnail } = recipe.field

    return (
        <div>
            {recipe.fields.title}
        </div>
    )
}
