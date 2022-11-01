import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MyPage from "./pages/Mypage";
import Board from "./components/Board";
import GlobalStyle from "./GlobalStyle";
import Register from "./pages/Register";
import FindPw from "./components/FindPw";
import Header from "./components/Header";
import EditInfo from "./components/EditInfo";

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/mypage" element={<MyPage />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/findPw" element={<FindPw />}></Route>
          <Route path="/mypage/editinfo" element={<EditInfo />}></Route>
          <Route path="/board" element={<Board />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
