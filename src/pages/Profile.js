// import { useState } from 'react';
// import { Navbar } from '../components/Navbar';

function Profile({ user, recipes, navigateTo }) {
    const [activeTab, setActiveTab] = React.useState('recipes');

    return (
        <div className="flex-grow">
            <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-sm">
                <div className="flex items-center px-4 py-3">
                    <button
                        className="text-stone-800 flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-stone-200 transition-colors"
                        onClick={() => navigateTo('home')}
                    >
                        <span className="material-icons-outlined">arrow_back</span>
                    </button>
                    <h2 className="text-stone-900 text-xl font-bold leading-tight tracking-tight flex-1 text-center">{user.displayName}</h2>
                    <button className="text-stone-800 flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-stone-200 transition-colors">
                        <span className="material-icons-outlined">settings</span>
                    </button>
                </div>
            </header>

            <main>
                <div className="p-6 @container">
                    <div className="flex flex-col items-center gap-4">
                        <div
                            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-32 w-32 ring-4 ring-white shadow-lg"
                            style={{ backgroundImage: `url("${user.profileImage}")` }}
                        ></div>
                        <div className="flex flex-col items-center justify-center">
                            <p className="text-stone-900 text-2xl font-bold leading-tight tracking-tight">{user.displayName}</p>
                            <p className="text-stone-500 text-base font-normal leading-normal">@{user.username}</p>
                            <p className="text-stone-500 text-sm font-normal leading-normal">{user.joinedYear}년에 가입</p>
                        </div>
                    </div>
                </div>

                <div className="flex gap-3 px-4 py-3">
                    <div className="flex flex-1 basis-0 flex-col gap-1 rounded-xl border border-stone-200 bg-stone-50 p-3 items-center text-center">
                        <p className="text-e92933 text-2xl font-bold leading-tight">{user.recipeCount}</p>
                        <p className="text-stone-600 text-xs font-medium leading-normal">레시피</p>
                    </div>
                    <div className="flex flex-1 basis-0 flex-col gap-1 rounded-xl border border-stone-200 bg-stone-50 p-3 items-center text-center">
                        <p className="text-e92933 text-2xl font-bold leading-tight">{user.likesCount}</p>
                        <p className="text-stone-600 text-xs font-medium leading-normal">좋아요</p>
                    </div>
                    <div className="flex flex-1 basis-0 flex-col gap-1 rounded-xl border border-stone-200 bg-stone-50 p-3 items-center text-center">
                        <p className="text-e92933 text-2xl font-bold leading-tight">{user.followersCount}</p>
                        <p className="text-stone-600 text-xs font-medium leading-normal">팔로워</p>
                    </div>
                </div>

                <div className="border-b border-stone-200">
                    <nav className="flex px-4 gap-6">
                        <a
                            className={`flex flex-col items-center justify-center border-b-[3px] ${activeTab === 'recipes' ? 'border-b-e92933 text-e92933' : 'border-b-transparent text-stone-500 hover:text-e92933 hover:border-b-e92933/50'} py-3 transition-colors`}
                            onClick={() => setActiveTab('recipes')}
                        >
                            <p className="text-sm font-semibold leading-normal">레시피</p>
                        </a>
                        <a
                            className={`flex flex-col items-center justify-center border-b-[3px] ${activeTab === 'likes' ? 'border-b-e92933 text-e92933' : 'border-b-transparent text-stone-500 hover:text-e92933 hover:border-b-e92933/50'} py-3 transition-colors`}
                            onClick={() => setActiveTab('likes')}
                        >
                            <p className="text-sm font-semibold leading-normal">좋아요</p>
                        </a>
                        <a
                            className={`flex flex-col items-center justify-center border-b-[3px] ${activeTab === 'profile' ? 'border-b-e92933 text-e92933' : 'border-b-transparent text-stone-500 hover:text-e92933 hover:border-b-e92933/50'} py-3 transition-colors`}
                            onClick={() => setActiveTab('profile')}
                        >
                            <p className="text-sm font-semibold leading-normal">프로필</p>
                        </a>
                    </nav>
                </div>

                <div className="grid grid-cols-2 gap-4 p-4">
                    {recipes.map(recipe => (
                        <div
                            key={recipe.id}
                            className="flex flex-col gap-2 cursor-pointer"
                            onClick={() => navigateTo('recipe-detail', recipe)}
                        >
                            <div
                                className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl shadow-sm"
                                style={{ backgroundImage: `url("${recipe.image}")` }}
                            ></div>
                            <p className="text-stone-800 text-sm font-medium leading-normal line-clamp-2">{recipe.name}</p>
                        </div>
                    ))}
                </div>
            </main>

            <Navbar currentPage="profile" navigateTo={navigateTo} />
        </div>
    );
} 