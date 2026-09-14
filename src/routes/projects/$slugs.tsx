import { createFileRoute } from '@tanstack/react-router'
import { createProjectJsonLd, createSeoHead } from '#/lib/global/seo/seo'
import { ProjectPage } from '#/lib/pages/projects/components/project'
import { getOtherProjects } from '#/lib/pages/projects/loaders/other-projects.loader'
import { getProject } from '#/lib/pages/projects/loaders/project.loader'

export const Route = createFileRoute('/projects/$slugs')({
	loader: async ({ params }) => {
		return {
			project: await getProject(params),
			otherProjects: await getOtherProjects(params),
		}
	},
	head: ({ loaderData, params }) => {
		const project = loaderData?.project
		const path = `/projects/${params.slugs}`
		const seo = createSeoHead({
			title: project
				? `${project.name} | Gabriel S. Coutinho`
				: 'Projeto | Gabriel S. Coutinho',
			description: project?.info?.description,
			path,
			image: project?.image,
			imageAlt: project?.imageAlt,
		})

		return {
			...seo,
			scripts: project
				? [
						{
							type: 'application/ld+json',
							children: JSON.stringify(
								createProjectJsonLd({
									name: project.name,
									description: project.info?.description ?? '',
									path,
									image: project.image,
									dateCreated: project.info?.age,
									category: project.info?.category,
									technologies: project.info?.technologies,
								}),
							),
						},
					]
				: undefined,
		}
	},
	component: Project,
})

function Project() {
	return <ProjectPage />
}
