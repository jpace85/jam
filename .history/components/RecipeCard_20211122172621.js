export default function RecipeCard({recipe}) {
    const { title, slug, cookingTime, thumbnail } = recipe.fields

    return (
        <div className="card">
            <div className="featured">
                {/* image - thumb */}
            </div>
            <div className="content">
                <div className="info">
                    <h4>{ title }</h4>
                    <p>Takes approx { cookingTime} mins to make</p>
                </div>
                <div className="actions">
                    
                </div>
            </div>
        </div>
    )
}
