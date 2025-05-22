// import { useState, useEffect } from 'react';
// import { Home } from './pages/Home';
// import { RecipeList } from './pages/RecipeList';
// import { RecipeDetail } from './pages/RecipeDetail';
// import { CreateRecipe } from './pages/CreateRecipe';
// import { Profile } from './pages/Profile';
// import { RecipeContext } from './context/RecipeContext';

function App() {
    const [currentPage, setCurrentPage] = React.useState('home');
    const [currentRecipe, setCurrentRecipe] = React.useState(null);
    const [recipes, setRecipes] = React.useState([]);
    const [user, setUser] = React.useState({
        id: 1,
        username: 'sophia',
        displayName: 'Sophia',
        joinedYear: '2021',
        recipeCount: 12,
        likesCount: 24,
        followersCount: 10,
        profileImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCLLFCAlXCeQ9RcgqHiRAsBr1fPJSKSqbcbiLCK5JlkXnflvENxJn7MIVBa8TqV7stJLjF7d2Ql-pL7NNai_I5DQsnMENNq2xry9vy3-v02ArzgNRQNY2-KIifC_RcVMzcJlBH5O7dPhdYg6LQa2It7IT_Bs3jj3Ba9aFb5qQGhhgCcGOAIBokCxWb3uIUuIuWcb7OYolxhEHIUqb9LIhsvDzNylhxFgJyVzdk4IXR6OdB80mPVh6V6VcMDTPuSgGY6X6g6tCWPrgI'
    });

    // 초기 레시피 데이터 로드
    React.useEffect(() => {
        const initialRecipes = [
            {
                id: 1,
                name: '크리미 토마토 파스타',
                description: '풍부한 크림과 토마토 소스가 어우러진 파스타 요리',
                cookTime: '35 min',
                difficulty: 'Easy',
                rating: 4.5,
                reviewCount: 23,
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAYZzG17Pd1pNxnjSq7wtKwLFL3fKVt08TVSqvi-ThuDvqm1IfdkIsldeRL1myiyIqPnOVliYhDeKO2-1x1SeJGMTRTSUY2ZjsxalcBSd9rgspB1j7xwfKjUliq5gINMObPPGQXJQsXGUXRTCdKRtJXkpi-0oi8NrUZYGw3_fO-M7bvDTu1rui9Nww-Xvt3WRTjbprnLYoIeMyIKs077HJyH76tRW6kNAllA5T-K8b2LMmHtpcP3Zv_GZMw47AzJBlSWeC2SkJi6b0',
                ingredients: [
                    '파스타 1lb',
                    '생크림 1컵',
                    '다진 토마토 캔 1개',
                    '파마산 치즈 1/2컵',
                    '소금, 후추 약간'
                ],
                steps: [
                    { name: '파스타 삶기', time: '10 min', icon: 'cooking' },
                    { name: '소스 준비하기', time: '5 min', icon: 'sauce' },
                    { name: '재료 섞고 졸이기', time: '15 min', icon: 'cooking' },
                    { name: '완성 및 서빙', time: '5 min', icon: 'sauce' }
                ],
                category: 'dinner',
                isNew: true,
                author: 'Chef Isabella'
            },
            {
                id: 2,
                name: '맛있는 파스타',
                description: '만들기 쉬운 파스타 요리',
                cookTime: '20 min',
                difficulty: 'Easy',
                rating: 4.2,
                reviewCount: 15,
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAR7lwtfO4wKYIap3sPwGn16UNReUL74QZJy1aoAu8tZr9E5cEwjJl5AbNl3gXGMOOA7G-Xg4_cWrp9xdoPQjbA94DzxHzLdAsdalrN2xFAcZySB5ohPet8thYZrP3jU5LC_uX74EH4oAov5oK0l7_PVJ3QZ8rouOdc5k1bXD_OuXsvkyyHEB9CSbWXUseUSYO87ecZmWlAB3NnvxUs0n4DN_65zUuyF4TA3dsceny8V9M3iVWFRJ4T8fbXot33ut76IPQ053S4nEo',
                category: 'dinner',
                isNew: false,
                author: 'Chef Ethan'
            },
            {
                id: 3,
                name: '맛있는 샐러드',
                description: '신선한 재료로 만든 샐러드',
                cookTime: '10 min',
                difficulty: 'Easy',
                rating: 4.0,
                reviewCount: 8,
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDR8jxGQpLu7eDLy88o6E0D6hgRlxR_SSLou8CHscmLpVXuXlGuHGwTLqzKuQHYbZh2duBIMXtCfGZqMfbKkurIeEY6hLejQXE49o78KgBwRsU70xDFdMrPwXxQRGciavumBUy30Xr64gRZd3uoGbhKyGQ84dk9eJx_v8BVOzC1nOeVFkZZaX_-fgibGTkjjAX9HxO2N1bna2mVQst9N0j9JLro8kUMpvenx6uy4RSM_fCdmxQSLDbJ7v41cWX-ThPl6CHurbWFVpQ',
                category: 'lunch',
                isNew: false,
                author: 'Chef Olivia'
            },
            {
                id: 4,
                name: '건강한 스무디',
                description: '빠르고 영양가 있는 스무디',
                cookTime: '5 min',
                difficulty: 'Easy',
                rating: 4.8,
                reviewCount: 32,
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3nXVXe3uwtA5HEkHQPYGATlh5aoWmCZajYDBEUMnIwVo4ul3ckdEII-xcUyOcCXm3MupaunyutQUvvY-UrGA-0qdMzdGQar48GgDGkxgN9qGiXmguq3jBNsEk7zIrKugCT1YMXoARyWipSBb7ioFxLuSYfZPnu8smOr5Lo__vuP3suvo99RN5E3GYPJ245px71ucVb8J0q9viqYFfHFuczseZEvIELSQsVdYDUcTvfVb7fsU3FYWw7IzAd8nwV-mjfQQoqOo_Abw',
                category: 'breakfast',
                isNew: false,
                author: 'Chef Sophia'
            },
            {
                id: 5,
                name: '매운 치킨 커리',
                description: '맛있는 인도식 커리 요리',
                cookTime: '45 min',
                difficulty: 'Medium',
                rating: 4.7,
                reviewCount: 19,
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBCa7p5pYiPnZk4CNx3vQJRKS04z7KmdAAS8tPq96Kn7ugrpZiPPAZAZOqRbEjENlg3VOc-KEC9j0EUpKH_sR7KZJe1RyElm-7o23AEh6rcsGUnLwIOcg_KMiqU7ZP6Za9VeQmShd7BdqbcQjI6xoDSxwb0ZiKADPBMR-aFELGdhJ1ghmiV-Aga8muxeBpV2B8frNsqyP79l_dX-70NIsLLAsXNMHZI51wggYAPmkPCAWPoUCd5qrHdzMKseaCo-rCfP6HjeJZCXD4',
                category: 'dinner',
                isNew: true,
                author: 'Chef Isabella'
            },
            {
                id: 6,
                name: '비건 타코',
                description: '채식주의자를 위한 맛있는 타코',
                cookTime: '25 min',
                difficulty: 'Medium',
                rating: 4.3,
                reviewCount: 12,
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDuFDSlf2SJFP-Ly2KzmMwNRXyTT6gJJx6cf8u_7lLAtnEbFUY9W5SWvw97sodiG7rjkkeLqdT1YyAaMer3gRgFSKq1Bz7jjBupD_eaM0TKCNnO6ZOZNmcjRPk6NoDhI_eSlPRdfU0hhb8cqnEJ2WN3iKXHPUWKHj1QhNCX2idsiki9ORawm9oxkZ6wpGjDivIE4CHFaGF99RTkN2_w4EkuJkxyFk0_v38CDgc9GnbIsD0gZxzg5oO7AdfNL_xyXwyO7-a1U3WdVBA',
                category: 'lunch',
                isNew: true,
                author: 'Chef Ethan'
            },
            {
                id: 7,
                name: '초콜릿 케이크',
                description: '달콤한 초콜릿 케이크',
                cookTime: '1 hr',
                difficulty: 'Hard',
                rating: 4.9,
                reviewCount: 45,
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDqdFvGGgMtvBzfP9H7tkj61cSRL8CjoL0bt9ykifc1Xq-7HD4VjdgrkjdOLW8PBakkEYMwAR1hHIkoBk0Wk9fJYufxroiti7xlWvjOVQUxtXnDn89ILf7A5HsOKdaE_sRcDhpJ5MDj3NXeOeurcIrBQwAtl-jgMCSwdaFtSDip_yfIF5HG8KYMZ7pn31Yf7VSwvlf90YPDx2xqCPfoR6PVX6N9XUZavlQph7hLmc0WiuVu_mYBia7BTCUcRmVQGVyS2M1QWzKGWFA',
                category: 'dessert',
                isNew: true,
                author: 'Chef Olivia'
            },
            {
                id: 8,
                name: '맛있는 아침 식사',
                description: '영양가 있는 아침 식사',
                cookTime: '15 min',
                difficulty: 'Easy',
                rating: 4.4,
                reviewCount: 16,
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBWB-qeZnyFdVNYsXc8Dol5EA5l9Eo8N7Fgptvczh8_GsBhjYvR3OyH82o2yAVeulgEBjNoYiFT7tyH3SVwemQKKvOWJapMCwgdkoR12DagKZR6-7v-RN5LS5eXgOB9HRV-HNpCAhNMMI7q8Ej8QjN8kzKiDuJgXZ7kqQHlkrhf4Z53BzkfZwiTTX9tqe4QRJnnUxtPW0s-IsV4bpqZbmFznvMI2oBfz2TRSGvBB9GGO2gRXM1tdGBkYDD0uM848LKpC-9is8ls2NY',
                category: 'breakfast',
                isNew: false,
                author: 'Chef Sophia'
            }
        ];
        setRecipes(initialRecipes);
    }, []);

    // 페이지 이동 함수
    const navigateTo = (page, recipe = null) => {
        setCurrentPage(page);
        if (recipe) {
            setCurrentRecipe(recipe);
        }
    };

    // 레시피 추가 함수
    const addRecipe = (newRecipe) => {
        const recipeWithId = {
            ...newRecipe,
            id: recipes.length + 1,
            rating: 0,
            reviewCount: 0,
            isNew: true,
            author: user.displayName
        };
        setRecipes([recipeWithId, ...recipes]);
        navigateTo('home');
    };

    // 현재 페이지에 따라 컴포넌트 렌더링
    const renderPage = () => {
        switch (currentPage) {
            case 'home':
                return React.createElement(Home, { recipes, navigateTo });
            case 'recipes':
                return React.createElement(RecipeList, { recipes, navigateTo });
            case 'create':
                return React.createElement(CreateRecipe, { addRecipe, navigateTo });
            case 'recipe-detail':
                return React.createElement(RecipeDetail, { recipe: currentRecipe, navigateTo });
            case 'profile':
                return React.createElement(Profile, { user, recipes: recipes.filter(r => r.author === user.displayName), navigateTo });
            default:
                return React.createElement(Home, { recipes, navigateTo });
        }
    };

    return React.createElement(
        RecipeContext.Provider,
        { value: { recipes, setRecipes, user, setUser } },
        React.createElement(
            'div',
            { className: "relative flex size-full min-h-screen flex-col justify-between overflow-x-hidden" },
            renderPage()
        )
    );
} 