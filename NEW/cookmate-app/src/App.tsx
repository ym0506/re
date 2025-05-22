import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/global.scss';

// 페이지 컴포넌트 불러오기
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import MyPage from './pages/MyPage';
import AddRecipePage from './pages/AddRecipePage';
import SearchPage from './pages/SearchPage';
import RecipeDetailPage from './pages/RecipeDetailPage';

// 나중에 구현할 페이지들을 위한 임시 컴포넌트
const NotFoundPage = () => <div className="container"><h1>404 - 페이지를 찾을 수 없습니다</h1></div>;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/recipe/add" element={<AddRecipePage />} />
        <Route path="/recipe/:id" element={<RecipeDetailPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
