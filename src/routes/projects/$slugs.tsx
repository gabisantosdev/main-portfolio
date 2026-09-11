import { createFileRoute } from '@tanstack/react-router'
import { ProjectPage } from '#/lib/pages/projects/components/project'
import { getOtherProjects } from '#/lib/pages/projects/loaders/other-projects.loader'
import { getProject } from '#/lib/pages/projects/loaders/project.loader'

export const Route = createFileRoute('/projects/$slugs')({
	component: Project,
	loader: async ({ params }) => {
		return {
			project: await getProject(params),
			otherProjects: await getOtherProjects(params),
		}
	},
})

function Project() {
	return <ProjectPage />
}
