import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import TopBar from '../components/TopBar';
import BottomNavigation from '../components/BottomNavigation';
import '../styles/RecipeDetail.scss';

// 임시 데이터 - 나중에 API에서 가져올 예정
const recipeData = {
  id: 1,
  title: '토마토 미트볼 파스타',
  cookTime: '10min',
  servings: '1인분',
  difficulty: '난이도 하',
  author: 'Cameron Williamson',
  ingredients: [
    { name: '소고기', amount: '200g' },
    { name: '양파', amount: '1/2개' },
    { name: '빵가루', amount: '2큰술' },
    { name: '우유', amount: '50ml' },
    { name: '달걀', amount: '1개' }
  ],
  description: '맛있는 토마토 미트볼 파스타를 만드는 방법을 소개합니다. 신선한 재료와 간단한 조리 방법으로 누구나 쉽게 만들 수 있습니다.',
  steps: [
    '미트볼 재료를 모두 섞어 동그랗게 빚어줍니다.',
    '팬에 올리브오일을 두르고 미트볼을 노릇하게 구워줍니다.',
    '토마토 소스를 부어 끓여줍니다.',
    '파스타를 삶아 토마토 소스와 미트볼과 함께 플레이팅합니다.',
    '바질과 파마산 치즈를 뿌려 완성합니다.'
  ],
  comments: [
    { id: 1, user: '홍길동', text: '레시피 공유해주셔서 감사합니다 😭', profileImage: '' },
    { id: 2, user: '김철수', text: '아 군침도네용..', profileImage: '' },
    { id: 3, user: '이영희', text: '오늘 저녁으로 해봐야겠어요', profileImage: '' },
    { id: 4, user: '박지성', text: '레시피 완전 최고!', profileImage: '' }
  ]
};

const RecipeDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [comment, setComment] = useState('');

  // id를 사용하여 실제 데이터를 가져오는 로직이 들어갈 자리입니다.
  // 여기서는 임시 데이터를 사용합니다.
  const recipe = recipeData;

  const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (comment.trim()) {
      // 실제로는 API를 호출하여 댓글을 저장할 것입니다.
      console.log('댓글 저장:', comment);
      setComment('');
    }
  };

  return (
    <div className="container">
      <TopBar />
      
      <div className="recipe-detail-page">
        {/* 헤더 이미지 */}
        <div className="recipe-header-image">
          <div className="photo-text">PHOTO</div>
        </div>

        {/* 레시피 정보 카드 */}
        <div className="recipe-info-card">
          <h1 className="recipe-title">{recipe.title}</h1>
          
          <div className="recipe-meta">
            <div className="recipe-time">
              <span className="icon">⏱️</span>
              <span>{recipe.cookTime}</span>
            </div>
            <div className="recipe-servings">
              <span>{recipe.servings}</span>
            </div>
            <div className="recipe-difficulty">
              <span>{recipe.difficulty}</span>
            </div>
          </div>
          
          <div className="recipe-author">
            <div className="author-image"></div>
            <span className="author-name">{recipe.author}</span>
            <button className="subscribe-btn">구독</button>
          </div>
        </div>

        {/* 재료 섹션 */}
        <div className="recipe-section">
          <div className="section-header">
            <div className="icon-container">
              <img src="/icons/ingredients.svg" alt="재료" className="section-icon" />
            </div>
            <h2 className="section-title">재료</h2>
          </div>
          
          <div className="ingredients-list">
            {recipe.ingredients.map((ingredient, index) => (
              <div key={index} className="ingredient-item">
                <div className="ingredient-name">{ingredient.name}</div>
                <div className="ingredient-amount">{ingredient.amount}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 내용 섹션 */}
        <div className="recipe-section">
          <div className="section-header">
            <div className="icon-container">
              <img src="/icons/description.svg" alt="내용" className="section-icon" />
            </div>
            <h2 className="section-title">내용</h2>
          </div>
          
          <div className="recipe-description">
            {recipe.description}
          </div>
        </div>

        {/* 레시피 과정 섹션 */}
        <div className="recipe-section">
          <div className="section-header">
            <div className="icon-container">
              <img src="/icons/recipe.svg" alt="레시피" className="section-icon" />
            </div>
            <h2 className="section-title">레시피</h2>
          </div>
          
          <div className="recipe-steps">
            {recipe.steps.map((step, index) => (
              <div key={index} className="recipe-step">
                <div className="step-number">
                  <div className="circle">{index + 1}</div>
                </div>
                <div className="step-content">{step}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 커뮤니티 섹션 */}
        <div className="recipe-section">
          <div className="section-header">
            <div className="icon-container">
              <img src="/icons/community.svg" alt="커뮤니티" className="section-icon" />
            </div>
            <h2 className="section-title">커뮤니티</h2>
          </div>
          
          <div className="comments-container">
            {recipe.comments.map((comment) => (
              <div key={comment.id} className="comment">
                <div className="comment-profile"></div>
                <div className="comment-bubble">
                  <p className="comment-text">{comment.text}</p>
                </div>
              </div>
            ))}
          </div>
          
          <form className="comment-form" onSubmit={handleCommentSubmit}>
            <input
              type="text"
              value={comment}
              onChange={handleCommentChange}
              placeholder="댓글을 남겨보세요!"
              className="comment-input"
            />
            <button type="submit" className="comment-submit">
              <span className="icon">➤</span>
            </button>
          </form>
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default RecipeDetailPage; 