import './App.css'
import Contact from './Contact'
import { Toaster } from "react-hot-toast"
import IdCard from './IdCard'
import Toolbox from './Toolbox'

function App() {
  return (
    <>
      <Toaster position="top-middle" />
      <div className='w-full min-w-[100vw] h-full min-h-[100vh] bg-[rgb(21,19,18)] flex items-center justify-center poppins no-scrollbar'>
        {/* center container */}
        <div className='w-full h-fit max-w-[1140px] p-[30px] lg:p-[40px] bg-transparent flex flex-col lg:flex-row gap-[100px] lg:gap-[50px] bg-red-300'>
          <IdCard />
          <div className='w-full h-fit flex flex-col gap-[100px] lg:gap-[120px]'>
            <Toolbox />
            <Contact />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
