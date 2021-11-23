export default function RecipeCard({recipe}) {
    const { title, slug, cookingTime, thumbnail } = recipe.fields

    return (
        <div className="card">
            {recipe.fields.title}
        </div>
    )
}
