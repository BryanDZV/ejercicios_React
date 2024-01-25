import data from '../data';
import './App.css'
import Ropa from './componentes/Ropa/Ropa';
import React from "react";
 const {product:{title,img,price,ref,colors,sizes}}=data;

function App() {
 
  return (
    <div>
      <Ropa objeto={{ title, img, price, ref, colors, sizes }} />
    </div>
  
  )
}

export default App
