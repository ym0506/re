import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// 이미지 import 예시
// 실제 파일은 피그마에서 export 후 src/assets 폴더에 저장해야 합니다
import koreanFoodImg from '../assets/korean-food-icon.jpg';
import japaneseFoodImg from '../assets/japanese-food-icon.jpg';
import chineseFoodImg from '../assets/chinese-food-icon.jpg';
import westernFoodImg from '../assets/western-food-icon.jpg';
import heroPhotoImg from '../assets/hero-photo.jpg';

const HomePage = () => {
  return (
    <Container>
      <Header>
        <HeaderContent>
          <Logo>LOGO</Logo>
          <Nav>
            <NavItem>마이페이지</NavItem>
            <NavItem>회원가입</NavItem>
            <NavItem>로그인</NavItem>
          </Nav>
        </HeaderContent>
      </Header>
      
      <SearchSection>
        <SearchBar>
          <SearchInput placeholder="오늘은 어떤 요리를 할까요?" />
          <SearchIcon>🔍</SearchIcon>
        </SearchBar>
        <FilterTags>
          <FilterTag>ALL</FilterTag>
          <FilterTag>한식</FilterTag>
          <FilterTag>베이커리</FilterTag>
          <FilterTag>브런치</FilterTag>
        </FilterTags>
      </SearchSection>

      <HeroSection>
        <HeroLeft>
          <Highlight>SHARE</Highlight>
          <Highlight>YOUR FOOD!</Highlight>
          <ScrollingText>Let's get cooking Let's get cooking Let's get cooking Let's get cooking</ScrollingText>
        </HeroLeft>
        <HeroRight>
          <TaglineBox>
            <HeroPhotoOverlay>PHOTO</HeroPhotoOverlay>
            {/* 피그마에서 export한 이미지 적용 예시 */}
            <HeroPhotoImage src={heroPhotoImg} alt="Hero" />
            <TaglineItem>COOK.</TaglineItem>
            <TaglineItem>SHARE.</TaglineItem>
            <TaglineItem>CREATE.</TaglineItem>
            <TaglineItem>TOGETHER.</TaglineItem>
          </TaglineBox>
        </HeroRight>
      </HeroSection>

      <CategoriesSection>
        <SectionTitle>Categories</SectionTitle>
        <CategoryList>
          <CategoryItem>
            {/* 피그마에서 export한 이미지 적용 예시 */}
            <CategoryImageContainer>
              <img src={koreanFoodImg} alt="한식" />
            </CategoryImageContainer>
            <CategoryLabel>한식</CategoryLabel>
          </CategoryItem>
          <CategoryItem>
            <CategoryImageContainer>
              <img src={japaneseFoodImg} alt="일식" />
            </CategoryImageContainer>
            <CategoryLabel>일식</CategoryLabel>
          </CategoryItem>
          <CategoryItem>
            <CategoryImageContainer>
              <img src={chineseFoodImg} alt="중식" />
            </CategoryImageContainer>
            <CategoryLabel>중식</CategoryLabel>
          </CategoryItem>
          <CategoryItem>
            <CategoryImageContainer>
              <img src={westernFoodImg} alt="양식" />
            </CategoryImageContainer>
            <CategoryLabel>양식</CategoryLabel>
          </CategoryItem>
        </CategoryList>
      </CategoriesSection>

      <RecommendedSection>
        <SectionTitle>TODAY'S 추천 레시피</SectionTitle>
        <RecipeCardsContainer>
          <RecipeCardLarge>
            {/* 추천 레시피 이미지 적용 가능 */}
            <RecipeCardOverlay>오늘의 추천</RecipeCardOverlay>
          </RecipeCardLarge>
          <RecipeCardGroup>
            <RecipeCardSmall />
            <RecipeCardSmall />
          </RecipeCardGroup>
        </RecipeCardsContainer>
      </RecommendedSection>

      <NewRecipesSection>
        <SectionTitle>신규 등록 레시피</SectionTitle>
        <RecipeGridContainer>
          <RecipeGridItem>
            <NewBadge>NEW</NewBadge>
          </RecipeGridItem>
          <RecipeGridItem>
            <NewBadge>NEW</NewBadge>
          </RecipeGridItem>
          <RecipeGridItem>
            <NewBadge>NEW</NewBadge>
          </RecipeGridItem>
          <RecipeGridItem>
            <NewBadge>NEW</NewBadge>
          </RecipeGridItem>
          <RecipeGridItem>
            <NewBadge>NEW</NewBadge>
          </RecipeGridItem>
          <RecipeGridItem>
            <NewBadge>NEW</NewBadge>
          </RecipeGridItem>
        </RecipeGridContainer>
      </NewRecipesSection>
      
      <Footer>
        <FooterIcon>🏠</FooterIcon>
        <CreateRecipeButton>
          <Link to="/recipe/create">+</Link>
        </CreateRecipeButton>
        <FooterIcon>👤</FooterIcon>
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
  padding-bottom: 70px; // Space for the footer
`;

const Header = styled.header`
  background-color: rgba(244, 226, 240, 0.6);
  height: 33px;
  display: flex;
  align-items: center;
  padding: 0 15px;
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Logo = styled.div`
  font-weight: 800;
  font-size: 10px;
`;

const Nav = styled.nav`
  display: flex;
  gap: 10px;
`;

const NavItem = styled.span`
  font-size: 8px;
  cursor: pointer;
`;

const SearchSection = styled.section`
  padding: 15px;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #000;
  border-radius: 10px;
  padding: 5px 10px;
  margin-bottom: 10px;
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  width: 100%;
  font-size: 8px;
`;

const SearchIcon = styled.span`
  font-size: 10px;
`;

const FilterTags = styled.div`
  display: flex;
  gap: 5px;
  margin-top: 10px;
`;

const FilterTag = styled.div`
  background-color: #d9d9d9;
  border-radius: 30px;
  padding: 2px 8px;
  font-size: 8px;
  text-align: center;
  min-width: 37px;
`;

const HeroSection = styled.section`
  display: flex;
  padding: 20px 15px;
  position: relative;
`;

const HeroLeft = styled.div`
  flex: 1;
`;

const Highlight = styled.h1`
  font-size: 24px;
  font-weight: 400;
  line-height: 29px;
  margin: 0;
`;

const ScrollingText = styled.div`
  font-size: 16px;
  font-weight: 200;
  margin-top: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const HeroRight = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TaglineBox = styled.div`
  background: #f5f5f5;
  border-radius: 30px;
  padding: 20px;
  width: 100%;
  max-width: 213px;
  height: 223px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

const HeroPhotoImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
  position: absolute;
  top: 20px;
  z-index: 1;
`;

const HeroPhotoOverlay = styled.div`
  position: absolute;
  top: 20px;
  font-weight: 700;
  font-size: 32px;
  color: #ffffff;
  z-index: 2;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
`;

const TaglineItem = styled.div`
  border: 1px solid #000;
  border-radius: 30px;
  padding: 3px 10px;
  margin: 5px 0;
  font-size: 14px;
  background-color: #ffffff;
  z-index: 2;
`;

const CategoriesSection = styled.section`
  padding: 15px;
`;

const SectionTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  margin: 15px 0;
`;

const CategoryList = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

const CategoryItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const CategoryImageContainer = styled.div`
  width: 85px;
  height: 85px;
  background-color: #f8eef6;
  border-radius: 5px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const CategoryLabel = styled.div`
  font-size: 14px;
  margin-top: 10px;
`;

const RecommendedSection = styled.section`
  padding: 15px;
  margin-top: 20px;
`;

const RecipeCardsContainer = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
`;

const RecipeCardLarge = styled.div`
  width: 193px;
  height: 210px;
  background-color: #d9d9d9;
  border-radius: 30px;
  position: relative;
  overflow: hidden;
`;

const RecipeCardOverlay = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  color: white;
  font-weight: bold;
  font-size: 16px;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
`;

const RecipeCardGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const RecipeCardSmall = styled.div`
  width: 142px;
  height: 97px;
  background-color: #d9d9d9;
  border-radius: 30px;
`;

const NewRecipesSection = styled.section`
  padding: 15px;
  margin-top: 20px;
`;

const RecipeGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-top: 20px;
`;

const RecipeGridItem = styled.div`
  width: 131px;
  height: 68px;
  background-color: #d9d9d9;
  border-radius: 10px;
  position: relative;
  margin-bottom: 10px;
`;

const NewBadge = styled.div`
  position: absolute;
  top: -5px;
  left: -5px;
  background-color: #f5f5f5;
  color: #000;
  font-weight: 800;
  font-size: 5px;
  width: 23px;
  height: 23px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 440px;
  height: 59px;
  background-color: #d9d9d9;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  z-index: 10;
`;

const FooterIcon = styled.div`
  font-size: 24px;
`;

const CreateRecipeButton = styled.div`
  width: 62px;
  height: 62px;
  background-color: #d9d9d9;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  margin-bottom: 30px;
  border: 5px solid white;
  
  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default HomePage; 