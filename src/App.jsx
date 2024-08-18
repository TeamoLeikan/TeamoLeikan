import Home from "./pages/Home"
import Troll from "./pages/Troll";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
   return(
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home/>} />

            <Route path="/Troll" element={<Troll/>} />
         </Routes>
      </BrowserRouter>
   );
}
export default App;