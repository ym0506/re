import React, { useState, useEffect } from 'react';

interface SearchBarProps {
  onSearch?: (query: string) => void;
  placeholder?: string;
  initialValue?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ 
  onSearch, 
  placeholder = '오늘은 어떤 요리를 할까요?',
  initialValue = ''
}) => {
  const [query, setQuery] = useState(initialValue);

  useEffect(() => {
    setQuery(initialValue);
  }, [initialValue]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      style={{
        display: 'flex',
        width: '100%',
        border: '1px solid #000000',
        borderRadius: '10px',  // 피그마 디자인 radius
        padding: '5px',
        margin: '15px 0',
        backgroundColor: '#FFFFFF',
        height: '23px',  // 피그마 디자인 높이
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        style={{
          flex: 1,
          border: 'none',
          outline: 'none',
          fontSize: '8px',  // 피그마 디자인 폰트 크기
          padding: '0 5px',
          backgroundColor: 'transparent',
          height: '100%'
        }}
      />
      <button 
        type="submit" 
        style={{ 
          background: 'none', 
          border: 'none',
          cursor: 'pointer',
          padding: '0 5px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%'
        }}
      >
        {/* 세 개의 점 (상하단에 2개, 중앙에 1개) */}
        <svg width="9" height="8" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="3.5" cy="1" r="1" fill="black" />
          <circle cx="6.5" cy="4" r="1" fill="black" />
          <circle cx="3.5" cy="7" r="1" fill="black" />
        </svg>
      </button>
    </form>
  );
};

export default SearchBar; 