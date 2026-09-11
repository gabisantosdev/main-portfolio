import * as stylex from '@stylexjs/stylex'
import { createFileRoute, notFound } from '@tanstack/react-router'
import { Button } from '#/lib/global/ui/Button/components'
import { Icon } from '#/lib/global/ui/icons/components'
import { Section } from '#/lib/global/ui/section/components'
import { ProjectInformation } from '#/lib/sections/projects/components'
import { Projects } from '#/lib/sections/projects/data/projects.data'
import { radius } from '#/styles/tokens/radius.stylex'

const styles = stylex.create({
	img: {
		width: '100%',
		borderRadius: radius[500],
	},
})

export const Route = createFileRoute('/projects/$slugs')({
	component: ProjectPage,
	loader: ({ params }) => {
		const project = Projects.find(
			(project) => `${project.slug}-${project.id}` === params.slugs
		)

		if (!project) {
			throw notFound()
		}

		return {
			project,
		}
	},
})

function ProjectPage() {
	const { project } = Route.useLoaderData()

	return (
		<main>
			<Section.Root aria-label='Project information section'>
				<Section.TitleH1>{project.name}</Section.TitleH1>
				<Section.Description>{project.info?.description}</Section.Description>

				<Button.Container>
					<Button.Root href='/'>
						<Button.Text>Visitar website</Button.Text>
						<Icon.ArrowRight height='0.5rem' width='0.625rem' />
					</Button.Root>
					<Button.SecondaryRoot href='/'>
						<Button.Text>Vamos conversar</Button.Text>
					</Button.SecondaryRoot>
				</Button.Container>

				<ProjectInformation.Root>
					<ProjectInformation.Container>
						<ProjectInformation.Tag>Ano</ProjectInformation.Tag>
						<ProjectInformation.TagContent>
							{project.info?.age}
						</ProjectInformation.TagContent>
					</ProjectInformation.Container>
					<ProjectInformation.Container>
						<ProjectInformation.Tag>Duração</ProjectInformation.Tag>
						<ProjectInformation.TagContent>
							{project.info?.duration}
						</ProjectInformation.TagContent>
					</ProjectInformation.Container>
					<ProjectInformation.Container>
						<ProjectInformation.Tag>Categoria</ProjectInformation.Tag>
						<ProjectInformation.TagContent>
							{project.info?.category}
						</ProjectInformation.TagContent>
					</ProjectInformation.Container>
					<ProjectInformation.Container>
						<ProjectInformation.Tag>Tecnologias</ProjectInformation.Tag>
						<ProjectInformation.TagContent>
							{project.info?.technologies?.join(' • ')}
						</ProjectInformation.TagContent>
					</ProjectInformation.Container>
				</ProjectInformation.Root>

				<img
					{...stylex.props(styles.img)}
					alt={project.name}
					src={project.image}
				/>
			</Section.Root>
		</main>
	)
}
