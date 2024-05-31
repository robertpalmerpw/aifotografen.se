<template>
    <section class="bg-gray-100 py-16">
        <div class="container mx-auto px-4">
            <h2 class="mb-12 text-center">Priser</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
                <!-- Pricing plans -->
                <div
                    class="bg-white p-8 rounded-lg shadow-lg text-center transition duration-300 ease-in-out hover:shadow-2xl hover:transform hover:-translate-y-1 flex flex-col"
                >
                    <div class="text-indigo-500 mb-6">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-16 w-16 mx-auto"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                            />
                        </svg>
                    </div>
                    <h3 class="text-2xl font-bold mb-4">Bas</h3>
                    <ul class="text-xl mb-6 flex-grow">
                        <li class="mb-2 flex items-start">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-6 w-6 mr-2 mt-1 flex-shrink-0 text-green-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                            <span>5 AI-genererade bilder</span>
                        </li>
                        <li class="mb-2 flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-6 w-6 mr-2 text-green-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                            1 bildstil
                        </li>
                        <li class="flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-6 w-6 mr-2 text-green-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                            Bildleverans inom 5 dagar
                        </li>
                    </ul>
                    <div class="mt-auto">
                        <p class="line-through text-gray-500 mb-2 text-lg">
                            Startavgift 1000 kr
                        </p>
                        <p class="text-3xl font-bold text-green-600 mb-6">
                            499 kr
                        </p>
                        <button
                            class="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition duration-300 w-full"
                        >
                            Köp Bas
                        </button>
                    </div>
                </div>
                <div
                    class="bg-white p-8 rounded-lg shadow-lg text-center transition duration-300 ease-in-out hover:shadow-2xl hover:transform hover:-translate-y-1 flex flex-col"
                >
                    <div class="text-indigo-500 mb-6">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-16 w-16 mx-auto"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                            />
                        </svg>
                    </div>
                    <h3 class="text-2xl font-bold mb-4">Pro</h3>
                    <ul class="text-xl mb-6 flex-grow">
                        <li class="mb-2 flex items-start">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-6 w-6 mr-2 mt-1 flex-shrink-0 text-green-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                            <span>10 AI-genererade bilder</span>
                        </li>
                        <li class="mb-2 flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-6 w-6 mr-2 text-green-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                            2 bildstilar
                        </li>
                        <li class="mb-2 flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-6 w-6 mr-2 text-green-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                            Bildleverans inom 3 dagar
                        </li>
                        <li class="flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-6 w-6 mr-2 text-green-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                            1 omgång ändringar
                        </li>
                    </ul>
                    <div class="mt-auto">
                        <p class="line-through text-gray-500 mb-2 text-lg">
                            Startavgift 1000 kr
                        </p>
                        <p class="text-3xl font-bold text-green-600 mb-6">
                            899 kr
                        </p>
                        <button
                            class="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition duration-300 w-full"
                        >
                            Köp Pro
                        </button>
                    </div>
                </div>
                <div
                    class="bg-white p-8 rounded-lg shadow-lg text-center transition duration-300 ease-in-out hover:shadow-2xl hover:transform hover:-translate-y-1 flex flex-col"
                >
                    <div class="text-indigo-500 mb-6">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-16 w-16 mx-auto"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 13l4 4L19 7M5 13l4-4m8 8l-4 4"
                            />
                        </svg>
                    </div>
                    <h3 class="text-2xl font-bold mb-4">Premium</h3>
                    <ul class="text-xl mb-6 flex-grow">
                        <li class="mb-2 flex items-start">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-6 w-6 mr-2 mt-1 flex-shrink-0 text-green-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                            <span>20 AI-genererade bilder</span>
                        </li>
                        <li class="mb-2 flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-6 w-6 mr-2 text-green-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                            4 bildstilar
                        </li>
                        <li class="mb-2 flex items-start">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-6 w-6 mr-2 mt-1 flex-shrink-0 text-green-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                            <span>Expressleverans inom 1 dag</span>
                        </li>
                        <li class="mb-2 flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-6 w-6 mr-2 text-green-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                            2 omgångar ändringar
                        </li>
                    </ul>
                    <div class="mt-auto">
                        <p class="line-through text-lg text-gray-500 mb-2">
                            Startavgift 1000 kr
                        </p>
                        <p class="text-3xl font-bold text-green-600 mb-6">
                            1599 kr
                        </p>
                        <button
                            class="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition duration-300 w-full"
                        >
                            Köp Premium
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
