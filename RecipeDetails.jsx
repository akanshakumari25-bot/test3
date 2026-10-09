import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function RecipeDetails() {
  const { id } = useParams();

  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getRecipe() {
      try {
        const response = await fetch(
          `https://dummyjson.com/recipes/${id}`
        );

        if (!response.ok) {
          throw new Error("Recipe not found");
        }

        const data = await response.json();

        setRecipe(data);
      } catch (error) {
        setError(error.message);
      }
    }

    getRecipe();
  }, [id]);

  if (error) {
    return <p>{error}</p>;
  }

  if (!recipe) {
    return <h3>Loading...</h3>;
  }

  return (
   <>
     <div className="mainDiv">
      
      <h2 >Recipe Details</h2>

      <p>Recipe ID: {id}</p>

      <h3>{recipe.name}</h3>

      <img
        src={recipe.image}
        alt={recipe.name}
        width="200"
      />
    </div>




   </>
  );
}

export default RecipeDetails;