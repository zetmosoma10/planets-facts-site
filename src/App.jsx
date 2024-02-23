import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Layout,
  Mercury,
  Venus,
  Earth,
  Mars,
  Jupiter,
  Saturn,
  Uranus,
  Neptune,
} from "./pages/index";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="Mercury" element={<Mercury />} />
          <Route path="Venus" element={<Venus />} />
          <Route path="Earth" element={<Earth />} />
          <Route path="Mars" element={<Mars />} />
          <Route path="Jupiter" element={<Jupiter />} />
          <Route path="Saturn" element={<Saturn />} />
          <Route path="Uranus" element={<Uranus />} />
          <Route path="Neptune" element={<Neptune />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
