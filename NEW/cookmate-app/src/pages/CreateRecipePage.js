import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// 이미지 import 예시 - 피그마에서 export 후 적용 가능
import koreanFoodIcon from '../assets/korean-food-icon.jpg';
import japaneseFoodIcon from '../assets/japanese-food-icon.jpg';
import chineseFoodIcon from '../assets/chinese-food-icon.jpg';
import westernFoodIcon from '../assets/western-food-icon.jpg';
import otherFoodIcon from '../assets/other-food-icon.jpg';

const CreateRecipePage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [recipeSteps, setRecipeSteps] = useState(['', '', '']);
  const [showImageUpload, setShowImageUpload] = useState(false);
  const [isPublic, setIsPublic] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [ingredients, setIngredients] = useState(Array(5).fill(null));

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleStepChange = (index, value) => {
    const newSteps = [...recipeSteps];
    newSteps[index] = value;
    setRecipeSteps(newSteps);
  };

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
      setShowImageUpload(false);
    }
  };

  const handleIngredientUpload = (index) => {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
    fileInput.onchange = (e) => {
      if (e.target.files[0]) {
        const newIngredients = [...ingredients];
        newIngredients[index] = URL.createObjectURL(e.target.files[0]);
        setIngredients(newIngredients);
      }
    };
    fileInput.click();
  };

  // 카테고리 이미지 매핑
  const getCategoryIcon = (category) => {
    switch(category) {
      case '한식': return koreanFoodIcon;
      case '일식': return japaneseFoodIcon;
      case '중식': return chineseFoodIcon;
      case '양식': return westernFoodIcon;
      case '기타': return otherFoodIcon;
      default: return koreanFoodIcon; // 기본값 제공
    }
  };

  return (
    <Container>
      <Header>
        <Logo>LOGO</Logo>
      </Header>
      
      <BackgroundCircles>
        <OrangeCircle />
        <PurpleCircle />
      </BackgroundCircles>
      
      <ContentContainer>
        <Title>나만의 레시피를<br />등록해보세요!</Title>
        
        <FormSection>
          <FormLabel>카테고리</FormLabel>
          <CategoryContainer>
            <CategoryOption 
              onClick={() => handleCategoryClick('한식')} 
              selected={selectedCategory === '한식'}
            >
              <CategoryImage>
                <img src={koreanFoodIcon} alt="한식" />
              </CategoryImage>
              <CategoryText>한식</CategoryText>
            </CategoryOption>
            <CategoryOption 
              onClick={() => handleCategoryClick('일식')} 
              selected={selectedCategory === '일식'}
            >
              <CategoryImage>
                <img src={japaneseFoodIcon} alt="일식" />
              </CategoryImage>
              <CategoryText>일식</CategoryText>
            </CategoryOption>
            <CategoryOption 
              onClick={() => handleCategoryClick('중식')} 
              selected={selectedCategory === '중식'}
            >
              <CategoryImage>
                <img src={chineseFoodIcon} alt="중식" />
              </CategoryImage>
              <CategoryText>중식</CategoryText>
            </CategoryOption>
            <CategoryOption 
              onClick={() => handleCategoryClick('양식')} 
              selected={selectedCategory === '양식'}
            >
              <CategoryImage>
                <img src={westernFoodIcon} alt="양식" />
              </CategoryImage>
              <CategoryText>양식</CategoryText>
            </CategoryOption>
            <CategoryOption 
              onClick={() => handleCategoryClick('기타')} 
              selected={selectedCategory === '기타'}
            >
              <CategoryImage>
                <img src={otherFoodIcon} alt="기타" />
              </CategoryImage>
              <CategoryText>기타</CategoryText>
            </CategoryOption>
          </CategoryContainer>
          
          <FormLabel>요리명</FormLabel>
          <InputField placeholder="센스있는 요리명을 지어주세요" />
          
          <FormLabel>내용</FormLabel>
          <TextArea placeholder="본문을 작성해주세요" />
          
          <FormLabel>주재료</FormLabel>
          <IngredientsContainer>
            {ingredients.map((ingredient, index) => (
              <IngredientCard key={index} onClick={() => handleIngredientUpload(index)}>
                {ingredient ? (
                  <IngredientImage src={ingredient} alt={`재료 ${index + 1}`} />
                ) : (
                  <AddIngredientIcon>+</AddIngredientIcon>
                )}
              </IngredientCard>
            ))}
          </IngredientsContainer>
          
          <FormLabel>요리과정</FormLabel>
          {recipeSteps.map((step, index) => (
            <StepContainer key={index}>
              <StepNumberCircle>{index + 1}</StepNumberCircle>
              <StepInput 
                placeholder={`요리 과정 ${index + 1}단계`}
                value={step}
                onChange={(e) => handleStepChange(index, e.target.value)}
              />
            </StepContainer>
          ))}
          <AddStepButton onClick={() => setRecipeSteps([...recipeSteps, ''])}>
            + 단계 추가
          </AddStepButton>
          
          <FormLabel>완성음식 등록</FormLabel>
          {selectedFile ? (
            <PhotoPreviewContainer onClick={() => setShowImageUpload(true)}>
              <PhotoPreview src={URL.createObjectURL(selectedFile)} alt="업로드된 음식 사진" />
            </PhotoPreviewContainer>
          ) : (
            <PhotoUploadContainer onClick={() => setShowImageUpload(true)}>
              <AddPhotoIcon />
              <PhotoText>PHOTO</PhotoText>
            </PhotoUploadContainer>
          )}
          
          {showImageUpload && (
            <FileInputOverlay>
              <FileInput 
                type="file" 
                accept="image/*" 
                onChange={handleFileChange}
                onClick={(e) => e.stopPropagation()}
              />
              <CancelButton onClick={(e) => {
                e.stopPropagation();
                setShowImageUpload(false);
              }}>
                취소
              </CancelButton>
            </FileInputOverlay>
          )}
          
          <PrivacyContainer>
            <FormLabel>닉네임 공개</FormLabel>
            <Toggle 
              isChecked={isPublic} 
              onClick={() => setIsPublic(!isPublic)}
            />
          </PrivacyContainer>
        </FormSection>
      </ContentContainer>
      
      <Footer>
        <Link to="/">
          <SubmitButton>등록하기</SubmitButton>
        </Link>
      </Footer>
    </Container>
  );
};

// Styled Components
const Container = styled.div`
  max-width: 440px;
  margin: 0 auto;
  background-color: #ffffff;
  height: 100%;
  min-height: 100vh;
  position: relative;
  padding-bottom: 70px;
`;

const Header = styled.header`
  background-color: rgba(244, 226, 240, 0.6);
  height: 33px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.div`
  font-weight: 800;
  font-size: 10px;
`;

const BackgroundCircles = styled.div`
  position: relative;
  height: 150px;
`;

const OrangeCircle = styled.div`
  position: absolute;
  width: 102px;
  height: 102px;
  left: 145px;
  top: 20px;
  background-color: #f7d1a9;
  border-radius: 50%;
  z-index: 1;
`;

const PurpleCircle = styled.div`
  position: absolute;
  width: 119px;
  height: 119px;
  left: 233px;
  top: 52px;
  background-color: #f6e4f2;
  border-radius: 50%;
  z-index: 0;
`;

const ContentContainer = styled.div`
  padding: 0 20px;
`;

const Title = styled.h1`
  font-size: 16px;
  font-weight: 800;
  text-align: center;
  line-height: 19px;
  margin-bottom: 30px;
`;

const FormSection = styled.div`
  margin-bottom: 20px;
`;

const FormLabel = styled.div`
  font-size: 14px;
  font-weight: 700;
  margin: 20px 0 10px;
`;

const CategoryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const CategoryOption = styled.div`
  width: 61px;
  height: 28px;
  background-color: #d9d9d9;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 7px;
  cursor: pointer;
  border: ${props => props.selected ? '2px solid #000' : 'none'};
  padding: 2px 5px;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #c9c9c9;
  }
`;

const CategoryImage = styled.div`
  width: 20px;
  height: 20px;
  background-color: #ffffff;
  border-radius: 50%;
  margin-right: 5px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const CategoryText = styled.div`
  font-size: 10px;
`;

const InputField = styled.input`
  width: 100%;
  height: 23px;
  background-color: #d9d9d9;
  border: none;
  border-radius: 5px;
  padding: 0 10px;
  font-size: 8px;
  color: #ffffff;
  font-weight: 800;
  
  &::placeholder {
    color: #ffffff;
    font-weight: 800;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 57px;
  background-color: #d9d9d9;
  border: none;
  border-radius: 5px;
  padding: 10px;
  font-size: 8px;
  resize: none;
  color: #ffffff;
  font-weight: 800;
  
  &::placeholder {
    color: #ffffff;
    font-weight: 800;
  }
`;

const IngredientsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const IngredientCard = styled.div`
  width: 63px;
  height: 63px;
  background-color: #d9d9d9;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  overflow: hidden;
  border-radius: 5px;
  transition: all 0.2s ease;
  margin-bottom: 5px;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15);
  }
`;

const IngredientImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const AddIngredientIcon = styled.div`
  width: 30px;
  height: 30px;
  background-color: #ffffff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const StepContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  gap: 10px;
`;

const StepNumberCircle = styled.div`
  width: 24px;
  height: 24px;
  background-color: #d9d9d9;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 800;
  font-size: 15px;
`;

const StepInput = styled.input`
  flex: 1;
  height: 17px;
  background-color: #d9d9d9;
  border: none;
  border-radius: 10px;
  padding: 0 10px;
`;

const AddStepButton = styled.button`
  border: none;
  background: none;
  font-size: 14px;
  margin-top: 10px;
  cursor: pointer;
  color: #888;
`;

const PhotoUploadContainer = styled.div`
  width: 161px;
  height: 106px;
  background-color: #d9d9d9;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #c9c9c9;
    transform: scale(1.02);
  }
`;

const PhotoPreviewContainer = styled.div`
  width: 161px;
  height: 106px;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
`;

const PhotoPreview = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const AddPhotoIcon = styled.div`
  width: 35px;
  height: 35px;
  background-color: #ffffff;
  border-radius: 50%;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  
  &:before {
    content: '+';
    font-weight: bold;
    font-size: 24px;
  }
`;

const PhotoText = styled.div`
  font-weight: 700;
  font-size: 14px;
  color: #ffffff;
`;

const FileInputOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

const FileInput = styled.input`
  margin-bottom: 20px;
`;

const CancelButton = styled.button`
  background-color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
`;

const PrivacyContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

const Toggle = styled.div`
  width: 24px;
  height: 24px;
  background-color: ${props => props.isChecked ? '#000000' : '#d9d9d9'};
  border-radius: 12px;
  position: relative;
  cursor: pointer;
  
  &:before {
    content: '';
    position: absolute;
    left: ${props => props.isChecked ? '14px' : '4px'};
    top: 4px;
    width: 16px;
    height: 16px;
    background-color: white;
    border-radius: 50%;
    transition: left 0.2s;
  }
`;

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 440px;
  height: 59px;
  background-color: #d9d9d9;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

const SubmitButton = styled.button`
  background: none;
  border: none;
  color: #000;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
`;

export default CreateRecipePage; 