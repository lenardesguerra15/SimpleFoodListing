import React from 'react';

const Recipe = ({title, calories, image, ingredients}) => {
    return(
        <div className="recipe-container">
            <h1 className="recipe-title">{title}</h1>
            <ol>
                {ingredients.map(ingredients => (
                    <li>{ingredients.text}</li>
                ))} 
            </ol>
            <p><span>CALORIES: </span>{calories}</p>
            <img className="images" src={image} alt="{title}"/>
        </div>
    )
}

export default Recipe;