function Navbar({ currentPage, navigateTo }) {
    return (
        <div className="sticky bottom-0 z-10">
            <div className="flex gap-2 border-t border-gray-200 bg-white px-4 pb-3 pt-2 shadow-[0_-2px_5px_-1px_rgba(0,0,0,0.05)]">
                <a
                    className={`flex flex-1 flex-col items-center justify-end gap-0.5 rounded-full ${currentPage === 'home' ? 'text-e92933 nav-item-active' : 'text-gray-700'}`}
                    onClick={() => navigateTo('home')}
                >
                    <div className="flex h-7 items-center justify-center">
                        <svg fill="currentColor" height="24px" viewBox="0 0 256 256" width="24px" xmlns="http://www.w3.org/2000/svg">
                            <path d={currentPage === 'home'
                                ? "M224,115.55V208a16,16,0,0,1-16,16H168a16,16,0,0,1-16-16V168a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v40a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V115.55a16,16,0,0,1,5.17-11.78l80-75.48.11-.11a16,16,0,0,1,21.53,0,1.14,1.14,0,0,0,.11.11l80,75.48A16,16,0,0,1,224,115.55Z"
                                : "M218.83,103.77l-80-75.48a1.14,1.14,0,0,1-.11-.11,16,16,0,0,0-21.53,0l-.11.11L37.17,103.77A16,16,0,0,0,32,115.55V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V160h32v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V115.55A16,16,0,0,0,218.83,103.77ZM208,208H160V160a16,16,0,0,0-16-16H112a16,16,0,0,0-16,16v48H48V115.55l.11-.1L128,40l79.9,75.43.11.1Z"
                            }></path>
                        </svg>
                    </div>
                    <p className="text-xs font-medium leading-normal tracking-[-0.01em]">홈</p>
                </a>
                <a
                    className={`flex flex-1 flex-col items-center justify-end gap-0.5 ${currentPage === 'recipes' ? 'text-e92933 nav-item-active' : 'text-gray-500 hover:text-primary-color'}`}
                    onClick={() => navigateTo('recipes')}
                >
                    <div className="flex h-7 items-center justify-center">
                        <svg fill="currentColor" height="24px" viewBox="0 0 256 256" width="24px" xmlns="http://www.w3.org/2000/svg">
                            <path d={currentPage === 'recipes'
                                ? "M240,64V192a16,16,0,0,1-16,16H160a24,24,0,0,0-24,24,8,8,0,0,1-16,0,24,24,0,0,0-24-24H32a16,16,0,0,1-16-16V64A16,16,0,0,1,32,48H88a32,32,0,0,1,32,32v88a8,8,0,0,0,16,0V80a32,32,0,0,1,32-32h56A16,16,0,0,1,240,64Z"
                                : "M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"
                            }></path>
                        </svg>
                    </div>
                    <p className="text-xs font-medium leading-normal tracking-[-0.01em]">레시피</p>
                </a>
                <a
                    className={`flex flex-1 flex-col items-center justify-end gap-0.5 ${currentPage === 'create' ? 'text-e92933 nav-item-active' : 'text-gray-500 hover:text-primary-color'}`}
                    onClick={() => navigateTo('create')}
                >
                    <div className="flex h-7 items-center justify-center">
                        <svg fill="currentColor" height="24px" viewBox="0 0 256 256" width="24px" xmlns="http://www.w3.org/2000/svg">
                            <path d={currentPage === 'create'
                                ? "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm-32,96a8,8,0,0,1-8,8H136v32a8,8,0,0,1-16,0V136H88a8,8,0,0,1,0-16h32V88a8,8,0,0,1,16,0v32h32A8,8,0,0,1,176,128Z"
                                : "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm0,176H48V48H208V208Zm-32-80a8,8,0,0,1-8,8H136v32a8,8,0,0,1-16,0V136H88a8,8,0,0,1,0-16h32V88a8,8,0,0,1,16,0v32h32A8,8,0,0,1,176,128Z"
                            }></path>
                        </svg>
                    </div>
                    <p className="text-xs font-medium leading-normal tracking-[-0.01em]">추가</p>
                </a>
                <a
                    className={`flex flex-1 flex-col items-center justify-end gap-0.5 ${currentPage === 'profile' ? 'text-e92933 nav-item-active' : 'text-gray-500 hover:text-primary-color'}`}
                    onClick={() => navigateTo('profile')}
                >
                    <div className="flex h-7 items-center justify-center">
                        <svg fill="currentColor" height="24px" viewBox="0 0 256 256" width="24px" xmlns="http://www.w3.org/2000/svg">
                            <path d={currentPage === 'profile'
                                ? "M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"
                                : "M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"
                            }></path>
                        </svg>
                    </div>
                    <p className="text-xs font-medium leading-normal tracking-[-0.01em]">프로필</p>
                </a>
            </div>
            <div className="h-safe-area-bottom bg-white"></div>
        </div>
    );
} 