<template>
    <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Poppins:wght@700&display=swap"
        rel="stylesheet"
    />

    <main class="mt-14">
        <div class="mx-auto max-w-[1330px] md:p-4">
            <Hero />
            <ExampleImages />
            <Testimonials />
            <Pricing @select-package="handlePackageSelection" />
            <ExampleUsage />
            <AITrainingProcess />
            <CallToAction />
            <FAQ />
            <OrderForm :selectedPackageProp="selectedPackage" />
        </div>
    </main>
</template>

<script setup>
import { ref } from "vue";
import Hero from "~/components/content/landing-page/Hero.vue";
import Testimonials from "~/components/content/landing-page/Testimonials.vue";
import Pricing from "~/components/content/landing-page/Pricing.vue";
import AITrainingProcess from "~/components/content/landing-page/AITrainingProcess.vue";
import ExampleImages from "~/components/content/landing-page/ExampleImages.vue";
import CallToAction from "~/components/content/landing-page/CallToAction.vue";
import FAQ from "~/components/content/landing-page/FAQ.vue";
import Stats from "~/components/content/landing-page/Stats.vue";
import ExampleUsage from "~/components/content/landing-page/ExampleUsage.vue";
import OrderForm from "~/components/content/landing-page/OrderForm.vue";

const selectedPackage = ref("bas");

const handlePackageSelection = (packageType) => {
    console.log(`Selected package: ${packageType}`);
    selectedPackage.value = packageType;
    const orderElement = document.getElementById("order");
    if (orderElement) {
        orderElement.scrollIntoView({ behavior: "smooth" });
    }
};
</script>
