import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Layout,
  Mercury,
  Venus,
  Earth,
  EarthOverview,
  EarthStructure,
  EarthSurface,
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
          <Route path="Mercury" element={<Mercury />} />
          <Route path="Venus" element={<Venus />} />
          <Route path="Earth" element={<Earth />}>
            <Route index element={<EarthOverview />} />
            <Route path="structure" element={<EarthStructure />} />
            <Route path="surface" element={<EarthSurface />} />
          </Route>
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
