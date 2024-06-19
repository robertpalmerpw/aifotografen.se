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
                        :src="`/images/examples/${image}`"
                        :alt="`Exempelbild ${image}`"
                        class="rounded shadow-lg w-full h-full object-cover transition duration-300 ease-in-out transform hover:scale-105"
                    />
                </div>
            </div>
        </div>
        <!-- Modal -->
        <div
            v-if="selectedImage"
            class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            @click.self="selectedImage = null"
        >
            <div
                class="relative p-4 border shadow-lg rounded-md bg-white flex items-center justify-center overflow-hidden"
                style="max-width: 75%; max-height: 75vh"
            >
                <img
                    :src="`/images/examples/${selectedImage}`"
                    :alt="`Exempelbild ${selectedImage}`"
                    class="rounded"
                    style="
                        max-width: 100%;
                        max-height: 100%;
                        object-fit: contain;
                    "
                />

                <!-- Close button -->
                <button
                    class="absolute top-0 right-0 mt-2 mr-2 p-2 bg-gray-600 text-white text-lg rounded-full shadow-lg hover:bg-red-700 focus:outline-none"
                    @click="selectedImage = null"
                >
                    <span>&times;</span>
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
