import { cloudflare } from '@cloudflare/vite-plugin'
import StylexRsPlugin from '@stylexswc/unplugin/vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { GABRIEL_INFORMATION } from './src/lib/global/data/gabriel-information.data.ts'

const config = defineConfig({
	resolve: { tsconfigPaths: true },
	plugins: [
		cloudflare({ viteEnvironment: { name: 'ssr' } }),
		tanstackStart({
			prerender: {
				enabled: true,
				crawlLinks: true,
				filter: (page) =>
					!page.path.includes('#') && page.path !== '/projects',
			},
			sitemap: {
				enabled: true,
				host: GABRIEL_INFORMATION.urls.website,
			},
		}),
		viteReact(),
		StylexRsPlugin({
			rsOptions: {
				dev: process.env.NODE_ENV !== 'production',
			},
			useCssPlaceholder: true,
			useCSSLayers: true,
		}),
	],
})

export default config
