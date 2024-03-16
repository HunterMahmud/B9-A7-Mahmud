function Cart() {
  return (
    <div className="flex flex-col gap-5 rounded-2xl border-[1px] border-[#28282833] p-5">
      <h2 className="text-xl font-semibold text-center">Want to cook: {1}</h2>
      <div className="divider"></div>
      {/* table of want to cook start */}
      <div className="max-w-full overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-lg">
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
              <td><button className="btn rounded-full bg-[#1DD100]">Preparing</button></td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* table of want to cook ends */}
      <h2 className="text-xl font-semibold text-center">Currently cooking: {2}</h2>
      <div className="divider"></div>
      {/* table of currently cooking start */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-lg">
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
             
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            
            </tr>
            {/* row 2 */}
            <tr className="hover">
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
            </tr>
            <tr className="hover">
              <th></th>
              <td></td>
              <td>Total Time = {5} minutes</td>
              <td>Total Calories = {100} calories</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* table of currently cooking ends */}
    </div>
  );
}

export default Cart;
