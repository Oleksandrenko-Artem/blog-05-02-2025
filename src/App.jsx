import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './components/Header/Header';
import HomePage from "./pages/HomePage"
import NotFoundPage from './pages/NotFoundPage';
import UsersPage from "./pages/UsersPage";
import BlogPage from "./pages/BlogPage";
import PostPage from "./pages/PostPage";
import UserPage from './pages/UserPage';
import TagPage from './pages/TagPage';
import Footer from './components/Footer/Footer';
import SearchResultPage from "./pages/SearchResultPage";

function App() {

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/users/:userId" element={<UserPage />} />
        <Route path="/posts" element={<BlogPage/>} />
        <Route path="/posts/:postId" element={<PostPage />} />
        <Route path="/posts/tag/:tagName" element={<TagPage />} />
        <Route path="/posts/search" element={<SearchResultPage />} />
        
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
