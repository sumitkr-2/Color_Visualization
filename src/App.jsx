import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')

  return (
    <div
      className="w-screen h-screen transition-all"
      // ✅ use `background` instead of `backgroundColor`
      style={{ background: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">

          {/* Basic colors */}
          <button onClick={() => setColor("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "red" }}>Red</button>
          <button onClick={() => setColor("blue")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "blue" }}>Blue</button>
          <button onClick={() => setColor("green")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "green" }}>Green</button>
          <button onClick={() => setColor("orange")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "orange" }}>Orange</button>
          <button onClick={() => setColor("pink")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "pink" }}>Pink</button>
          <button onClick={() => setColor("violet")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "violet" }}>Violet</button>
          <button onClick={() => setColor("black")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "black" }}>Black</button>

          {/* Extra shades */}
          <button onClick={() => setColor("#1E90FF")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "#1E90FF" }}>Dodger Blue</button>
          <button onClick={() => setColor("#FF1493")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "#FF1493" }}>Deep Pink</button>
          <button onClick={() => setColor("#00CED1")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "#00CED1" }}>Dark Turquoise</button>
          <button onClick={() => setColor("#FFD700")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{ backgroundColor: "#FFD700" }}>Gold</button>
          <button onClick={() => setColor("#6A5ACD")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "#6A5ACD" }}>Slate Blue</button>
          <button onClick={() => setColor("#A52A2A")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "#A52A2A" }}>Brown</button>
          <button onClick={() => setColor("#2E8B57")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "#2E8B57" }}>Sea Green</button>

          {/* Cool gradients (these will now work ✅) */}
          <button
            onClick={() => setColor("linear-gradient(to right, #ff9966, #ff5e62)")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ background: "linear-gradient(to right, #ff9966, #ff5e62)" }}
          >
            Sunset
          </button>

          <button
            onClick={() => setColor("linear-gradient(to right, #00b09b, #96c93d)")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ background: "linear-gradient(to right, #00b09b, #96c93d)" }}
          >
            Greenish
          </button>

          <button
            onClick={() => setColor("linear-gradient(to right, #8e2de2, #4a00e0)")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ background: "linear-gradient(to right, #8e2de2, #4a00e0)" }}
          >
            Purple
          </button>

          <button
            onClick={() => setColor("linear-gradient(to right, #ff512f, #dd2476)")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ background: "linear-gradient(to right, #ff512f, #dd2476)" }}
          >
            Rose
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
