import './App.css'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Tech from './Components/Tech/Tech.jsx'
import Grid from './Components/Background/grid.jsx'
import Stripes from './Components/Background/stripes_animated.jsx'
function App() {

  return (

    <div className='flex justify-center'>
      <div>
        <Grid />
      </div>
      <div className='h-[100vw] w-[50vw] flex justify-center border-x border-gray-500'>
        <Stripes />
        <div className='absolute h-fit w-[40vw] border-x border-gray-500 bg-[#121212]'>
          <div>
            <Home />
          </div>
          <hr className='w-full text-gray-500' />
          <div>
            <About />
          </div>
          <hr className=' w-full text-gray-500' />
          <div>
            <Tech />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
