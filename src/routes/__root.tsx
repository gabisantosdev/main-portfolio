import {
	createRootRoute,
	HeadContent,
	Outlet,
	Scripts,
} from '@tanstack/react-router'
import { personJsonLd } from '#/lib/global/seo/seo'
import { Layout } from '#/lib/layouts'
import { NotFound } from '#/lib/pages/not-found/components/not-found'
import globalCss from '../styles/global.css?url'
import '../styles/stylex.css'

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ name: 'theme-color', content: '#071831' },
			{ 'script:ld+json': personJsonLd },
		],
		links: [
			{ rel: 'stylesheet', href: globalCss },
			{ rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
			{ rel: 'manifest', href: '/site.webmanifest' },
		],
	}),
	shellComponent: RootDocument,
	notFoundComponent: ErrorBoundary,
})

function RootDocument() {
	return (
		<html lang='pt-BR' suppressHydrationWarning>
			<head>
				<HeadContent />
			</head>
			<body>
				<Layout.Root>
					<Outlet />
				</Layout.Root>
				<Scripts />
			</body>
		</html>
	)
}

function ErrorBoundary() {
	return <NotFound />
}
