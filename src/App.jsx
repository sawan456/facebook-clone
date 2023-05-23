// import React from 'react'
import Footer from "./Footer"
import Header from "./Header"
import Sidebar from "./Sidebar.jsx"
import Feed from "./Feed.jsx"
import Widgets from "./Widgets.jsx"
import Login from "./Login"
import './App.css'
import { useStateValue } from "./StateProvider"

const App = () => {
  // const user = null;
  const [{user},dispatch] = useStateValue();

  return (
    <div className='app'>
      {!user ? (<Login/>) :
      (
        <>
        <Header/>
      <div className="app__body">
        <Sidebar/>
        <Feed/>
        <Widgets/>
      </div>
        </>
      )}
      <Footer/>
    </div>
  )
}

export default App
