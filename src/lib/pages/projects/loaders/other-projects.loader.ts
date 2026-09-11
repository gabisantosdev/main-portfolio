import { Projects } from '#/lib/sections/projects/data/projects.data'
import { getProject } from './project.loader'

type OtherProjectsParams = {
	slugs: string
}

export const getOtherProjects = async ({ slugs }: OtherProjectsParams) => {
	const project = await getProject({ slugs })

	const otherProjects = Projects.filter(
		(otherProject) => otherProject.id !== project?.id
	).slice(0, 2)

	return otherProjects
}
