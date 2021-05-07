import React, { useEffect , useState } from 'react';
import Recipe from './Recipe';
import './App.css';


const App = () => 
{

const APP_ID = '9d5f06ac';
const API_key = '59081ebcc8712816be9698bf93032732';

const [recipes, setRecipes] = useState([]);
const [search, setSearch] = useState("");
const [query, setQuery] = useState('chicken')


useEffect(() => {
  getRecipes();
  console.log('test')
}, [query])

const getRecipes = async () => {
  const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${API_key}`);
  const data = await response.json();
  setRecipes(data.hits);
};

const updateSearch = e => {
  setSearch(e.target.value);
}

const getSearch = e => {
  e.preventDefault();
  setQuery(search);
  setSearch('');
}



  return (
    <div className="App">
      <form className="Search-form" onSubmit={getSearch}>
         <input className="search-bar" type="text" value={search} onChange={updateSearch} />
         <button className="search-button" type="submit">Search</button>
      </form> 
      <div className="recipe">
      {recipes.map(recipe => (
        <Recipe
        title = {recipe.recipe.label}
        calories = {recipe.recipe.calories}
        image = {recipe.recipe.image}
        ingredients = {recipe.recipe.ingredients}
        />
      ))}
      </div>
    </div>
  );
}

export default App;
