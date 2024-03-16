

function WantToCook({recipe,index,handleAddToCooking}) {
    const {recipe_name, calories, preparing_time} = recipe;
    
  return (
    <tr>
    <th>{index+1}</th>
    <td>{recipe_name}</td>
    <td>{preparing_time} minutes</td>
    <td>{calories} calories</td>
    <td><button onClick={()=>handleAddToCooking(recipe)} className="btn rounded-full bg-[#1DD100]">Preparing</button></td>
</tr>
  );
}


function CurrentlyCooking({recipe,index}) {
  const {recipe_name, preparing_time, calories} = recipe;

  return (
     <tr>
     <th>{index+1}</th>
     <td>{recipe_name}</td>
     <td>{preparing_time} minutes</td>
     <td>{calories} calories</td>
   </tr>
  );
}
export {WantToCook,CurrentlyCooking};




