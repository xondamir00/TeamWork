import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import { Header } from "./shared/navbar";
import { RaceStatusBar } from "./components/navigation/RaceStatusBar";

const App = () => {
  return (
    <div>
      <Header />
      <RaceStatusBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
