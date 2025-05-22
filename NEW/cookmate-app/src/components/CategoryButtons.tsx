import React from 'react';

interface CategoryButtonsProps {
  categories: string[];
  onCategorySelect?: (category: string) => void;
  selectedCategory?: string;
}

const CategoryButtons: React.FC<CategoryButtonsProps> = ({ 
  categories, 
  onCategorySelect,
  selectedCategory
}) => {
  // 카테고리 버튼 섹션 제목 추가 - 피그마 디자인에 맞춤
  return (
    <div>
      <h2 style={{ 
        color: '#F75E00',
        fontSize: '20px',
        fontWeight: 600,
        textAlign: 'center',
        margin: '20px 0'
      }}>
        Categories
      </h2>
      
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between',  // 피그마 디자인에서 균일하게 정렬
        width: '100%',
        marginTop: '15px',
        marginBottom: '15px'
      }}>
        {categories.map((category, index) => (
          <div 
            key={index}
            onClick={() => onCategorySelect && onCategorySelect(category)}
            style={{ 
              cursor: 'pointer',
              backgroundColor: '#FAD1A8',  // 피그마 디자인 색상
              opacity: '0.6',  // 피그마 디자인 투명도
              borderRadius: '5px',
              width: '60px',  // 피그마 디자인 크기 조절
              height: '39px',  // 피그마 디자인 크기
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontWeight: selectedCategory === category ? 'bold' : 'normal',
              fontSize: '14px',  // 피그마 디자인 폰트 크기
              flexShrink: 0  // 크기 고정
            }}
          >
            {category}
          </div>
        ))}
      </div>
      
      {/* Let's get cooking 텍스트 - 피그마 디자인에 맞춤 */}
      <p style={{
        fontWeight: 200,  // Extra Light 폰트
        fontSize: '16px',
        textAlign: 'center',
        margin: '15px 0'
      }}>
        Let's get cooking Let's get cooking Let's get cooking Let's get cooking
      </p>
    </div>
  );
};

export default CategoryButtons; 