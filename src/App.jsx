import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Cart from "./components/Cart";

function App() {
  const [recipes, setRecipes] = useState([]);
  useEffect(()=>{
    fetch('./Recipes.json')
    .then((res)=>res.json())
    .then(data => setRecipes(data))
  },[]);
// console.log(recipes);
  return (
    <>
      <section class="mx-auto px-5 lg:px-10 max-w-8xl mb-28">
        <div class="flex flex-col justify-center items-center text-center my-6">
          <h2 class="text-[#150B2B] text-3xl lg:text-4xl font-semibold">
            Our Recipes
          </h2>
          <p class="my-6 max-w-[800px] font-inter text-[#12132D99]">
            Explore Nova's diverse collection of recipes, crafted to delight
            every palate and elevate your culinary journey.
          </p>
        </div>

        <div className="grid grid-cols-11 gap-4">
          <div className="col-span-6 grid grid-cols-2 gap-5">
            {
              recipes.map((recipe)=><Card key={recipe.recipe_id} recipe={recipe}/>)
              }
          </div>
          <div className="col-span-5">
            <Cart />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
