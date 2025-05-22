import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface TopBarProps {
  showNavLinks?: boolean;
}

const TopBar: React.FC<TopBarProps> = ({ showNavLinks = true }) => {
  const location = useLocation();
  
  return (
    <div style={{
      width: '100%',
      height: '33px',  // 피그마 디자인 높이
      backgroundColor: '#FAD1A8',  // 피그마 디자인 색상
      opacity: '0.8',  // 피그마 디자인 투명도
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      padding: '0 15px'
    }}>
      {showNavLinks && (
        <Link to="/mypage" style={{ 
          position: 'absolute', 
          left: '15px',
          fontSize: '8px',  // 피그마 디자인 폰트 크기
          color: '#000000',
          textDecoration: 'none' 
        }}>
          마이페이지
        </Link>
      )}
      
      <Link to="/" style={{
        fontWeight: 800,  // Extra Bold
        fontSize: '10px',  // 피그마 디자인 폰트 크기
        color: '#F75E00',  // 피그마 디자인 색상
        textAlign: 'center',
        textDecoration: 'none'
      }}>
        COOKMATE
      </Link>
      
      {showNavLinks && (
        <div style={{ 
          position: 'absolute', 
          right: '15px', 
          display: 'flex', 
          gap: '5px' 
        }}>
          <Link to="/signup" style={{ 
            fontSize: '8px',  // 피그마 디자인 폰트 크기
            color: '#000000',
            textDecoration: 'none'
          }}>
            회원가입
          </Link>
          <Link to="/login" style={{ 
            fontSize: '8px',  // 피그마 디자인 폰트 크기
            color: '#000000',
            textDecoration: 'none'
          }}>
            로그인
          </Link>
        </div>
      )}
    </div>
  );
};

export default TopBar; 