import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import { WantToCook, CurrentlyCooking } from "./components/Cart";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [wantToCook, setWantToCook] = useState([]);
  const [currentlyCooking, setCurrentlyCooking] = useState([]);
  const [totalWantToCook, setTotalWantToCook] = useState(0);
  const [totalCurrentlyCooking, setTotalCurrentlyCooking] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);
  useEffect(() => {
    fetch("./Recipes.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);
  const handleAddToCook = (id) => {
    const isExist = wantToCook.find((cart) => cart?.recipe_id === id);
    if (isExist) {
      toast.warn("Item already added.");
    } else {
      const recipe = recipes.find((recipe) => recipe.recipe_id === id);
      setTotalWantToCook(totalWantToCook + 1);
      setWantToCook([...wantToCook, recipe]);
    }
  };
  const handleAddToCooking = (recipe) =>{
    setCurrentlyCooking([...currentlyCooking,recipe]);
    setTotalCurrentlyCooking(totalCurrentlyCooking + 1);
    const newWantToCook = wantToCook.filter(c => c.recipe_id !== recipe.recipe_id);
    setTotalTime(totalTime+recipe.preparing_time);
    setTotalCalories(totalCalories+recipe.calories);
    setTotalWantToCook(totalWantToCook - 1);
    setWantToCook([...newWantToCook]);
  }

  return (
    <>
      <section className="mx-auto mt-16 px-5 lg:px-10 max-w-[1536px] mb-28">
        <div className="flex flex-col justify-center items-center text-center my-6">
          <h2 className="text-[#150B2B] text-3xl lg:text-4xl font-semibold">
            Our Recipes
          </h2>
          <p className="my-6 max-w-[800px] text-[#150B2B99]">
            Explore Nova's diverse collection of recipes, crafted to delight
            every palate and elevate your culinary journey.
          </p>
        </div>

        <div className="md:grid md:grid-cols-4 lg:grid-cols-11 md:gap-4">
          <div className="col-span-2  md:col-span-2 lg:col-span-6 grid grid-cols-1 lg:grid-cols-2 gap-5">
            {recipes.map((recipe) => (
              <Card
                key={recipe.recipe_id}
                handleAddToCook={handleAddToCook}
                recipe={recipe}
              />
            ))}
          </div>
          <div className="col-span-2 lg:col-span-5 mt-6 md:mt-0">
            <div className="flex flex-col gap-5 rounded-2xl border-[1px] border-[#28282833] p-5">
              <h2 className="text-xl lg:text-2xl font-semibold text-center text-[#282828]">
                Want to cook: {totalWantToCook > 0
                  ? String(totalWantToCook).padStart(2, "0")
                  : totalWantToCook}
              </h2>
              <div className="divider border-[#28282826]"></div>
              {/* table of want to cook start */}
              <div className="max-w-full overflow-x-auto">
                <table className="table text-[#878787]">
                
                  <thead>
                    <tr className="text-lg">
                      <th></th>
                      <th>Name</th>
                      <th>Time</th>
                      <th>Calories</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody className=" bg-[#28282808]">
                    {/* row of want to cook section */}
                    {wantToCook.map((recipe, i) => {
                      return <WantToCook key={i} index={i} handleAddToCooking={handleAddToCooking} recipe={recipe} />;
                    })}
                  </tbody>
                </table>
              </div>
              {/* table of want to cook ends */}
              <h2 className="ttext-xl lg:text-2xl font-semibold text-center text-[#282828]">
                Currently cooking: {totalCurrentlyCooking > 0
                  ? String(totalCurrentlyCooking).padStart(2, "0")
                  : totalCurrentlyCooking}
              </h2>
              <div className="divider border-[#28282826]"></div>
              {/* table of currently cooking start */}
              <div className="overflow-x-auto">
                <table className="table text-[#282828B3]">
                
                  <thead>
                    <tr className="text-lg">
                      <th></th>
                      <th>Name</th>
                      <th>Time</th>
                      <th>Calories</th>
                    </tr>
                  </thead>
                  <tbody className="bg-[#28282808]">
                    {
                      currentlyCooking.map((recipe,i)=><CurrentlyCooking key={i} index={i} recipe={recipe} />)
                    }

                    <tr className="text-[#282828CC] font-medium">
                      <th></th>
                      <td></td>
                      <td>Total Time = {totalTime} minutes</td>
                      <td>Total Calories = {totalCalories} calories</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* table of currently cooking ends */}
            </div>
          </div>
        </div>
        <ToastContainer />
      </section>
    </>
  );
}

export default App;
