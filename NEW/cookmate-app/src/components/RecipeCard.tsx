import React from 'react';
import { Link } from 'react-router-dom';

interface RecipeCardProps {
  id: number;
  title: string;
  image: string;
  isNew?: boolean;
  size?: 'large' | 'medium' | 'small';
}

const RecipeCard: React.FC<RecipeCardProps> = ({ 
  id, 
  title, 
  image,
  isNew = false,
  size = 'medium'
}) => {
  // 피그마 디자인에 맞는 스타일 적용
  let cardStyle: React.CSSProperties = {
    position: 'relative',
    borderRadius: '30px', // 피그마 디자인 radius
    backgroundColor: '#FAD1A8', // 피그마 색상
    opacity: 0.3, // 피그마 투명도
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    textDecoration: 'none',
    color: '#000000',
  };
  
  let imageStyle: React.CSSProperties = {
    width: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundImage: `url(${image})`
  };
  
  let titleStyle: React.CSSProperties = {
    padding: '10px',
    fontSize: '14px',
    fontWeight: 500,
    textAlign: 'center'
  };
  
  // 피그마 디자인에 맞는 크기 설정
  if (size === 'large') {
    cardStyle = {
      ...cardStyle,
      width: '193px',
      height: '210px',
    };
    imageStyle = {
      ...imageStyle,
      height: '160px',
    };
  } else if (size === 'medium') {
    cardStyle = {
      ...cardStyle,
      width: '142px',
      height: '162px',
    };
    imageStyle = {
      ...imageStyle,
      height: '120px',
    };
  } else if (size === 'small') {
    cardStyle = {
      ...cardStyle,
      width: '131px',
      height: '68px',
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: '10px', // 피그마 디자인의 small 카드 radius
    };
    imageStyle = {
      ...imageStyle,
      width: '50px',
      height: '50px',
      borderRadius: '50%',
      marginLeft: '10px',
    };
    titleStyle = {
      ...titleStyle,
      fontSize: '10px',
      padding: '5px',
      textAlign: 'center',
      flex: 1
    };
  }
  
  return (
    <Link to={`/recipe/${id}`} style={cardStyle}>
      {isNew && (
        <div style={{
          position: 'absolute',
          top: '5px',
          left: '5px',
          zIndex: 2,
          backgroundColor: '#F5F5F5',
          color: '#000000',
          width: '23px',
          height: '23px',
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '5px',
          fontWeight: 800,
        }}>
          NEW
        </div>
      )}
      <div style={imageStyle} />
      <div style={titleStyle}>
        {title}
      </div>
    </Link>
  );
};

export default RecipeCard; 