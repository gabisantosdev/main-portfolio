import { createFileRoute } from '@tanstack/react-router'
import { Home } from '#/lib/pages/home/components/home'

export const Route = createFileRoute('/')({ component: App })

function App() {
	return <Home />
}
