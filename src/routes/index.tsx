import { createFileRoute } from '@tanstack/react-router'
import { createSeoHead } from '#/lib/global/seo/seo'
import { Home } from '#/lib/pages/home/components/home'

export const Route = createFileRoute('/')({
	head: () => createSeoHead(),
	component: App,
})

function App() {
	return <Home />
}
