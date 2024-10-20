import './App.css';
import { useEffect,useState } from "react";
import video from './food.mp4';
import MyRecipesComponent from './MyRecipesComponent';

// https://api.edamam.com/api/recipes/v2?type=public&q=lemon&app_id=e8e4b8a3&app_key=a23eff9e0897e628991684d5a4c9082f

function App() {
const MY_ID = "e8e4b8a3";
const MY_KEY = "a23eff9e0897e628991684d5a4c9082f";
const [mySearch,setMySearch] =useState("");
const [myRecipes,setMyRecipes]=useState([]);
const [wordSubmitted,setWordSubmitted]=useState("lemon");

useEffect(() => {
  const getRecipe = async () => {
  const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
  const data = await response.json();
  setMyRecipes(data.hits);
  }
  getRecipe()
  }, [wordSubmitted])
  
  const myRecipeSearch = (e) => {
    setMySearch (e.target.value)
  }

  const finalSearch = (e) =>{
    e.preventDefault()
    setWordSubmitted(mySearch)
  }
  return (
  <div className="App">
    <div className="container">
      <video autoPlay muted loop>
      <source src={video} type="video/mp4" />
      </video>
      <h1>Find a Recipe</h1>
    
    </div>
    <div className='container'>
      <form onSubmit={finalSearch}>
        <input className='search' placeholder='Search...' onChange={ myRecipeSearch } value={ mySearch}></input>
      </form>
    
    </div>
    <div className='container'>
      <button onClick={finalSearch}>
        <img src="https://img.icons8.com/?size=100&id=qLDTJP6kIsEd&format=png&color=000000" alt="icon"/>
      </button>
</div>
{myRecipes.map((element ,index) => (
  <MyRecipesComponent key={index}
  label={element.recipe.label} 
  image={element.recipe.image} 
  calories={element.recipe.calories}
  totalWeight={element.recipe.totalWeight}
  ingredients={element.recipe.ingredientLines}
/>
))}




  </div>
  );
}

export default App;
