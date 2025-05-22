<<<<<<< HEAD
# 레시피 공유 앱

피그마 디자인을 바탕으로 구현한 요리 레시피 공유 애플리케이션입니다.

## 주요 기능

- 메인 페이지: 다양한 레시피 카테고리 및 추천 레시피 표시
- 레시피 등록 페이지: 사용자가 자신만의 레시피를 등록할 수 있는 기능

## 기술 스택

- React
- React Router
- Styled Components

## 설치 및 실행 방법

1. 프로젝트 클론
```
git clone <repository-url>
```

2. 의존성 설치
```
npm install
```

3. 개발 서버 실행
```
npm start
```

4. 브라우저에서 http://localhost:3000 접속

## 피그마 이미지 적용 방법

1. 피그마에서 사용된 이미지 에셋 내보내기
   - 적용할 이미지 요소 선택
   - 우측 패널에서 "Export" 섹션 클릭
   - 적절한 포맷(PNG/JPG) 및 스케일 선택
   - "Export" 버튼 클릭하여 저장

2. 내보낸 이미지를 프로젝트에 적용
   - 내보낸 이미지 파일을 `src/assets` 폴더에 복사
   - 코드 내 import 구문으로 이미지 가져오기
   ```javascript
   import imageName from '../assets/image-file-name.jpg';
   ```
   - 해당 이미지를 사용할 컴포넌트에서 적용
   ```javascript
   <img src={imageName} alt="이미지 설명" />
   ```

## 프로젝트 구조

```
src/
├── assets/          # 이미지 및 정적 파일
├── components/      # 재사용 가능한 컴포넌트
├── pages/           # 페이지 컴포넌트
│   ├── HomePage.js
│   └── CreateRecipePage.js
├── App.js           # 메인 앱 컴포넌트
└── index.js         # 앱 진입점
```

## 구현 화면

### 메인 페이지
- 상단 네비게이션 바
- 검색 기능
- 카테고리 선택
- 추천 레시피 카드
- 신규 등록 레시피 목록

### 레시피 등록 페이지
- 카테고리 선택
- 요리명 입력
- 내용 작성
- 주재료 등록
- 요리 과정 단계별 입력
- 완성 음식 사진 업로드
- 닉네임 공개 여부 설정 
=======
# CookMate - 요리 레시피 공유 플랫폼

CookMate는 요리 레시피를 공유하고 검색할 수 있는 모바일 친화적 웹 애플리케이션입니다. 사용자들은 자신만의 레시피를 업로드하고 다른 사용자들의 레시피를 찾아볼 수 있습니다.

## 기능

- 레시피 검색 및 필터링
- 카테고리별 레시피 분류
- 새로운 레시피 추가 및 편집
- 사용자 계정 관리 (로그인/가입)
- 모바일 친화적 UI

## 시작하기

### 요구사항

- Node.js 16.0.0 이상
- npm 7.0.0 이상

### 설치

1. 저장소를 클론합니다:
   ```
   git clone https://github.com/yourusername/cookmate-app.git
   cd cookmate-app
   ```

2. 의존성을 설치합니다:
   ```
   npm install
   ```

3. 개발 서버를 실행합니다:
   ```
   npm start
   ```

4. 브라우저에서 [http://localhost:3000](http://localhost:3000)으로 접속합니다.

## 프로젝트 구조

```
cookmate-app/
├── public/              # 정적 파일
├── src/                 # 소스 코드
│   ├── assets/          # 이미지, 폰트 등
│   ├── components/      # 재사용 가능한 컴포넌트
│   ├── pages/           # 페이지 컴포넌트
│   ├── styles/          # 스타일 파일 (SCSS)
│   ├── types/           # TypeScript 타입 정의
│   ├── App.tsx          # 메인 App 컴포넌트
│   └── index.tsx        # 진입점
└── package.json         # 프로젝트 메타데이터 및 의존성
```

## 개발 스택

- React 19
- TypeScript
- SCSS
- React Router

## 라이센스

MIT

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
>>>>>>> ed7959b (sec)
