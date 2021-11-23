export default function RecipeCard({recipe}) {
    const { title, slug, cookingTime, thumbnail}

    return (
        <div>
            {recipe.fields.title}
        </div>
    )
}
