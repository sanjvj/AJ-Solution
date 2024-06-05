import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Topbar} from './Components/Topbar'
import { Main } from './Components/Main'
import './App.css'


function App() {
  

  return (
    <>
<div className="relative h-full w-full bg-slate-950"><div class="absolute bottom-0 left-[-15%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
</div>    
      <Topbar></Topbar>
      <Main></Main>
    </>
  )
}

export default App
