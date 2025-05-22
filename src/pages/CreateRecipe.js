// import { useState } from 'react';

function CreateRecipe({ addRecipe, navigateTo }) {
    const [recipeName, setRecipeName] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [ingredients, setIngredients] = React.useState('');
    const [steps, setSteps] = React.useState('');
    const [cookTime, setCookTime] = React.useState('');
    const [difficulty, setDifficulty] = React.useState('Easy');
    const [category, setCategory] = React.useState('');
    const [image, setImage] = React.useState('https://lh3.googleusercontent.com/aida-public/AB6AXuDOM78K6BPKhm7aW42F3eDvjGxMh6SRwRFWwF01S_SA-BGpYFrPbZualsER5EsMReUaMhCwHqadWRgLRaK_8ufVndpZkK9revOqoQcZmBJfzwCj31jFa_70gqKqAB_eadXLhrVNZzVDs02rIRQnIV4bfkF8l3bmRiE1-7NLpHi2CXgZDJU9n-EoZjMqKioVu3HeFFAR8M-O0xKU1MtW_KcWCByWYKThuGTxbhtjQuPHAOM6luoEIRjmp8RewBtImxgnPi-G-J-az8k');

    const handleSubmit = () => {
        if (!recipeName || !description) return;

        // 재료 문자열을 배열로 변환
        const ingredientsArray = ingredients
            .split('\n')
            .filter(ingredient => ingredient.trim() !== '')
            .map(ingredient => ingredient.trim());

        // 조리 과정 문자열을 단계별 객체 배열로 변환
        const stepsArray = steps
            .split('\n')
            .filter(step => step.trim() !== '')
            .map((step, index) => {
                const stepText = step.replace(/^\d+\.\s*/, '').trim();
                return {
                    name: stepText,
                    time: '5 min', // 기본값
                    icon: index % 2 === 0 ? 'cooking' : 'sauce' // 아이콘 번갈아가며 설정
                };
            });

        const newRecipe = {
            name: recipeName,
            description,
            ingredients: ingredientsArray,
            steps: stepsArray,
            cookTime: cookTime || '30 min',
            difficulty: difficulty,
            category: category || 'dinner',
            image
        };

        addRecipe(newRecipe);
    };

    return (
        <div className="relative flex size-full min-h-screen flex-col justify-between overflow-x-hidden">
            <div className="flex-grow bg-gray-50">
                <header className="sticky top-0 z-10 bg-white shadow-sm">
                    <div className="flex items-center p-4">
                        <button
                            className="text-gray-700 p-2 rounded-full hover:bg-gray-100"
                            onClick={() => navigateTo('home')}
                        >
                            <span className="material-icons-outlined">arrow_back_ios_new</span>
                        </button>
                        <h1 className="text-xl font-bold text-gray-800 flex-1 text-center">새 레시피</h1>
                        <div className="w-10"></div>
                    </div>
                </header>

                <main className="px-4 py-6 space-y-6">
                    <div>
                        <label className="form-label" htmlFor="recipeName">레시피 이름</label>
                        <input
                            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-900 bg-white h-12 placeholder:text-gray-400 p-3 text-base font-normal leading-normal"
                            id="recipeName"
                            placeholder="예: 할머니의 사과 파이"
                            type="text"
                            value={recipeName}
                            onChange={(e) => setRecipeName(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="form-label" htmlFor="description">설명</label>
                        <textarea
                            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-900 bg-white min-h-28 placeholder:text-gray-400 p-3 text-base font-normal leading-normal"
                            id="description"
                            placeholder="맛있는 레시피에 대한 간단한 설명..."
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
                    </div>

                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <label className="text-lg font-semibold text-gray-800">재료</label>
                            <div className="flex space-x-2">
                                <select
                                    className="form-input rounded-lg text-sm"
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                >
                                    <option value="">카테고리 선택</option>
                                    <option value="breakfast">아침</option>
                                    <option value="lunch">점심</option>
                                    <option value="dinner">저녁</option>
                                    <option value="dessert">디저트</option>
                                </select>
                                <select
                                    className="form-input rounded-lg text-sm"
                                    value={difficulty}
                                    onChange={(e) => setDifficulty(e.target.value)}
                                >
                                    <option value="Easy">쉬움</option>
                                    <option value="Medium">보통</option>
                                    <option value="Hard">어려움</option>
                                </select>
                            </div>
                        </div>
                        <textarea
                            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-900 bg-white min-h-36 placeholder:text-gray-400 p-3 text-base font-normal leading-normal"
                            placeholder="예:
밀가루 1컵
설탕 1/2컵
계란 1개"
                            value={ingredients}
                            onChange={(e) => setIngredients(e.target.value)}
                        ></textarea>
                    </div>

                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <label className="text-lg font-semibold text-gray-800">조리 과정</label>
                            <input
                                className="form-input rounded-lg text-sm w-24"
                                placeholder="조리 시간"
                                value={cookTime}
                                onChange={(e) => setCookTime(e.target.value)}
                            />
                        </div>
                        <textarea
                            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-900 bg-white min-h-48 placeholder:text-gray-400 p-3 text-base font-normal leading-normal"
                            placeholder="예:
1. 오븐을 350°F(175°C)로 예열합니다.
2. 큰 그릇에 재료를 섞습니다.
3. 황금빛이 될 때까지 20분간 굽습니다."
                            value={steps}
                            onChange={(e) => setSteps(e.target.value)}
                        ></textarea>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">사진</h3>
                        <div className="grid grid-cols-2 gap-4 @container">
                            <div
                                className="aspect-square rounded-lg bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center cursor-pointer hover:border-[#e92933] hover:bg-red-50"
                                onClick={() => {/* 이미지 업로드 로직 */ }}
                            >
                                <div className="text-center text-gray-500">
                                    <span className="material-icons-outlined text-4xl">add_a_photo</span>
                                    <p className="text-sm mt-1">사진 추가</p>
                                </div>
                            </div>
                            {image && (
                                <div
                                    className="aspect-square rounded-lg bg-cover bg-center"
                                    style={{ backgroundImage: `url("${image}")` }}
                                ></div>
                            )}
                        </div>
                    </div>
                </main>
            </div>

            <footer className="sticky bottom-0 bg-white border-t border-gray-200 px-4 py-3">
                <button
                    className="flex w-full min-w-[84px] max-w-[480px] mx-auto cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 bg-[#e92932] text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-[#c72029] transition-colors"
                    onClick={handleSubmit}
                >
                    <span className="truncate">레시피 저장</span>
                </button>
            </footer>
        </div>
    );
} 