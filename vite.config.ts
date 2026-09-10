import { cloudflare } from '@cloudflare/vite-plugin';
import StylexRsPlugin from '@stylexswc/unplugin/vite';
import { devtools } from '@tanstack/devtools-vite';
import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import viteReact from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const config = defineConfig({
	resolve: { tsconfigPaths: true },
	plugins: [
		devtools(),
		cloudflare({ viteEnvironment: { name: 'ssr' } }),
		tanstackStart(),
		viteReact(),
		StylexRsPlugin({
			rsOptions: {
				dev: process.env.NODE_ENV !== 'production',
			},
			useCssPlaceholder: true,
			useCSSLayers: true,
		}),
	],
});

export default config;
