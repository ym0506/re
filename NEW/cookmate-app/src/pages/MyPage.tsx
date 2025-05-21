import React from 'react';
import { useNavigate } from 'react-router-dom';
import TopBar from '../components/TopBar';
import BottomNavigation from '../components/BottomNavigation';

const MenuItem: React.FC<{
  title: string;
  onClick: () => void;
}> = ({ title, onClick }) => {
  return (
    <div 
      className="btn secondary" 
      style={{ 
        margin: '10px 0',
        padding: '25px 20px',
        display: 'flex',
        alignItems: 'center',
        textAlign: 'left',
        fontSize: '18px',
        fontWeight: 600,
        width: '100%',
        borderRadius: '10px',
        background: 'rgba(250, 209, 168, 0.2)',
        cursor: 'pointer'
      }}
      onClick={onClick}
    >
      {title}
      <span style={{ marginLeft: 'auto' }}>›</span>
    </div>
  );
};

const MyPage: React.FC = () => {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    // 로그아웃 처리 로직
    alert('로그아웃 되었습니다.');
    navigate('/');
  };
  
  return (
    <div className="container">
      <TopBar showNavLinks={false} />
      
      <div className="page-content">
        <h1 style={{ 
          fontSize: '24px', 
          fontWeight: 800, 
          color: '#F75E00',
          textAlign: 'center',
          margin: '20px 0'
        }}>
          마이페이지
        </h1>
        
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column',
          alignItems: 'center',
          marginBottom: '30px'
        }}>
          <div style={{ 
            width: '140px',
            height: '140px',
            borderRadius: '70px',
            backgroundColor: '#d9d9d9',
            marginBottom: '20px'
          }} />
          
          <h2 style={{ 
            fontSize: '20px',
            fontWeight: 'bold'
          }}>
            쿡메이트님
          </h2>
        </div>
        
        <div>
          <MenuItem 
            title="내 정보 수정" 
            onClick={() => navigate('/mypage/edit-profile')} 
          />
          
          <MenuItem 
            title="내가 올린 레시피" 
            onClick={() => navigate('/mypage/my-recipes')} 
          />
          
          <MenuItem 
            title="즐겨찾기 레시피" 
            onClick={() => navigate('/mypage/favorites')} 
          />
          
          <MenuItem 
            title="알림 설정" 
            onClick={() => navigate('/mypage/notifications')} 
          />
          
          <MenuItem 
            title="로그아웃" 
            onClick={handleLogout} 
          />
        </div>
      </div>
      
      <BottomNavigation />
    </div>
  );
};

export default MyPage; 