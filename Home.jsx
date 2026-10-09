import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";

function Home() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const recipes = [
    { id: 1, name: "Pizza" },
    { id: 2, name: "Burger" },
    { id: 3, name: "Pasta" }
  ];

  return (
    <div>
      <h2>Home Page</h2>

      <input
        type="text"
        placeholder="Search recipes..."
        ref={inputRef}
      />

      <h3>Recipes</h3>

      {recipes.map((recipe) => (
        <p key={recipe.id}>
          <Link to={`/recipes/${recipe.id}`}>
            {recipe.name}
          </Link>
        </p>
      ))}
    </div>
  );
}

export default Home;
