import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const BottomNavigation: React.FC = () => {
  const location = useLocation();

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      maxWidth: '440px',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-around',
      backgroundColor: '#FAD1A8', // 피그마 디자인 색상
      height: '59px', // 피그마 디자인 높이
      alignItems: 'center',
      zIndex: 100,
      borderTopLeftRadius: '30px',  // 피그마 디자인에 따른 둥근 모서리
      borderTopRightRadius: '30px',  // 피그마 디자인에 따른 둥근 모서리
    }}>
      {/* 홈 아이콘과 텍스트 */}
      <Link 
        to="/" 
        style={{
          textAlign: 'center',
          fontSize: '14px', // 피그마 디자인 폰트 크기
          fontWeight: location.pathname === '/' ? 700 : 400,
          color: location.pathname === '/' ? '#F75E00' : '#000000',
          textDecoration: 'none',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <div style={{ 
          width: '26px', 
          height: '26px', 
          backgroundColor: '#D9D9D9', 
          marginBottom: '5px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          {/* 아이콘 대체 - 실제 구현에서는 SVG 아이콘으로 교체 */}
          ⌂
        </div>
        네비홈
      </Link>
      
      {/* 검색 아이콘과 텍스트 */}
      <Link 
        to="/search" 
        style={{
          textAlign: 'center',
          fontSize: '14px', // 피그마 디자인 폰트 크기
          fontWeight: location.pathname === '/search' ? 700 : 400,
          color: location.pathname === '/search' ? '#F75E00' : '#000000',
          textDecoration: 'none',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <div style={{ 
          width: '26px', 
          height: '26px', 
          backgroundColor: '#D9D9D9', 
          marginBottom: '5px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          {/* 아이콘 대체 - 실제 구현에서는 SVG 아이콘으로 교체 */}
          🔍
        </div>
        네비검색
      </Link>
      
      {/* 등록 아이콘과 텍스트 */}
      <Link 
        to="/recipe/add" 
        style={{
          textAlign: 'center',
          fontSize: '14px', // 피그마 디자인 폰트 크기
          fontWeight: location.pathname === '/recipe/add' ? 700 : 400,
          color: location.pathname === '/recipe/add' ? '#F75E00' : '#000000',
          textDecoration: 'none',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <div style={{ 
          width: '26px', 
          height: '26px', 
          backgroundColor: '#D9D9D9', 
          marginBottom: '5px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          {/* 아이콘 대체 - 실제 구현에서는 SVG 아이콘으로 교체 */}
          +
        </div>
        네비등록
      </Link>
      
      {/* 마이페이지 아이콘과 텍스트 */}
      <Link 
        to="/mypage" 
        style={{
          textAlign: 'center',
          fontSize: '14px', // 피그마 디자인 폰트 크기
          fontWeight: location.pathname === '/mypage' ? 700 : 400,
          color: location.pathname === '/mypage' ? '#F75E00' : '#000000',
          textDecoration: 'none',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <div style={{ 
          width: '26px', 
          height: '26px', 
          backgroundColor: '#D9D9D9', 
          marginBottom: '5px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          {/* 아이콘 대체 - 실제 구현에서는 SVG 아이콘으로 교체 */}
          👤
        </div>
        네비마이페이지
      </Link>
      
      {/* 등록 버튼 - 피그마 디자인의 가운데 원형 버튼 */}
      <div style={{
        position: 'absolute',
        top: '-31px',  // 피그마 디자인 위치
        left: '50%',
        transform: 'translateX(-50%)',
        width: '62px',  // 피그마 디자인 크기
        height: '62px',  // 피그마 디자인 크기
        backgroundColor: '#D9D9D9',  // 피그마 디자인 색상
        borderRadius: '50%',  // 원형
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 101
      }}>
        <Link to="/recipe/add">
          <div style={{
            width: '26px',  // 피그마 디자인 크기
            height: '26px',  // 피그마 디자인 크기
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '24px',
            color: '#000'
          }}>
            +
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BottomNavigation; 