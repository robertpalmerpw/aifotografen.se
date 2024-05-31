<template>
    <section class="bg-gray-100 py-16">
        <div class="container mx-auto px-4">
            <h2 class="mb-2 text-center">Galleri</h2>
            <p
                class="text-xl md:text-2xl mb-8 text-gray-900 py-2 px-4 rounded-lg text-center"
            >
                Bilderna är till 100% genererade av vår AI-fotograf.
            </p>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <!-- Loop through the images array to display each image -->
                <div
                    v-for="(image, index) in images"
                    :key="index"
                    class="cursor-pointer"
                    @click="selectedImage = image"
                >
                    <img
                        :src="`_nuxt/public/images/examples/${image}`"
                        :alt="`Exempelbild ${image}`"
                        class="rounded shadow-lg w-full h-full object-cover transition duration-300 ease-in-out transform hover:scale-105"
                    />
                </div>
            </div>
        </div>
        <!-- Modal -->
        <div
            v-if="selectedImage"
            class="fixed inset-0 bg-black bg-opacity-50 overflow-y-auto h-full w-full"
            @click.self="selectedImage = null"
        >
            <div
                class="relative top-1/4 mx-auto p-5 border w-3/4 md:w-1/2 lg:w-1/3 shadow-lg rounded-md bg-white"
            >
                <img
                    :src="`_nuxt/public/images/examples/${selectedImage}`"
                    :alt="`Exempelbild ${selectedImage}`"
                    class="rounded"
                />
                <!-- Close button -->
                <button
                    class="absolute top-0 right-0 mt-2 mr-2"
                    @click="selectedImage = null"
                >
                    <span class="text-black">&times;</span>
                </button>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    data() {
        return {
            selectedImage: null,
            images: [
                "00000-3379275068.jpeg",
                "00000-3755925407.jpeg",
                "00000-3898569358.jpeg",
                "002.png",
                "00021-1420543648.jpeg",
                "00036-3776793451.jpeg",
                "00052.png",
                "00453-2995717457.png",
                "2024-02-26_15-24-45_1492.png",
                "2024-03-05_15-44-44_3772.png",
                "02499-144278541.png",
                "02507-2946753955.png",
                // Add any additional filenames as needed
            ],
        };
    },
};
</script>
