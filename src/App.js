import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MyPage from "./pages/Mypage";
import Board from "./components/Board";
import GlobalStyle from "./GlobalStyle";
import Register from "./pages/Register";
import FindPw from "./components/FindPw";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <GlobalStyle />
      <Routes>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Mypage" element={<MyPage />}></Route>
        <Route path="/Register" element={<Register />}></Route>
        <Route path="/FindPw" element={<FindPw />}></Route>
        <Route path="/Board" element={<Board />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
