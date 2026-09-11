import { createFileRoute } from '@tanstack/react-router'
import { ProjectsPage } from '#/lib/pages/projects/components/projects'

export const Route = createFileRoute('/projects/')({
	component: RouteComponent,
})

function RouteComponent() {
	return <ProjectsPage />
}
