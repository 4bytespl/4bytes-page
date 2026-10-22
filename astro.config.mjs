// @ts-check

import sitemap from "@astrojs/sitemap";

import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
	prefetch: true,
	vite: {
		server: {
			allowedHosts: true,
		},
		plugins: [tailwindcss()],
	},

	fonts: [
		//   {
		// 	provider: fontProviders.fontsource(),
		// 	name: "IBM Plex Sans",
		// 	cssVariable: "--font-sans",
		// 	weights: [400, 600],
		// 	styles: ["normal"],
		// 	subsets: ["latin"],
		// },
		// {
		// 	provider: fontProviders.fontsource(),
		// 	name: "IBM Plex Mono",
		// 	cssVariable: "--font-mono",
		// 	weights: [400],
		// 	styles: ["normal"],
		// 	subsets: ["latin"],
		// },
		{
			provider: fontProviders.fontsource(),
			name: "Geist",
			cssVariable: "--font-sans",
			weights: [800],
			styles: ["normal"],
			subsets: ["latin"],
		},
		{
			provider: fontProviders.fontsource(),
			name: "JetBrains Mono",
			cssVariable: "--font-mono",
			weights: [400, 500, 600, 700],
			styles: ["normal"],
			subsets: ["latin"],
		},
	],

	site: "https://4bytes.com",
	integrations: [sitemap()],
});
