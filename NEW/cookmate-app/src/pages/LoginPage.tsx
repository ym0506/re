import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import TopBar from '../components/TopBar';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 로그인 로직 구현
    console.log('Login attempt with:', { email, password });
    
    // 임시 로직: 성공적으로 로그인되었다고 가정하고 홈으로 이동
    navigate('/');
  };
  
  return (
    <div className="container">
      <TopBar showNavLinks={false} />
      
      <div className="page-content">
        <div style={{ 
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: 'calc(100vh - 150px)'
        }}>
          <h2 style={{ 
            fontSize: '30px',
            fontWeight: 800,
            color: '#F75E00',
            marginBottom: '30px'
          }}>
            환영합니다!
          </h2>
          
          <form 
            onSubmit={handleSubmit}
            style={{ 
              width: '100%',
              maxWidth: '300px'
            }}
          >
            <div style={{ marginBottom: '20px' }}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="이메일"
                style={{ 
                  width: '100%',
                  padding: '15px',
                  borderRadius: '10px',
                  border: 'none',
                  backgroundColor: '#f5f5f5',
                  fontSize: '14px'
                }}
                required
              />
            </div>
            
            <div style={{ marginBottom: '40px' }}>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="비밀번호"
                style={{ 
                  width: '100%',
                  padding: '15px',
                  borderRadius: '10px',
                  border: 'none',
                  backgroundColor: '#f5f5f5',
                  fontSize: '14px'
                }}
                required
              />
            </div>
            
            <button
              type="submit"
              style={{ 
                width: '100%',
                padding: '15px',
                borderRadius: '10px',
                border: 'none',
                backgroundColor: '#F75E00',
                color: 'white',
                fontSize: '16px',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
            >
              로그인
            </button>
          </form>
          
          <div style={{ 
            display: 'flex',
            alignItems: 'center',
            marginTop: '20px',
            fontSize: '14px'
          }}>
            <span>아직 회원이 아니신가요?</span>
            <Link 
              to="/signup" 
              style={{ 
                marginLeft: '10px',
                color: '#F75E00',
                fontWeight: 'bold'
              }}
            >
              회원가입
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage; 