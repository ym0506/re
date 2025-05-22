// import { useState } from 'react';
// import { Navbar } from '../components/Navbar';

function RecipeList({ recipes, navigateTo }) {
    const [searchQuery, setSearchQuery] = React.useState('');
    const [activeCategory, setActiveCategory] = React.useState('all');
    const [activeSort, setActiveSort] = React.useState('rating');

    // 카테고리 필터링
    const filteredRecipes = recipes.filter(recipe => {
        if (activeCategory === 'all') return true;
        return recipe.category === activeCategory;
    });

    // 정렬
    const sortedRecipes = [...filteredRecipes].sort((a, b) => {
        switch (activeSort) {
            case 'newest':
                return b.id - a.id;
            case 'oldest':
                return a.id - b.id;
            case 'rating':
                return b.rating - a.rating;
            case 'popularity':
                return b.reviewCount - a.reviewCount;
            case 'cookTime':
                return a.cookTime.localeCompare(b.cookTime);
            default:
                return 0;
        }
    });

    return (
        <div className="flex-grow">
            <header className="sticky top-0 z-10 bg-white shadow-sm">
                <div className="flex items-center p-4 pb-3">
                    <h1 className="text-[#181111] text-xl font-bold leading-tight tracking-tight flex-1 text-center">레시피 목록</h1>
                    <button
                        className="flex items-center justify-center rounded-full h-10 w-10 bg-[#e92933] text-white hover:bg-[#c7222a]"
                        onClick={() => navigateTo('create')}
                    >
                        <svg fill="currentColor" height="24px" viewBox="0 0 256 256" width="24px" xmlns="http://www.w3.org/2000/svg">
                            <path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path>
                        </svg>
                    </button>
                </div>
                <div className="px-4 pb-4 pt-1">
                    <label className="flex flex-col min-w-40 h-12 w-full">
                        <div className="flex w-full flex-1 items-stretch rounded-lg h-full shadow-sm">
                            <div className="text-[#886364] flex border-none bg-[#f9f9f9] items-center justify-center pl-4 rounded-l-lg border-r-0">
                                <svg fill="currentColor" height="20px" viewBox="0 0 256 256" width="20px" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                                </svg>
                            </div>
                            <input
                                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#181111] focus:outline-0 focus:ring-2 focus:ring-[#e92933] border-none bg-[#f9f9f9] focus:border-none h-full placeholder:text-[#a08c8d] px-3 rounded-l-none border-l-0 text-base font-normal leading-normal"
                                placeholder="레시피, 재료 검색..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </label>
                </div>
            </header>

            <main className="pb-24">
                <section className="px-4 pt-4 pb-2">
                    <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
                        <button
                            className={activeCategory === 'all' ? "filter-chip-active flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full px-4 py-2 text-sm font-medium leading-normal transition-colors" : "filter-chip flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full px-4 py-2 text-sm font-medium leading-normal transition-colors"}
                            onClick={() => setActiveCategory('all')}
                        >
                            전체
                        </button>
                        <button
                            className={activeCategory === 'breakfast' ? "filter-chip-active flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full px-4 py-2 text-sm font-medium leading-normal transition-colors" : "filter-chip flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full px-4 py-2 text-sm font-medium leading-normal transition-colors"}
                            onClick={() => setActiveCategory('breakfast')}
                        >
                            아침
                        </button>
                        <button
                            className={activeCategory === 'lunch' ? "filter-chip-active flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full px-4 py-2 text-sm font-medium leading-normal transition-colors" : "filter-chip flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full px-4 py-2 text-sm font-medium leading-normal transition-colors"}
                            onClick={() => setActiveCategory('lunch')}
                        >
                            점심
                        </button>
                        <button
                            className={activeCategory === 'dinner' ? "filter-chip-active flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full px-4 py-2 text-sm font-medium leading-normal transition-colors" : "filter-chip flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full px-4 py-2 text-sm font-medium leading-normal transition-colors"}
                            onClick={() => setActiveCategory('dinner')}
                        >
                            저녁
                        </button>
                        <button
                            className={activeCategory === 'dessert' ? "filter-chip-active flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full px-4 py-2 text-sm font-medium leading-normal transition-colors" : "filter-chip flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full px-4 py-2 text-sm font-medium leading-normal transition-colors"}
                            onClick={() => setActiveCategory('dessert')}
                        >
                            디저트
                        </button>
                    </div>
                </section>

                <section className="px-4 pt-3 pb-2">
                    <h2 className="text-[#181111] text-lg font-semibold leading-tight tracking-tight mb-2">정렬 기준</h2>
                    <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
                        <button
                            className={activeSort === 'newest' ? "filter-chip-active flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full px-4 py-2 text-sm font-medium leading-normal transition-colors" : "filter-chip flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full px-4 py-2 text-sm font-medium leading-normal transition-colors"}
                            onClick={() => setActiveSort('newest')}
                        >
                            최신순
                        </button>
                        <button
                            className={activeSort === 'oldest' ? "filter-chip-active flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full px-4 py-2 text-sm font-medium leading-normal transition-colors" : "filter-chip flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full px-4 py-2 text-sm font-medium leading-normal transition-colors"}
                            onClick={() => setActiveSort('oldest')}
                        >
                            오래된순
                        </button>
                        <button
                            className={activeSort === 'rating' ? "filter-chip-active flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full px-4 py-2 text-sm font-medium leading-normal transition-colors" : "filter-chip flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full px-4 py-2 text-sm font-medium leading-normal transition-colors"}
                            onClick={() => setActiveSort('rating')}
                        >
                            평점순
                        </button>
                        <button
                            className={activeSort === 'popularity' ? "filter-chip-active flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full px-4 py-2 text-sm font-medium leading-normal transition-colors" : "filter-chip flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full px-4 py-2 text-sm font-medium leading-normal transition-colors"}
                            onClick={() => setActiveSort('popularity')}
                        >
                            인기순
                        </button>
                        <button
                            className={activeSort === 'cookTime' ? "filter-chip-active flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full px-4 py-2 text-sm font-medium leading-normal transition-colors" : "filter-chip flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full px-4 py-2 text-sm font-medium leading-normal transition-colors"}
                            onClick={() => setActiveSort('cookTime')}
                        >
                            조리시간순
                        </button>
                    </div>
                </section>

                <section className="px-4 pt-4">
                    <div className="grid grid-cols-2 gap-4">
                        {sortedRecipes.map(recipe => (
                            <div
                                key={recipe.id}
                                className="flex flex-col gap-2 pb-3 group cursor-pointer"
                                onClick={() => navigateTo('recipe-detail', recipe)}
                            >
                                <div
                                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl shadow-md overflow-hidden transition-transform duration-300 group-hover:scale-105"
                                    style={{ backgroundImage: `url("${recipe.image}")` }}
                                ></div>
                                <p className="text-[#181111] text-base font-semibold leading-tight">{recipe.name}</p>
                                <p className="text-xs text-[#886364]">{recipe.cookTime} • {recipe.difficulty}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            <Navbar currentPage="recipes" navigateTo={navigateTo} />
        </div>
    );
}