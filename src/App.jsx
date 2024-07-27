import { Route, Routes } from "react-router-dom"
import Mhome from "./components/Mhome"

const App = () => {
  return (
    <div className="w-screen h-screen bg-[#151515] flex">
      <Routes>
        <Route path="/" element={<Mhome />} />
      </Routes>
    </div>
  )
}

export default App