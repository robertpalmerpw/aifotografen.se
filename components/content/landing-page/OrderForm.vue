<template>
    <div id="order" class="bg-gray-100 p-4 md:p-32">
        <form
            v-if="step === 1"
            @submit.prevent="submitForm"
            class="bg-white p-4 md:p-8 rounded-lg shadow-lg"
        >
            <h3 class="mb-4 md:mb-6 font-bold text-center">
                Beställningsformulär
            </h3>
            <div class="mb-4 md:mb-6">
                <div class="mb-4">
                    <label for="name" class="block mb-2 font-medium"
                        >Namn:</label
                    >
                    <input
                        type="text"
                        id="name"
                        v-model="name"
                        required
                        class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div class="mb-4">
                    <label for="email" class="block mb-2 font-medium"
                        >E-post:</label
                    >
                    <input
                        type="email"
                        id="email"
                        v-model="email"
                        required
                        class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label for="phone" class="block mb-2 font-medium"
                        >Telefonnummer:</label
                    >
                    <input
                        type="tel"
                        id="phone"
                        v-model="phone"
                        required
                        class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
            </div>
            <div class="mb-4 md:mb-6">
                <label for="package" class="block mb-2 font-medium"
                    >Välj paket:</label
                >
                <select
                    id="package"
                    v-model="selectedPackage"
                    class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="bas">Bas (5 bilder)</option>
                    <option value="pro">Pro (10 bilder)</option>
                    <option value="premium">Premium (20 bilder)</option>
                </select>
            </div>

            <div class="mb-4 md:mb-6">
                <label for="custom-style" class="block mb-2 font-medium"
                    >Önskade bildstilar (valfritt):</label
                >
                <textarea
                    id="custom-style"
                    v-model="customStyle"
                    rows="3"
                    class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Beskriv vilka typer av bilder du vill ha här..."
                ></textarea>
                <p class="text-sm text-gray-500 mt-2">
                    Om du inte beskriver något väljer vi ut bildstilar åt dig.
                </p>
            </div>

            <div class="mb-4 md:mb-6">
                <p v-if="requiresStartupFee">
                    Uppstartsavgift:
                    <span v-if="isStartupFeeDiscounted" class="line-through"
                        >500 kr</span
                    >
                    <span v-else>500 kr</span>
                    <span v-if="isStartupFeeDiscounted" class="text-green-600"
                        >{{ discountedStartupFee }} kr</span
                    >
                </p>
                <p class="font-medium">Totalt: {{ totalPrice }} kr</p>
            </div>

            <div class="flex items-center justify-center">
                <button
                    type="submit"
                    class="bg-green-600 text-white px-4 py-3 md:px-6 md:py-3 rounded-lg hover:bg-green-700 transition duration-300 w-full"
                >
                    Skicka beställning
                </button>
            </div>

            <div class="mb-4 md:mt-6 p-4 bg-blue-100 rounded-xl">
                <p class="p-2">
                    När du har skickat in beställningen kommer vi att granska
                    den och återkomma till dig inom 1-2 arbetsdagar med en
                    orderbekräftelse och betalningsinstruktioner.
                </p>
            </div>
        </form>

        <div v-else-if="step === 2">
            <div class="mb-6 bg-white p-4 md:p-8 rounded-lg shadow-lg">
                <h3 class="mb-4 md:mb-6 font-bold text-center">
                    Orderbekräftelse:
                </h3>

                <p><strong>Ordernummer:</strong> {{ orderNumber }}</p>
                <p><strong>Namn:</strong> {{ name }}</p>
                <p><strong>E-post:</strong> {{ email }}</p>
                <p><strong>Telefonnummer:</strong> {{ phone }}</p>
                <p><strong>Paket:</strong> {{ selectedPackage }}</p>
                <p><strong>Totalt pris:</strong> {{ totalPrice }} kr</p>

                <div class="mt-3">
                    Vi kommer att granska din beställning och återkomma till dig
                    inom 1-2 arbetsdagar med en orderbekräftelse och
                    betalningsinstruktioner.
                </div>
            </div>
        </div>

        <div v-if="isLoading" class="loading-spinner">
            <div class="spinner"></div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, defineProps, watch } from "vue";
import axios from "axios";

const props = defineProps({
    selectedPackageProp: {
        type: String,
        default: "bas",
    },
});

const step = ref(1);
const selectedPackage = ref(props.selectedPackageProp);
const customStyle = ref("");
const requiresStartupFee = ref(false);
const name = ref("");
const email = ref("");
const phone = ref("");
const isStartupFeeDiscounted = ref(true);
const discountedStartupFee = 250;
const packagePrices = { bas: 499, pro: 899, premium: 1599 };
const packagePrice = computed(() => packagePrices[selectedPackage.value]);
const totalPrice = computed(
    () =>
        packagePrice.value +
        (requiresStartupFee.value
            ? isStartupFeeDiscounted.value
                ? discountedStartupFee
                : 500
            : 0),
);
const isLoading = ref(false);
const orderNumber = ref("");

watch(
    () => props.selectedPackageProp,
    (newValue) => {
        selectedPackage.value = newValue;
        console.log(`selectedPackage updated to: ${newValue}`);
    },
);

function generateOrderNumber() {
    const now = new Date();
    const timestamp = now.getTime().toString();
    const randomPart = Math.floor(Math.random() * 10000)
        .toString()
        .padStart(4, "0");
    return `${timestamp}-${randomPart}`;
}

async function submitForm() {
    isLoading.value = true;
    orderNumber.value = generateOrderNumber();
    const orderDetails = {
        name: name.value,
        email: email.value,
        phone: phone.value,
        selectedPackage: selectedPackage.value,
        customStyle: customStyle.value,
        totalPrice: totalPrice.value,
        orderNumber: orderNumber.value,
    };

    try {
        const response = await axios.post(
            "https://us-central1-podranker.cloudfunctions.net/aifotografen",
            orderDetails,
        );

        if (response.status === 200) {
            step.value = 2;
        } else {
            console.error("Failed to submit form");
        }
    } catch (error) {
        console.error("Error submitting form:", error);
    } finally {
        isLoading.value = false;
    }
}
</script>

<style scoped>
.loading-spinner {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 50;
}

.spinner {
    border: 8px solid #f3f3f3;
    border-top: 8px solid #3b82f6;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>
