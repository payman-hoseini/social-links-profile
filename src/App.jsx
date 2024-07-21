import profile from './assets/images/avatar-jessica.jpeg'
import './App.css'

function App() {

  return (
    <>
      <div className='bg-new_Grey-900  flex flex-col items-center'>
        <div className='bg-new_Grey-800 max-w-md w-[80vw] md:w-[50vw] my-44 rounded-2xl md:px-12 px-4 py-10  text-white'>
            <div className='flex flex-col items-center text-center'>
              <img src={profile} alt="Profile Picture" className='rounded-full w-32'/>
              <span className='mt-8 md:text-3xl text-2xl font-Inter font-semibold'>Jessica Randall</span>
              <span className='mt-2 md:text-lg text-sm font-semibold font-Inter text-new_Green'>London, United Kingdom</span>
              <span className='mt-8 text-xs font-Inter opacity-90 md:text-sm'>"Front-end developer and avid reader."</span>
            </div>
            <div className='flex flex-col mt-5 font-Inter font-bold'>
              <button className='bg-new_Grey-700 py-[10px] rounded-md hover:bg-new_Green hover:text-black hover:duration-500'>GitHub</button>
              <button className='bg-new_Grey-700 py-[10px] rounded-md mt-3 hover:bg-new_Green hover:text-black hover:duration-500'>Frontend Mentor</button>
              <button className='bg-new_Grey-700 py-[10px] rounded-md mt-3 hover:bg-new_Green hover:text-black hover:duration-500'>LinkedIn</button>
              <button className='bg-new_Grey-700 py-[10px] rounded-md mt-3 hover:bg-new_Green hover:text-black hover:duration-500'>Twitter</button>
              <button className='bg-new_Grey-700 py-[10px] rounded-md mt-3 hover:bg-new_Green hover:text-black hover:duration-500'>Instagram</button>
            </div>
        </div>
      </div>
    </>
  )
}

export default App
