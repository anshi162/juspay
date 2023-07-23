import React from 'react'
import Navbar from '../components/Navbar';
import Code from '../components/Code';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
const Home = () => {
  return (
    <DndProvider backend={HTML5Backend}>
    <div>
      <Navbar/>
      <Code/>
    </div>
    </DndProvider>
  )
}

export default Home
