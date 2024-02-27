import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Layout,
  Mercury,
  MercuryOverview,
  MercuryStructure,
  MercurySurface,
  Venus,
  Earth,
  EarthOverview,
  EarthStructure,
  EarthSurface,
  Mars,
  MarsOverview,
  MarsStructure,
  MarsSurface,
  Jupiter,
  JupiterOverview,
  JupiterStructure,
  JupiterSurface,
  Saturn,
  SaturnOverview,
  SaturnStructure,
  SaturnSurface,
  Uranus,
  UranusOverview,
  UranusStructure,
  UranusSurface,
  Neptune,
  NeptuneOverview,
  NeptuneStructure,
  NeptuneSurface,
} from "./pages/index";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="Mercury" element={<Mercury />}>
            <Route index element={<MercuryOverview />} />
            <Route path="structure" element={<MercuryStructure />} />
            <Route path="surface" element={<MercurySurface />} />
          </Route>

          <Route path="Venus" element={<Venus />} />

          <Route path="Earth" element={<Earth />}>
            <Route index element={<EarthOverview />} />
            <Route path="structure" element={<EarthStructure />} />
            <Route path="surface" element={<EarthSurface />} />
          </Route>

          <Route path="Mars" element={<Mars />}>
            <Route index element={<MarsOverview />} />
            <Route path="structure" element={<MarsStructure />} />
            <Route path="surface" element={<MarsSurface />} />
          </Route>

          <Route path="Jupiter" element={<Jupiter />}>
            <Route index element={<JupiterOverview />} />
            <Route path="structure" element={<JupiterStructure />} />
            <Route path="surface" element={<JupiterSurface />} />
          </Route>

          <Route path="Saturn" element={<Saturn />}>
            <Route index element={<SaturnOverview />} />
            <Route path="structure" element={<SaturnStructure />} />
            <Route path="surface" element={<SaturnSurface />} />
          </Route>

          <Route path="Uranus" element={<Uranus />}>
            <Route index element={<UranusOverview />} />
            <Route path="structure" element={<UranusStructure />} />
            <Route path="surface" element={<UranusSurface />} />
          </Route>

          <Route path="Neptune" element={<Neptune />}>
            <Route index element={<NeptuneOverview />} />
            <Route path="structure" element={<NeptuneStructure />} />
            <Route path="surface" element={<NeptuneSurface />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
