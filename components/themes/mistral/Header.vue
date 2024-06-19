<template>
    <header
        class="flex flex-wrap sm:justify-start sm:flex-nowrap w-full text-sm py-4 relative"
    >
        <nav class="transition-colors w-full z-10 top-0 inverted">
            <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div class="relative flex items-center justify-between h-16">
                    <div
                        class="absolute inset-y-0 left-0 flex items-center sm:hidden"
                    >
                        <!-- Mobile menu button-->
                        <button
                            type="button"
                            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                            @click="mobileMenuOpen = !mobileMenuOpen"
                        >
                            <span class="sr-only">Open main menu</span>
                            <!--
                              Icon when menu is closed.

                              Heroicon name: outline/menu

                              Menu open: "hidden", Menu closed: "block"
                            -->
                            <svg
                                class="h-6 w-6"
                                :class="!mobileMenuOpen ? 'block' : 'hidden'"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="2"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                            <!--
                              Icon when menu is open.

                              Heroicon name: outline/x

                              Menu open: "block", Menu closed: "hidden"
                            -->
                            <svg
                                class="h-6 w-6"
                                :class="mobileMenuOpen ? 'block' : 'hidden'"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="2"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                    <div
                        class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"
                    >
                        <div class="flex-shrink-0 flex items-center">
                            <span
                                class="text-base font-medium text-gray-700 hover:text-gray-900"
                            >
                                <div class="flex">
                                    <img
                                        v-if="config.logo"
                                        :src="config.logo"
                                        class="h-10 rounded-full mr-2"
                                        alt="logo"
                                    />
                                    <nuxt-link class="text-3xl" to="/">{{
                                        blogName
                                    }}</nuxt-link>
                                </div>
                            </span>
                        </div>
                        <div
                            class="hidden sm:block sm:ml-6 absolute right-0 font-mark"
                        >
                            <div class="flex space-x-4">
                                <NuxtLink
                                    v-for="item in menu"
                                    :key="item.path"
                                    :to="item.path"
                                    class="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium font-to-invert-to-black"
                                    >{{ item.name }}
                                </NuxtLink>
                                <a
                                    href="#order"
                                    class="bg-green-600 text-white py-2 px-3 rounded-full text-lg font-bold uppercase tracking-wide hover:bg-green-700"
                                    >BESTÄLL
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Mobile menu, show/hide based on menu state. -->
            <div :class="mobileMenuOpen ? '' : 'hidden'">
                <div class="px-2 pt-2 pb-3 space-y-1">
                    <NuxtLink
                        v-for="item in menu"
                        :key="item.path"
                        :to="item.path"
                        class="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium font-to-invert-to-black"
                        >{{ item.name }}
                    </NuxtLink>
                    <div class="mt-12">
                        <NuxtLink
                            href="/bestall"
                            class="bg-green-600 text-white py-2 px-3 rounded-full text-lg font-bold uppercase tracking-wide hover:bg-green-700"
                            >BESTÄLL
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<script setup lang="ts">
const config = useAppConfig();
const menu = config.menu;
const blogName = config.name;

const mobileMenuOpen = ref(false);
</script>

<style lang="scss" scoped>
.inverted {
    .font-to-invert-to-black {
        @apply text-slate-700 transition-all;

        &:hover {
            @apply text-white;
        }
    }
}
</style>
