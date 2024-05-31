<template>
    <div>
        <form
            v-if="step === 1"
            @submit.prevent="submitForm"
            class="max-w-lg mx-auto p-3"
        >
            <h2 class="mb-6">Beställningsformulär</h2>
            <div class="mb-6">
                <div class="mb-4">
                    <label for="name" class="block mb-2">Namn:</label>
                    <input
                        type="text"
                        id="name"
                        v-model="name"
                        required
                        class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div class="mb-4">
                    <label for="email" class="block mb-2">E-post:</label>
                    <input
                        type="email"
                        id="email"
                        v-model="email"
                        required
                        class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label for="phone" class="block mb-2">Telefonnummer:</label>
                    <input
                        type="tel"
                        id="phone"
                        v-model="phone"
                        required
                        class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
            </div>
            <div class="mb-6">
                <label for="package" class="block mb-2 font-medium"
                    >Välj paket:</label
                >
                <select
                    id="package"
                    v-model="selectedPackage"
                    class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="bas">Bas (5 bilder, 1 stil)</option>
                    <option value="pro">Pro (10 bilder, 2 stilar)</option>
                    <option value="premium">
                        Premium (20 bilder, 4 stilar)
                    </option>
                </select>
            </div>

            <div class="mb-6">
                <label class="block mb-2 font-medium">Välj bildstil(ar):</label>
                <template v-if="selectedPackage === 'bas'">
                    <div class="flex items-center mb-2">
                        <input
                            type="radio"
                            id="bas-style-1"
                            value="Professionella studioporträtt"
                            v-model="basStyle"
                            class="mr-2"
                        />
                        <label for="bas-style-1"
                            >Professionella studioporträtt</label
                        >
                    </div>
                    <div class="flex items-center mb-2">
                        <input
                            type="radio"
                            id="bas-style-2"
                            value="Livsstilsbilder utomhus"
                            v-model="basStyle"
                            class="mr-2"
                        />
                        <label for="bas-style-2">Livsstilsbilder utomhus</label>
                    </div>
                    <div class="flex items-center mb-2">
                        <input
                            type="radio"
                            id="bas-style-3"
                            value="Modelliknande modefotografering"
                            v-model="basStyle"
                            class="mr-2"
                        />
                        <label for="bas-style-3"
                            >Modelliknande modefotografering</label
                        >
                    </div>
                    <div class="flex items-center mb-2">
                        <input
                            type="radio"
                            id="bas-style-4"
                            value="Redaktionell stil"
                            v-model="basStyle"
                            class="mr-2"
                        />
                        <label for="bas-style-4">Redaktionell stil</label>
                    </div>
                    <div class="flex items-center">
                        <input
                            type="radio"
                            id="bas-style-5"
                            value="Konstnärliga och drömlika"
                            v-model="basStyle"
                            class="mr-2"
                        />
                        <label for="bas-style-5"
                            >Konstnärliga och drömlika</label
                        >
                    </div>
                </template>

                <template v-else-if="selectedPackage === 'pro'">
                    <div v-for="n in 2" :key="n" class="mb-4">
                        <label :for="`pro-style-${n}`" class="block mb-2"
                            >Bildstil {{ n }}:</label
                        >
                        <select
                            :id="`pro-style-${n}`"
                            v-model="proStyles[n - 1]"
                            class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">Välj en stil</option>
                            <option value="Professionella studioporträtt">
                                Professionella studioporträtt
                            </option>
                            <option value="Livsstilsbilder utomhus">
                                Livsstilsbilder utomhus
                            </option>
                            <option value="Modelliknande modefotografering">
                                Modelliknande modefotografering
                            </option>
                            <option value="Redaktionell stil">
                                Redaktionell stil
                            </option>
                            <option value="Konstnärliga och drömlika">
                                Konstnärliga och drömlika
                            </option>
                        </select>
                    </div>
                </template>

                <template v-else-if="selectedPackage === 'premium'">
                    <div v-for="n in 4" :key="n" class="mb-4">
                        <label :for="`premium-style-${n}`" class="block mb-2"
                            >Bildstil {{ n }}:</label
                        >
                        <select
                            :id="`premium-style-${n}`"
                            v-model="premiumStyles[n - 1]"
                            class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">Välj en stil</option>
                            <option value="Professionella studioporträtt">
                                Professionella studioporträtt
                            </option>
                            <option value="Livsstilsbilder utomhus">
                                Livsstilsbilder utomhus
                            </option>
                            <option value="Modelliknande modefotografering">
                                Modelliknande modefotografering
                            </option>
                            <option value="Redaktionell stil">
                                Redaktionell stil
                            </option>
                            <option value="Konstnärliga och drömlika">
                                Konstnärliga och drömlika
                            </option>
                        </select>
                    </div>
                </template>
            </div>
            <div class="mb-6">
                <label for="custom-style" class="block mb-2 font-medium"
                    >Egen bildstil (valfritt):</label
                >
                <textarea
                    id="custom-style"
                    v-model="customStyle"
                    rows="3"
                    class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Beskriv din egen önskade bildstil här..."
                ></textarea>
            </div>
            <!--             <div class="mb-6">
                <label class="inline-flex items-center">
                    <input
                        type="checkbox"
                        v-model="requiresStartupFee"
                        class="form-checkbox text-blue-500"
                    />
                    <span class="ml-2"
                        >Kräver uppstartsavgift för att träna AI</span
                    >
                </label>
                <p v-if="isStartupFeeDiscounted" class="text-green-600">
                    Just nu: Uppstartsavgiften är rabatterad!
                </p>
            </div> -->
            <div class="mb-6">
                <h3 class="mb-2 font-medium">Prissummering:</h3>
                <p>Paket: {{ packagePrice }} kr</p>
                <p v-if="requiresStartupFee">
                    Uppstartsavgift:
                    <span v-if="isStartupFeeDiscounted" class="line-through"
                        >500 kr</span
                    >
                    <span v-else>500 kr</span>
                    <span v-if="isStartupFeeDiscounted" class="text-green-600">
                        {{ discountedStartupFee }} kr
                    </span>
                </p>
                <p class="font-medium">Totalt: {{ totalPrice }} kr</p>
            </div>
            <div class="mb-6 p-4 bg-blue-100 rounded">
                <h3 class="mb-2 font-medium">Efter beställning</h3>
                <p class="mb-2">
                    När du har skickat in beställningen kommer vi att granska
                    den och återkomma till dig inom 1-2 arbetsdagar med en
                    orderbekräftelse och betalningsinstruktioner.
                </p>
                <p>
                    Observera att betalning måste göras via Swish innan vi
                    påbörjar arbetet med dina AI-genererade bilder.
                </p>
            </div>

            <button
                type="submit"
                class="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                Skicka beställning
            </button>
        </form>

        <div v-else-if="step === 2" class="max-w-lg mx-auto">
            <h2 class="mb-6">Orderbekräftelse</h2>
            <div class="mb-6">
                <ul class="steps">
                    <li class="step step-primary">Fyll i formulär</li>
                    <li class="step step-primary">Bekräftelse</li>
                </ul>
            </div>
            <p class="mb-4">Tack för din beställning, {{ name }}!</p>
            <div class="mb-6">
                <h3 class="mb-2 font-medium">Orderdetaljer:</h3>
                <p>Namn: {{ name }}</p>
                <p>E-post: {{ email }}</p>
                <p>Telefonnummer: {{ phone }}</p>
                <p>Paket: {{ selectedPackage }}</p>
                <p v-if="selectedPackage === 'bas'">Bildstil: {{ basStyle }}</p>
                <p v-else-if="selectedPackage === 'pro'">
                    Bildstilar: {{ proStyles.join(", ") }}
                </p>
                <p v-else-if="selectedPackage === 'premium'">
                    Bildstilar: {{ premiumStyles.join(", ") }}
                </p>
                <p v-if="customStyle">Egen bildstil: {{ customStyle }}</p>
                <p>Totalt pris: {{ totalPrice }} kr</p>
            </div>
            <p>
                Vi kommer att granska din beställning och återkomma till dig
                inom 1-2 arbetsdagar med en orderbekräftelse och
                betalningsinstruktioner.
            </p>
        </div>
    </div>
</template>
<script setup>
import { ref, computed } from "vue";
const step = ref(1);
const selectedPackage = ref("bas");
const basStyle = ref("");
const proStyles = ref(["", ""]);
const premiumStyles = ref(["", "", "", ""]);
const customStyle = ref("");
const requiresStartupFee = ref(false);
const name = ref("");
const email = ref("");
const phone = ref("");
const isStartupFeeDiscounted = ref(true);
const discountedStartupFee = 250;
const packagePrices = { bas: 500, pro: 1000, premium: 2000 };
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

async function submitForm() {
    step.value = 2;
}
</script>
