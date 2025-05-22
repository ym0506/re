// import { useState } from 'react';

function RecipeDetail({ recipe, navigateTo }) {
    const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

    if (!recipe) {
        return <div>레시피를 찾을 수 없습니다.</div>;
    }

    return (
        <div className="relative flex size-full min-h-screen flex-col bg-white justify-between group/design-root overflow-x-hidden">
            <div className="flex-grow">
                <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-md">
                    <div className="flex items-center p-4 pb-2 justify-between">
                        <button
                            className="text-[#181111] flex size-10 items-center justify-center rounded-full hover:bg-gray-100 active:bg-gray-200 transition-colors"
                            onClick={() => navigateTo('recipes')}
                        >
                            <svg fill="currentColor" height="24px" viewBox="0 0 256 256" width="24px" xmlns="http://www.w3.org/2000/svg">
                                <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path>
                            </svg>
                        </button>
                        <button className="text-[#181111] flex size-10 items-center justify-center rounded-full hover:bg-gray-100 active:bg-gray-200 transition-colors">
                            <svg fill="currentColor" height="24px" viewBox="0 0 256 256" width="24px" xmlns="http://www.w3.org/2000/svg">
                                <path d="M184,32H72A16,16,0,0,0,56,48V224a8,8,0,0,0,12.24,6.78L128,193.43l59.77,37.35A8,8,0,0,0,200,224V48A16,16,0,0,0,184,32Zm0,177.57-51.77-32.35a8,8,0,0,0-8.48,0L72,209.57V48H184Z"></path>
                            </svg>
                        </button>
                    </div>
                </header>

                <div className="@container">
                    <div className="relative @[480px]:px-4 @[480px]:py-3">
                        <div
                            className="bg-cover bg-center flex flex-col justify-end overflow-hidden @[480px]:rounded-xl min-h-[320px] shadow-lg"
                            style={{ backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 35%), url("${recipe.image}")` }}
                        >
                            <div className="flex justify-center gap-2 p-4">
                                <div className="h-2 w-2 rounded-full bg-white shadow"></div>
                                <div className="h-2 w-2 rounded-full bg-white/60 shadow"></div>
                                <div className="h-2 w-2 rounded-full bg-white/60 shadow"></div>
                                <div className="h-2 w-2 rounded-full bg-white/60 shadow"></div>
                                <div className="h-2 w-2 rounded-full bg-white/60 shadow"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="px-5 pt-6 pb-4">
                    <h1 className="text-[#181111] text-3xl font-bold leading-tight tracking-tight">{recipe.name}</h1>
                    <div className="flex items-center gap-4 mt-3 text-sm text-[#554242]">
                        <div className="flex items-center gap-1">
                            <svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>
                            </svg>
                            <span>{recipe.cookTime}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 12c0-2.21-1.79-4-4-4s-4 1.79-4 4 1.79 4 4 4 4-1.79 4-4z"></path><path d="M12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4"></path>
                            </svg>
                            <span>{recipe.difficulty}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
                            <span>{recipe.rating} ({recipe.reviewCount} 리뷰)</span>
                        </div>
                    </div>
                </div>

                {recipe.ingredients && (
                    <section className="px-5 pt-4 pb-2">
                        <h2 className="text-[#181111] text-xl font-semibold leading-tight tracking-tight mb-3">재료</h2>
                        <div className="space-y-3">
                            {recipe.ingredients.map((ingredient, index) => (
                                <label key={index} className="flex items-center gap-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                    <input className="custom-checkbox h-5 w-5 rounded border-gray-300 border-2 bg-transparent text-[#e92932] checked:bg-[#e92932] checked:border-[#e92932] focus:ring-2 focus:ring-[#e92932]/50 focus:ring-offset-0 focus:outline-none transition-all" type="checkbox" />
                                    <p className="text-[#181111] text-base font-normal leading-normal flex-1">{ingredient}</p>
                                </label>
                            ))}
                        </div>
                    </section>
                )}

                {recipe.steps && (
                    <section className="px-5 pt-6 pb-2">
                        <h2 className="text-[#181111] text-xl font-semibold leading-tight tracking-tight mb-4">조리 과정</h2>
                        <div className="space-y-3">
                            {recipe.steps.map((step, index) => (
                                <div key={index} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                    <div className="text-[#e92932] flex items-center justify-center rounded-full bg-[#e92932]/10 shrink-0 size-10">
                                        <svg fill="currentColor" height="20px" viewBox="0 0 256 256" width="20px" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M88,48V16a8,8,0,0,1,16,0V48a8,8,0,0,1-16,0Zm40,8a8,8,0,0,0,8-8V16a8,8,0,0,0-16,0V48A8,8,0,0,0,128,56Zm32,0a8,8,0,0,0,8-8V16a8,8,0,0,0-16,0V48A8,8,0,0,0,160,56Zm92.8,46.4L224,124v60a32,32,0,0,1-32,32H64a32,32,0,0,1-32-32V124L3.2,102.4a8,8,0,0,1,9.6-12.8L32,104V88A16,16,0,0,1,48,72H208a16,16,0,0,1,16,16v16l19.2-14.4a8,8,0,0,1,9.6,12.8ZM208,88H48v96a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16Z"></path>
                                        </svg>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-[#181111] text-base font-medium leading-normal">{step.name}</p>
                                        <p className="text-[#886364] text-sm font-normal leading-normal">{step.time}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                <section className="px-5 pt-6 pb-4">
                    <h2 className="text-[#181111] text-xl font-semibold leading-tight tracking-tight mb-4">댓글</h2>
                    <div className="space-y-4">
                        <div className="flex w-full flex-row items-start justify-start gap-3 p-4 bg-gray-50 rounded-lg">
                            <div
                                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 shrink-0 shadow-sm"
                                style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuC-0d3IvO0_O2TK6vMxihOfHWnexVGLAocKPMr_NvNJURUq1QRSoXkK-68BTTS7wR3h9zFgBC1KCoBwx0CW_b1JWb-OOIE4jZBcKplKOF91vIa86wxAYnRLkBEs5X4QjNWZ8P2MlFuu0soalqVIhFCHOXwlmyNDa-CXmdnrc8msZE7kFIWuHmvmElHbyY5mdQMPrvUTc-ugyEI81xrwE5fplfwNxbunbWEWrSDo_PUm3ktvAjIgcAgyu18UvdGcPEnvhtl7K4lZZZM")` }}
                            ></div>
                            <div className="flex h-full flex-1 flex-col items-start justify-start">
                                <div className="flex w-full flex-row items-baseline justify-start gap-x-2 mb-1">
                                    <p className="text-[#181111] text-sm font-semibold leading-normal tracking-[0.01em]">Sophia Clark</p>
                                    <p className="text-[#886364] text-xs font-normal leading-normal">2일 전</p>
                                </div>
                                <p className="text-[#3c2f2f] text-sm font-normal leading-relaxed">이 레시피는 정말 대단해요! 간단하고 맛있어요. 빠른 저녁 식사로 강력 추천합니다. 🍝</p>
                            </div>
                        </div>
                        <div className="flex w-full flex-row items-start justify-start gap-3 p-4 bg-gray-50 rounded-lg">
                            <div
                                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 shrink-0 shadow-sm"
                                style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAw68f2AhRdwK1Ng3i7ej-q-NCnU3IvgyjzmbXT9_JEgRjrX6k1nW-jofNMuNUMgvpvhK6ZMQCvF3f3SqlUcPswpRc3b1K9BE7RCVmgn-BmGvufIn6wbu5FBLe6sUOUC6CmCaoxPuzbcp7SOhisXzYq9tSHuC4G5bBS4bPmRTgmO-Nq8DVhPnAshjek-r6ahrl2CpKTLMjh2wIp8EsgL2w_NSyv77D7HiwoKhRycZqWtHtWVZHrJe5Wj6Z2igGAu35wNiMeQP3cEhE")` }}
                            ></div>
                            <div className="flex h-full flex-1 flex-col items-start justify-start">
                                <div className="flex w-full flex-row items-baseline justify-start gap-x-2 mb-1">
                                    <p className="text-[#181111] text-sm font-semibold leading-normal tracking-[0.01em]">Ethan Bennett</p>
                                    <p className="text-[#886364] text-xs font-normal leading-normal">1주일 전</p>
                                </div>
                                <p className="text-[#3c2f2f] text-sm font-normal leading-relaxed">저는 구운 닭고기를 추가했는데 정말 맛있었어요! 다시 만들어볼 예정입니다. 👍</p>
                            </div>
                        </div>
                        <button className="w-full text-center text-[#e92932] text-sm font-semibold py-3 rounded-lg hover:bg-[#e92932]/10 transition-colors">
                            모든 댓글 보기
                        </button>
                    </div>
                </section>
            </div>

            <div className="sticky bottom-0 bg-white/90 backdrop-blur-md border-t border-gray-200 py-3 px-5">
                <button className="w-full flex items-center justify-center overflow-hidden rounded-xl h-14 px-5 bg-[#e92932] text-white text-base font-bold leading-normal tracking-[0.015em] shadow-md hover:bg-[#d0242c] active:bg-[#b81e25] transition-colors">
                    <div className="text-white" data-icon="ShoppingCart" data-size="24px" data-weight="regular">
                        <svg fill="currentColor" height="24px" viewBox="0 0 256 256" width="24px" xmlns="http://www.w3.org/2000/svg">
                            <path d="M222.14,58.87A8,8,0,0,0,216,56H54.68L49.79,29.14A16,16,0,0,0,34.05,16H16a8,8,0,0,0,0,16h18L59.56,172.29a24,24,0,0,0,5.33,11.27,28,28,0,1,0,44.4,8.44h45.42A27.75,27.75,0,0,0,152,204a28,28,0,1,0,28-28H83.17a8,8,0,0,1-7.87-6.57L72.13,152h116a24,24,0,0,0,23.61-19.71l12.16-66.86A8,8,0,0,0,222.14,58.87ZM96,204a12,12,0,1,1-12-12A12,12,0,0,1,96,204Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,192,204Zm4-74.57A8,8,0,0,1,188.1,136H69.22L57.59,72H206.41Z"></path>
                        </svg>
                    </div>
                    <span className="truncate ml-3">식사 키트 추천</span>
                </button>
                <div className="h-safe-area-bottom"></div>
            </div>
        </div>
    );
} 