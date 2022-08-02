import { Route, Routes } from "react-router-dom";
import { AppContainer, Header } from "./components";
import { Home } from "./pages";

function App() {
  return (
    <AppContainer>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </AppContainer>
  );
}

export default App;
