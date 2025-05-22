// import { useState } from 'react';
// import { Navbar } from '../components/Navbar';

function Home({ recipes, navigateTo }) {
    const [searchQuery, setSearchQuery] = React.useState('');

    // 인기 레시피 필터링 (평점 기준)
    const popularRecipes = [...recipes].sort((a, b) => b.rating - a.rating).slice(0, 3);

    // 새로운 레시피 필터링
    const newRecipes = recipes.filter(recipe => recipe.isNew).slice(0, 3);

    return (
        <div className="flex-grow">
            <div className="sticky top-0 z-10 bg-white shadow-sm">
                <div className="flex items-center p-4 pb-3 justify-between">
                    <h1 className="text-gray-900 text-xl font-bold tracking-tight flex-1 text-center pl-12">레시피</h1>
                    <div className="flex w-12 items-center justify-end">
                        <button
                            className="flex items-center justify-center rounded-full h-10 w-10 hover:bg-gray-100 text-gray-700"
                            onClick={() => navigateTo('create')}
                        >
                            <svg fill="currentColor" height="24px" viewBox="0 0 256 256" width="24px" xmlns="http://www.w3.org/2000/svg">
                                <path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="px-4 pb-3">
                    <label className="flex flex-col min-w-40 h-12 w-full">
                        <div className="flex w-full flex-1 items-stretch rounded-xl h-full bg-gray-100">
                            <div className="text-gray-500 flex items-center justify-center pl-4">
                                <svg fill="currentColor" height="20px" viewBox="0 0 256 256" width="20px" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                                </svg>
                            </div>
                            <input
                                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-xl text-gray-900 focus:outline-0 focus:ring-0 border-none bg-gray-100 h-full placeholder:text-gray-500 px-3 text-base font-normal leading-normal"
                                placeholder="레시피, 재료, 셰프 검색..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </label>
                </div>
            </div>

            <h2 className="text-gray-900 text-xl font-semibold leading-tight tracking-tight px-4 pb-3 pt-5">인기 레시피</h2>
            <div className="flex overflow-x-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden pl-4 pr-1 pb-4 gap-4">
                {popularRecipes.map(recipe => (
                    <div
                        key={recipe.id}
                        className="flex flex-col gap-2 rounded-xl min-w-[240px] w-[240px] bg-white overflow-hidden shadow-sm border border-gray-200 cursor-pointer"
                        onClick={() => navigateTo('recipe-detail', recipe)}
                    >
                        <div
                            className="w-full bg-center bg-no-repeat aspect-[4/3] bg-cover"
                            style={{ backgroundImage: `url("${recipe.image}")` }}
                        ></div>
                        <div className="p-3 pt-1">
                            <p className="text-gray-900 text-base font-semibold leading-normal">{recipe.name}</p>
                            <p className="text-gray-600 text-sm font-normal leading-normal">{recipe.cookTime} • {recipe.difficulty}</p>
                        </div>
                    </div>
                ))}
            </div>

            <h2 className="text-gray-900 text-xl font-semibold leading-tight tracking-tight px-4 pb-3 pt-4">새로운 레시피</h2>
            <div className="px-4 space-y-4 pb-4">
                {newRecipes.map(recipe => (
                    <div
                        key={recipe.id}
                        className="flex items-center justify-between gap-4 rounded-xl p-3 bg-white shadow-sm border border-gray-200 cursor-pointer"
                        onClick={() => navigateTo('recipe-detail', recipe)}
                    >
                        <div className="flex flex-col gap-0.5 flex-[2_2_0px]">
                            <span className="inline-block bg-primary-color/10 text-primary-color text-xs font-semibold px-2 py-0.5 rounded-full self-start mb-1">New</span>
                            <p className="text-gray-900 text-base font-semibold leading-tight">{recipe.name}</p>
                            <p className="text-gray-600 text-sm font-normal leading-normal">By {recipe.author}</p>
                        </div>
                        <div
                            className="w-20 h-20 bg-center bg-no-repeat aspect-square bg-cover rounded-lg flex-shrink-0"
                            style={{ backgroundImage: `url("${recipe.image}")` }}
                        ></div>
                    </div>
                ))}
            </div>

            <Navbar currentPage="home" navigateTo={navigateTo} />
        </div>
    );
} 