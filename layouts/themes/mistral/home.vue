<template>
    <Header />
    <ContentRenderer :value="doc" />
    <Footer />
</template>
<script setup lang="ts">
import Header from "~/components/themes/mistral/Header.vue";
import Footer from "~/components/themes/mistral/Footer.vue";
defineProps<{
    doc: any;
}>();
</script>

<style>
h1 {
    font-family: "Inter", sans-serif;
    color: #000;
    font-size: 4em;
    font-weight: 700; /* Making the font weight 900 for boldness */

    font-style: normal;
    font-variant: normal;
    font-kerning: auto;
    font-optical-sizing: auto;
    font-stretch: normal; /* Changed from 100% to normal for standard stretching */
    font-variation-settings: "wght" 900;
    font-feature-settings: normal;
    text-transform: none;
    text-decoration: none; /* The value 'none solid rgb(0, 0, 0)' was simplified to 'none' */
    text-align: center;
    text-indent: 0px;
}

@media (max-width: 768px) {
    h1 {
        font-size: 2.5em; /* Smaller font size for mobile devices */
    }
}
h2 {
    font-family: "Inter", sans-serif;
    color: #000;
    font-size: 3em;
    font-weight: 700; /* Making the font weight 900 for boldness */

    font-style: normal;
    font-variant: normal;
    font-kerning: auto;
    font-optical-sizing: auto;
    font-stretch: normal; /* Changed from 100% to normal for standard stretching */
    font-variation-settings: "wght" 900;
    font-feature-settings: normal;
    text-transform: none;
    text-decoration: none; /* The value 'none solid rgb(0, 0, 0)' was simplified to 'none' */
    text-align: center;
    text-indent: 0px;
}

@media (max-width: 768px) {
    h2 {
        font-size: 2em; /* Smaller font size for mobile devices */
    }
}
h3 {
    font-family: "Inter", sans-serif;
    color: #000;
    font-size: 2em;
    font-weight: 700; /* Making the font weight 900 for boldness */

    font-style: normal;
    font-variant: normal;
    font-kerning: auto;
    font-optical-sizing: auto;
    font-stretch: normal; /* Changed from 100% to normal for standard stretching */
    font-variation-settings: "wght" 900;
    font-feature-settings: normal;
    text-transform: none;
    text-decoration: none; /* The value 'none solid rgb(0, 0, 0)' was simplified to 'none' */
    text-align: center;
    text-indent: 0px;
}

@media (max-width: 768px) {
    h3 {
        font-size: 1em; /* Smaller font size for mobile devices */
    }
}
</style>
