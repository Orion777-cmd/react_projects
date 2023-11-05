import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './component/footer/footer.componet'
import Sidebar from './component/sidebar/sidebar.component'
import Explore from "./component/explore/explore.component"
import Navbar from "./component/navbar/navbar.component"
import Repostats from "./component/repostats/repostats.compnent"
import Reponav from "./component/reponav/reponav.component"
function App() {

  return (
   
      <div className="text-gray-900 text-sm">
        <Navbar />
        <Repostats />

        <Reponav />
        <div className="container mx-auto my-8 px-4 flex flex-col lg:flex-row">
          <Explore />
          <Sidebar /> 
        </div> 

        <Footer />
      </div>
   
  )
}


export default App
