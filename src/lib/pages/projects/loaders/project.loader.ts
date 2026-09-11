import { notFound } from '@tanstack/react-router'
import { Projects } from '#/lib/sections/projects/data/projects.data'

type ProjectParams = {
	slugs: string
}

export const getProject = async ({ slugs }: ProjectParams) => {
	const project = Projects.find(
		(project) => `${project.slug}-${project.id}` === slugs
	)

	if (!project) throw notFound()

	return project
}
