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
