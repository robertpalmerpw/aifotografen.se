<template>
    <footer>
        <div
            class="mt-auto bg-gray-100 text-gray-800 p-6 items-center justify-center flex"
        >
            <div
                class="flex mb-2 space-x-2 text-sm text-gray-500 dark:text-gray-400"
            >
                <div>Copyright © {{ new Date().getFullYear() }}</div>
                <div>•</div>
                &nbsp;{{ config.name }}
            </div>
            <!--        <NuxtLink
                title="Subscribe to RSS feed"
                aria-label="Open RSS feed"
                class="text-sm text-gray-500 transition hover:text-gray-600 text-center"
                rel="me"
                target="_blank"
                to="/rss.xml"
                ><span class="sr-only">Subscribe to RSS feed</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    class="transition-transform hover:scale-110 w-6 h-6 mt-2"
                >
                    <path
                        d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM96 136c0-13.3 10.7-24 24-24c137 0 248 111 248 248c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-110.5-89.5-200-200-200c-13.3 0-24-10.7-24-24zm0 96c0-13.3 10.7-24 24-24c83.9 0 152 68.1 152 152c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-57.4-46.6-104-104-104c-13.3 0-24-10.7-24-24zm0 120a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"
                    />
                </svg>
            </NuxtLink> -->
        </div>
    </footer>
</template>

<script setup lang="ts">
const config = useAppConfig();
const menu = config.menu;
const newsletterEnabled = config.newsletter.enabled;
const formAction = config.newsletter.form_action;
const email = ref("");
const success = ref(false);
const error = ref(false);

async function subscribe() {
    const formData = new FormData();
    formData.append("fields[email]", email.value);
    formData.append("ml-submit", "1");
    formData.append("anticsrf", "true");
    const response = await fetch(formAction, {
        method: "POST",
        body: formData,
    });
    email.value = "";

    if (response.ok) {
        success.value = true;
    } else {
        error.value = true;
    }
}
</script>
