
function Card() {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-start ">
        <h2 className="card-title">chicken grills</h2>
        <p>chicken grills description will appear here</p>
        <div className="divider"></div>
        <div>
          <h3>Ingredients: 6</h3>
          <ul className="list-disc list-inside">
            <li>1 cup chicken breast</li>
            <li>1 cup chicken breast</li>
            <li>1 cup chicken breast</li>
            <li>1 cup chicken breast</li>
          </ul>
        </div>
        <div className="divider"></div>
        <div className="flex justify-between gap-3">
          <div className="flex gap-2"> 
          
          <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg>
         
            30 minutes
          </div>
          <div className="flex gap-2"> 
          <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"> <path d="M153.6 29.9l16-21.3C173.6 3.2 180 0 186.7 0C198.4 0 208 9.6 208 21.3V43.5c0 13.1 5.4 25.7 14.9 34.7L307.6 159C356.4 205.6 384 270.2 384 337.7C384 434 306 512 209.7 512H192C86 512 0 426 0 320v-3.8c0-48.8 19.4-95.6 53.9-130.1l3.5-3.5c4.2-4.2 10-6.6 16-6.6C85.9 176 96 186.1 96 198.6V288c0 35.3 28.7 64 64 64s64-28.7 64-64v-3.9c0-18-7.2-35.3-19.9-48l-38.6-38.6c-24-24-37.5-56.7-37.5-90.7c0-27.7 9-54.8 25.6-76.9z"/></svg>
            600 calories
            </div>
        </div>
        <div className="card-actions flex">
          <button className="btn btn-primary">Want to Cook</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
