import { useState } from 'react'
import './App.css'
import Card from './components/Card';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <section id="lets-discuss" class="mx-auto px-7 lg:px-5 max-w-7xl">
        <div class="flex flex-col justify-center items-center text-center my-6">
          <h2 class="text-[#150B2B] text-3xl lg:text-4xl font-semibold">
          Our Recipes
          </h2>
          <p class="my-6 max-w-[800px] font-inter text-[#12132D99]">
          Explore Nova's diverse collection of recipes, crafted to delight every palate and elevate your culinary journey.
          </p>
        </div>

    <div className='grid grid-cols-12'>
    <div className='col-span-8 grid grid-cols-2 gap-5'>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    </div>
    <div className='col-span-4'>
      <h1>amr sonar bangla ami tovai vfdfdjkaf</h1>
    </div>
    </div>
  
      
    </section>
    </>
  )
}

export default App;
