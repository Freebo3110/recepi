function MyRecipesComponent({label, image,ingredients, calories,totalWeight}){
    return(
        <div>
            <div className="container">
                <h2>{label}</h2>
            </div>

            <div className="container"> 
                <img src={image} alt='food'/>
            </div>

            <ul className="container list">
                {ingredients.map((ingredient,index) =>(
                    <li key={index}><img src="https://img.icons8.com/?size=100&id=41707&format=png&color=000000" className="icon" alt='icon'/>
                    {ingredient}</li>
                ))}
            </ul>

            <div className="container">
                <p>{totalWeight.toFixed()} g</p>
            </div>

            <div className="container">
                <p>{calories.toFixed()} calories</p>
            </div>
        </div>
    )
}

export default MyRecipesComponent;