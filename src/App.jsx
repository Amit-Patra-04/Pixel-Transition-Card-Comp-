import { useState } from 'react'
import './App.css'
import PixelTransition from './PixelTransition';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PixelTransition
  firstContent={
    <img
      src="Images\I1.jpg"
      alt="dev"
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
    />
  }
  secondContent={
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "grid",
        placeItems: "center",
        backgroundColor: "#111"
      }}
    >
      <p style={{ fontWeight: 900, fontSize: "3rem", color: "#ffffff" }}>Dev! Amit</p>
    </div>
  }
  gridSize={8}
  pixelColor='#ffffff'
  once={false}
  animationStepDuration={0.4}
  className="custom-pixel-card"
  // pixelColor="#ffffff"
/>
    </>
  )
}

export default App
