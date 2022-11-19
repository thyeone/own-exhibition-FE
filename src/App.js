import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import MyPage from "./pages/Mypage";
import GlobalStyle from "./GlobalStyle";
import Register from "./pages/Register";
import FindPw from "./components/FindPw";
import Header from "./components/Header";
import Main from "./pages/Main";
import Update from "./components/Update";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/main" element={<Main />}></Route>
        <Route path="/mypage" element={<MyPage />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/findPw" element={<FindPw />}></Route>
        <Route path="/mypage/update" element={<Update />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
