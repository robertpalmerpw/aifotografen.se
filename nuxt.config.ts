// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            script: [
                ...(process.env.PIRSCH_CODE
                    ? [
                        {
                            src: "https://api.pirsch.io/pirsch.js",
                            id: "pirschjs",
                            defer: true,
                            "data-code": process.env.PIRSCH_CODE,
                            type: "text/javascript",
                        },
                    ]
                    : []),
            ],
            link: [
                // Existing link items should be preserved here
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
                },
            ],
        },
    },

    extends: ["github:hlassiege/bloggrify#main"],
});
