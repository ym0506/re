import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TopBar from '../components/TopBar';
import BottomNavigation from '../components/BottomNavigation';
import '../styles/AddRecipe.scss';

interface IngredientInput {
  name: string;
  amount: string;
}

interface StepInput {
  description: string;
  imageFile?: File;
  imagePreview?: string;
}

const AddRecipePage: React.FC = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('한식');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState<IngredientInput[]>([{ name: '', amount: '' }]);
  const [steps, setSteps] = useState<StepInput[]>([{ description: '' }]);
  const [mainImageFile, setMainImageFile] = useState<File | null>(null);
  const [mainImagePreview, setMainImagePreview] = useState<string>('');
  const [completedDishFile, setCompletedDishFile] = useState<File | null>(null);
  const [completedDishPreview, setCompletedDishPreview] = useState<string>('');
  const [showNickname, setShowNickname] = useState(true);
  
  const categories = ['한식', '일식', '중식', '양식', '기타'];
  
  const handleMainImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setMainImageFile(file);
      
      const reader = new FileReader();
      reader.onload = () => {
        setMainImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  
  const handleCompletedDishImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setCompletedDishFile(file);
      
      const reader = new FileReader();
      reader.onload = () => {
        setCompletedDishPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  
  const handleStepImageChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const updatedSteps = [...steps];
      updatedSteps[index].imageFile = file;
      
      const reader = new FileReader();
      reader.onload = () => {
        updatedSteps[index].imagePreview = reader.result as string;
        setSteps(updatedSteps);
      };
      reader.readAsDataURL(file);
    }
  };
  
  const addIngredient = () => {
    setIngredients([...ingredients, { name: '', amount: '' }]);
  };
  
  const removeIngredient = (index: number) => {
    const updatedIngredients = [...ingredients];
    updatedIngredients.splice(index, 1);
    setIngredients(updatedIngredients);
  };
  
  const updateIngredient = (index: number, field: keyof IngredientInput, value: string) => {
    const updatedIngredients = [...ingredients];
    updatedIngredients[index][field] = value;
    setIngredients(updatedIngredients);
  };
  
  const addStep = () => {
    setSteps([...steps, { description: '' }]);
  };
  
  const removeStep = (index: number) => {
    const updatedSteps = [...steps];
    updatedSteps.splice(index, 1);
    setSteps(updatedSteps);
  };
  
  const updateStep = (index: number, description: string) => {
    const updatedSteps = [...steps];
    updatedSteps[index].description = description;
    setSteps(updatedSteps);
  };
  
  const toggleNickname = () => {
    setShowNickname(!showNickname);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 실제 구현 시 API 호출로 데이터 전송
    console.log('Recipe data:', {
      title,
      category,
      description,
      ingredients,
      steps,
      mainImageFile,
      completedDishFile,
      showNickname
    });
    
    // 제출 후 홈페이지로 이동 (실제 구현에서는 성공 후 이동)
    alert('레시피가 등록되었습니다!');
    navigate('/');
  };
  
  return (
    <div className="container">
      <TopBar />
      
      <div className="add-recipe-page">
        {/* 헤더 영역 */}
        <div className="page-header">
          <div className="header-bg-ellipse"></div>
          <div className="header-bg-ellipse-2"></div>
          <div className="logo-text">COOKMATE</div>
          <div className="header-title">
            나만의 레시피를<br />등록해보세요!
          </div>
        </div>
        
        <form onSubmit={handleSubmit}>
          {/* 카테고리 선택 */}
          <div className="form-section">
            <div className="section-title">카테고리</div>
            <div className="category-options">
              {categories.map((cat, index) => (
                <div 
                  key={index} 
                  className={`category-option ${category === cat ? 'selected' : ''}`}
                  onClick={() => setCategory(cat)}
                >
                  {cat}
                </div>
              ))}
            </div>
          </div>
          
          {/* 요리명 */}
          <div className="form-section">
            <div className="section-title">요리명</div>
            <div className="input-field">
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="센스있는 요리명을 지어주세요"
                required
              />
            </div>
          </div>
          
          {/* 내용 */}
          <div className="form-section">
            <div className="section-title">내용</div>
            <div className="input-field">
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="본문을 작성해주세요"
                required
              />
            </div>
          </div>
          
          {/* 주재료 */}
          <div className="form-section">
            <div className="section-title">주재료</div>
            <div className="ingredients-list">
              {ingredients.map((ingredient, index) => (
                <div key={index} className="ingredient-item">
                  <input
                    type="text"
                    value={ingredient.name}
                    onChange={(e) => updateIngredient(index, 'name', e.target.value)}
                    placeholder="재료"
                    style={{ 
                      width: '90%', 
                      fontSize: '10px',
                      margin: '2px 0',
                      backgroundColor: 'transparent',
                      textAlign: 'center'
                    }}
                  />
                  <input
                    type="text"
                    value={ingredient.amount}
                    onChange={(e) => updateIngredient(index, 'amount', e.target.value)}
                    placeholder="양"
                    style={{ 
                      width: '90%', 
                      fontSize: '10px',
                      margin: '2px 0',
                      backgroundColor: 'transparent',
                      textAlign: 'center'
                    }}
                  />
                  <div 
                    className="circle-button"
                    onClick={() => removeIngredient(index)}
                  >
                    -
                  </div>
                </div>
              ))}
              <div className="ingredient-item add-new" onClick={addIngredient}>
                <div className="circle-button">+</div>
              </div>
            </div>
          </div>
          
          {/* 요리과정 */}
          <div className="form-section">
            <div className="section-title">요리과정</div>
            <div className="steps-list">
              {steps.map((step, index) => (
                <div key={index} className="step-item">
                  <div className="step-number">
                    {index + 1}
                  </div>
                  <div className="step-input">
                    <textarea
                      value={step.description}
                      onChange={(e) => updateStep(index, e.target.value)}
                      placeholder={`과정 ${index + 1}을 설명해주세요`}
                    />
                    <div className="step-controls">
                      {steps.length > 1 && (
                        <button type="button" onClick={() => removeStep(index)}>삭제</button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              <button type="button" className="add-step-button" onClick={addStep}>
                + 과정 추가하기
              </button>
            </div>
          </div>
          
          {/* 완성음식 등록 */}
          <div className="form-section">
            <div className="section-title">완성음식 등록</div>
            <div className="completed-dish">
              <input
                type="file"
                id="completed-dish-upload"
                accept="image/*"
                onChange={handleCompletedDishImageChange}
                style={{ display: 'none' }}
              />
              <label htmlFor="completed-dish-upload" className="upload-area">
                {completedDishPreview ? (
                  <img 
                    src={completedDishPreview} 
                    alt="완성 요리" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  />
                ) : (
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div className="upload-icon">
                      <span>+</span>
                    </div>
                    <div className="upload-text">PHOTO</div>
                  </div>
                )}
              </label>
            </div>
          </div>
          
          {/* 닉네임 공개 옵션 */}
          <div className="form-section">
            <div className="nickname-option">
              <div 
                className={`toggle-switch ${showNickname ? 'active' : ''}`}
                onClick={toggleNickname}
              >
                <div className={`toggle-knob ${showNickname ? 'active' : ''}`}></div>
              </div>
              <div className="option-label">닉네임 공개</div>
            </div>
          </div>
          
          {/* 등록 버튼 */}
          <button type="submit" className="submit-button">
            등록하기
          </button>
        </form>
      </div>
      
      <BottomNavigation />
    </div>
  );
};

export default AddRecipePage; 