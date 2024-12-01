// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from "url";

export default defineNuxtConfig({
	compatibilityDate: "2024-11-01",
	devtools: { enabled: true },
	alias: {
		"@app": fileURLToPath(new URL("./app", import.meta.url)),
		"@shared": fileURLToPath(new URL("./shared", import.meta.url)),
		"@pages": fileURLToPath(new URL("./nuxt-pages", import.meta.url)),
		"@nuxt-pages": fileURLToPath(new URL("./nuxt-nuxt-pages", import.meta.url)),
		"@features": fileURLToPath(new URL("./features", import.meta.url)),
		"@widgets": fileURLToPath(new URL("./widgets", import.meta.url))
	},
	modules: ["@nuxt/eslint"],
	vite: {
		css: {
			preprocessorOptions: {
				less: {
					lessOptions: {
						javascriptEnabled: true
					}
				}
			}
		}
	},
	css: ["@app/styles/styles.less"]
});
