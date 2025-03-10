import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './components/Header/Header';
import UserProfile from './components/UserProfile/UserProfile';
import HomePage from "./pages/HomePage"
import NotFoundPage from './pages/NotFoundPage';
import UsersPage from "./pages/UsersPage";
import BlogPage from "./pages/BlogPage";
import PostPage from "./pages/PostPage";

function App() {

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/users/:userId" element={<UserProfile />} />
        <Route path="/posts" element={<BlogPage/>} />
        <Route path="/posts/:postId" element={<PostPage/>} />
        
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
