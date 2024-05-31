<template>
    <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Poppins:wght@700&display=swap"
        rel="stylesheet"
    />

    <main class="mt-14">
        <div class="mx-auto max-w-[1330px] md:p-4">
            <Hero /> <ExampleImages /><Testimonials /> <Pricing />
            <ExampleUsage />
            <AITrainingProcess /> <CallToAction /> <FAQ />
            <OrderForm />
        </div>
    </main>
</template>
<script>
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
export default {
    components: {
        Hero,
        Testimonials,
        Pricing,
        AITrainingProcess,
        ExampleImages,
        CallToAction,
        FAQ,
        Stats,
        ExampleUsage,
        OrderForm,
    },
};
</script>
