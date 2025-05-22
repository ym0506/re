import React, { useState, useEffect } from 'react';
import TopBar from '../components/TopBar';
import BottomNavigation from '../components/BottomNavigation';
import SearchBar from '../components/SearchBar';
import CategoryButtons from '../components/CategoryButtons';
import RecipeCard from '../components/RecipeCard';
import { Recipe } from '../types';

// 실제 API 구현 전 임시 데이터 사용
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
  {
    id: 3,
    title: "스파게티 카르보나라",
    imageUrl: "https://via.placeholder.com/300?text=Carbonara",
    category: "양식",
    isNew: true,
    ingredients: [
      { name: "스파게티 면", amount: "200g" },
      { name: "베이컨", amount: "100g" },
      { name: "계란", amount: "2개" }
    ],
    steps: [
      { stepNumber: 1, description: "면을 삶는다." },
      { stepNumber: 2, description: "베이컨을 볶는다." },
      { stepNumber: 3, description: "계란과 치즈를 섞는다." }
    ],
    createdAt: new Date().toISOString(),
    userId: 3,
    userName: "파스타장인"
  },
  {
    id: 4,
    title: "초밥",
    imageUrl: "https://via.placeholder.com/300?text=Sushi",
    category: "일식",
    ingredients: [
      { name: "쌀", amount: "2컵" },
      { name: "연어", amount: "200g" }
    ],
    steps: [
      { stepNumber: 1, description: "밥을 짓는다." },
      { stepNumber: 2, description: "식초를 넣어 잘 섞는다." },
      { stepNumber: 3, description: "밥 위에 연어를 올린다." }
    ],
    createdAt: new Date(Date.now() - 172800000).toISOString(),
    userId: 4,
    userName: "스시명인"
  },
  {
    id: 5,
    title: "마카롱",
    imageUrl: "https://via.placeholder.com/300?text=Macaron",
    category: "베이커리",
    isNew: true,
    ingredients: [
      { name: "아몬드 가루", amount: "100g" },
      { name: "설탕", amount: "100g" }
    ],
    steps: [
      { stepNumber: 1, description: "아몬드 가루와 설탕을 섞는다." },
      { stepNumber: 2, description: "머랭을 만든다." },
      { stepNumber: 3, description: "짜서 굽는다." }
    ],
    createdAt: new Date().toISOString(),
    userId: 5,
    userName: "베이킹마스터"
  },
  {
    id: 6,
    title: "에그 베네딕트",
    imageUrl: "https://via.placeholder.com/300?text=Egg+Benedict",
    category: "브런치",
    ingredients: [
      { name: "잉글리시 머핀", amount: "2개" },
      { name: "계란", amount: "2개" }
    ],
    steps: [
      { stepNumber: 1, description: "잉글리시 머핀을 굽는다." },
      { stepNumber: 2, description: "수란을 만든다." },
      { stepNumber: 3, description: "홀란데이즈 소스를 만들어 뿌린다." }
    ],
    createdAt: new Date(Date.now() - 259200000).toISOString(),
    userId: 6,
    userName: "브런치카페"
  }
];

const HomePage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('한식');
  const categories = ['한식', '베이커리', '브런치', '일식', '중식', '양식'];
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>([]);
  
  useEffect(() => {
    // 실제 구현에서는 API 호출로 대체
    setRecipes(DUMMY_RECIPES);
  }, []);
  
  useEffect(() => {
    if (selectedCategory === 'ALL') {
      setFilteredRecipes(recipes);
    } else {
      setFilteredRecipes(recipes.filter(recipe => recipe.category === selectedCategory));
    }
  }, [selectedCategory, recipes]);
  
  const handleSearch = (query: string) => {
    if (!query.trim()) {
      // 검색어가 없으면 카테고리 필터링만 적용
      if (selectedCategory === 'ALL') {
        setFilteredRecipes(recipes);
      } else {
        setFilteredRecipes(recipes.filter(recipe => recipe.category === selectedCategory));
      }
      return;
    }
    
    const lowerQuery = query.toLowerCase();
    const searchResults = recipes.filter(recipe => {
      // 카테고리가 선택되어 있으면 카테고리도 필터링
      const categoryMatch = selectedCategory === 'ALL' || recipe.category === selectedCategory;
      const titleMatch = recipe.title.toLowerCase().includes(lowerQuery);
      
      return categoryMatch && titleMatch;
    });
    
    setFilteredRecipes(searchResults);
  };

  // 새 레시피만 필터링
  const newRecipes = recipes.filter(recipe => recipe.isNew);
  // 오늘의 추천 레시피 (임의로 처음 3개 선택)
  const recommendedRecipes = recipes.slice(0, 3);

  return (
    <div className="container" style={{ maxWidth: '440px', margin: '0 auto', backgroundColor: '#FFFFFF' }}>
      <TopBar />
      
      <div style={{ padding: '0 15px', paddingBottom: '80px' }}>
        {/* 검색바 */}
        <SearchBar onSearch={handleSearch} />
        
        {/* 카테고리 버튼 */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          {categories.map((category, index) => (
            <div 
              key={index}
              onClick={() => setSelectedCategory(category)}
              style={{ 
                cursor: 'pointer',
                backgroundColor: '#FAD1A8',
                opacity: '0.6',
                borderRadius: '5px',
                width: '60px',
                height: '39px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontWeight: selectedCategory === category ? 'bold' : 'normal',
                fontSize: '14px',
                flexShrink: 0
              }}
            >
              {category}
            </div>
          ))}
        </div>
        
        {/* 텍스트 - Let's get cooking */}
        <p style={{
          fontWeight: 200,  // Extra Light 폰트
          fontSize: '16px',
          textAlign: 'center',
          margin: '15px 0'
        }}>
          Let's get cooking Let's get cooking Let's get cooking Let's get cooking
        </p>
        
        {/* SHARE YOUR FOOD! 섹션 */}
        <div style={{ 
          position: 'relative',
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '50px',
          marginTop: '20px'
        }}>
          {/* 왼쪽 텍스트 */}
          <div style={{ marginTop: '20px' }}>
            <h2 style={{ 
              color: '#F75E00',
              fontSize: '24px',
              fontWeight: 400,
              lineHeight: '28px',
              marginBottom: '0'
            }}>SHARE</h2>
            <h2 style={{ 
              color: '#F75E00',
              fontSize: '24px',
              fontWeight: 400,
              lineHeight: '28px'
            }}>YOUR FOOD!</h2>
            
            {/* 왼쪽 원형 요소 */}
            <div style={{
              width: '120px',
              height: '120px',
              backgroundColor: '#F7D1A9',
              borderRadius: '50%',
              position: 'absolute',
              left: '-40px',
              top: '90px',
              zIndex: -1
            }}></div>
          </div>
          
          {/* 오른쪽 박스 */}
          <div style={{ 
            width: '213px',
            height: '223px',
            backgroundColor: '#F5F5F5',
            borderRadius: '30px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            padding: '20px 15px',
            position: 'relative'
          }}>
            {/* PHOTO 텍스트 */}
            <div style={{
              position: 'absolute',
              bottom: '30px',
              right: '10px',
              color: '#FFFFFF',
              fontSize: '32px',
              fontWeight: 700
            }}>
              PHOTO
            </div>
            
            {/* 버튼들 - 상단 */}
            <div style={{ display: 'flex', gap: '5px', marginBottom: '5px' }}>
              <div style={{ 
                border: '1px solid black',
                borderRadius: '30px',
                padding: '1px 8px',
                fontSize: '14px'
              }}>
                COOK.
              </div>
              <div style={{ 
                border: '1px solid black',
                borderRadius: '30px',
                padding: '1px 8px',
                fontSize: '14px'
              }}>
                SHARE.
              </div>
            </div>
            
            {/* 버튼들 - 하단 */}
            <div style={{ display: 'flex', gap: '5px' }}>
              <div style={{ 
                border: '1px solid black',
                borderRadius: '30px',
                padding: '1px 8px',
                fontSize: '14px'
              }}>
                CREATE.
              </div>
              <div style={{ 
                border: '1px solid black',
                borderRadius: '30px',
                padding: '1px 8px',
                fontSize: '14px'
              }}>
                TOGETHER.
              </div>
            </div>
          </div>
        </div>
        
        {/* 오늘의 추천 레시피 */}
        <div>
          <h2 style={{ 
            color: '#F75E00',
            fontSize: '20px',
            fontWeight: 600,
            textAlign: 'center',
            margin: '20px 0'
          }}>
            TODAY'S 추천 레시피
          </h2>
          
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between',
            marginBottom: '30px'
          }}>
            {/* 중앙 큰 레시피 카드 */}
            <RecipeCard 
              id={recommendedRecipes[0]?.id || 1} 
              title={recommendedRecipes[0]?.title || "김치찌개"} 
              image={recommendedRecipes[0]?.imageUrl || "https://via.placeholder.com/300?text=Recipe"}
              size="large"
            />
            
            {/* 측면 중간 레시피 카드들 */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <RecipeCard 
                id={recommendedRecipes[1]?.id || 2} 
                title={recommendedRecipes[1]?.title || "된장찌개"} 
                image={recommendedRecipes[1]?.imageUrl || "https://via.placeholder.com/300?text=Recipe"}
                size="medium"
              />
            </div>
          </div>
        </div>
        
        {/* 신규 등록 레시피 */}
        <div>
          <h2 style={{ 
            color: '#F75E00',
            fontSize: '20px',
            fontWeight: 600,
            textAlign: 'center',
            margin: '20px 0'
          }}>
            신규 등록 레시피
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
            {newRecipes.map(recipe => (
              <RecipeCard 
                key={recipe.id}
                id={recipe.id} 
                title={recipe.title} 
                image={recipe.imageUrl || "https://via.placeholder.com/300?text=Recipe"}
                isNew={true}
                size="small"
              />
            ))}
          </div>
        </div>
      </div>
      
      <BottomNavigation />
    </div>
  );
};

export default HomePage; 