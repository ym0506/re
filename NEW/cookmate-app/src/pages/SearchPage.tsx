import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import TopBar from '../components/TopBar';
import BottomNavigation from '../components/BottomNavigation';
import SearchBar from '../components/SearchBar';
import RecipeCard from '../components/RecipeCard';
import { Recipe } from '../types';

// 임시 데이터 - 실제 구현에서는 API 호출로 대체
const DUMMY_RECIPES: Recipe[] = [
  {
    id: 1,
    title: "김치찌개",
    imageUrl: "https://via.placeholder.com/300?text=Kimchi+Stew",
    category: "한식",
    isNew: true,
    ingredients: [
      { name: "김치", amount: "1/2포기" },
      { name: "돼지고기", amount: "200g" }
    ],
    steps: [
      { stepNumber: 1, description: "김치를 적당한 크기로 썬다." },
      { stepNumber: 2, description: "돼지고기를 볶다가 김치를 넣고 같이 볶는다." },
      { stepNumber: 3, description: "물을 넣고 끓인다." }
    ],
    createdAt: new Date().toISOString(),
    userId: 1,
    userName: "요리왕"
  },
  {
    id: 2,
    title: "된장찌개",
    imageUrl: "https://via.placeholder.com/300?text=Doenjang+Stew",
    category: "한식",
    ingredients: [
      { name: "된장", amount: "2큰술" },
      { name: "두부", amount: "1/2모" }
    ],
    steps: [
      { stepNumber: 1, description: "물을 끓인다." },
      { stepNumber: 2, description: "된장을 푼다." },
      { stepNumber: 3, description: "야채와 두부를 넣는다." }
    ],
    createdAt: new Date(Date.now() - 86400000).toISOString(),
    userId: 2,
    userName: "한식요리사"
  },
  // ... 더 많은 레시피
];

const SearchPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [searchResults, setSearchResults] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    if (initialQuery) {
      performSearch(initialQuery);
    }
  }, [initialQuery]);
  
  const performSearch = (query: string) => {
    setLoading(true);
    
    // 실제 구현에서는 API 호출
    setTimeout(() => {
      const results = DUMMY_RECIPES.filter(recipe => 
        recipe.title.toLowerCase().includes(query.toLowerCase()) ||
        recipe.category.toLowerCase().includes(query.toLowerCase()) ||
        recipe.ingredients.some(ing => ing.name.toLowerCase().includes(query.toLowerCase()))
      );
      
      setSearchResults(results);
      setLoading(false);
    }, 500);
  };
  
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setSearchParams({ q: query });
    performSearch(query);
  };
  
  return (
    <div className="container">
      <TopBar />
      
      <div className="page-content">
        <h2 className="page-title">레시피 검색</h2>
        
        <div style={{ marginBottom: '20px' }}>
          <SearchBar onSearch={handleSearch} initialValue={searchQuery} />
        </div>
        
        {loading ? (
          <div className="loading">검색 중...</div>
        ) : (
          <div>
            <h3>{searchResults.length > 0 
              ? `'${searchQuery}'에 대한 검색결과 (${searchResults.length})` 
              : `'${searchQuery}'에 대한 검색결과가 없습니다.`}</h3>
            
            <div className="recipe-grid">
              {searchResults.map(recipe => (
                <RecipeCard
                  key={recipe.id}
                  id={recipe.id}
                  title={recipe.title}
                  image={recipe.imageUrl}
                  isNew={recipe.isNew}
                  size="small"
                />
              ))}
            </div>
          </div>
        )}
      </div>
      
      <BottomNavigation />
    </div>
  );
};

export default SearchPage; 