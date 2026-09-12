import { GABRIEL_INFORMATION } from '#/lib/global/data/gabriel-information.data'
import { Button } from '#/lib/global/ui/Button/components'
import { Icon } from '#/lib/global/ui/icons/components'
import { Section } from '#/lib/global/ui/section/components'
import {
	ProjectCard,
	ProjectInformation,
} from '#/lib/sections/projects/components'
import { Route } from '#/routes/projects/$slugs'

export const ProjectPage = () => {
	const { project, otherProjects } = Route.useLoaderData()

	return (
		<main>
			<Section.Root aria-label='Project information section'>
				<Button.Simple to='..'>
					<Icon.ArrowLeft height='0.5rem' width='0.625rem' />
					<span>Voltar para projetos</span>
				</Button.Simple>

				<Section.TitleH1>{project.name}</Section.TitleH1>
				<Section.Description>{project.info?.description}</Section.Description>

				<Button.Container>
					<Button.Root href={project.url}>
						<Button.Text>Visitar website</Button.Text>
						<Icon.ArrowRight height='0.5rem' width='0.625rem' />
					</Button.Root>
					<Button.SecondaryRoot
						href={GABRIEL_INFORMATION.urls.socialMedia.whatsApp}
					>
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

				<Section.Image alt={project.name} src={project.image} />
			</Section.Root>

			<Section.RootSecondary aria-label='Other projects section'>
				<Section.TitleContainer>
					<Section.TitleH2>Outros projetos</Section.TitleH2>
				</Section.TitleContainer>

				{otherProjects.slice(0, 2).map((otherProject) => (
					<ProjectCard.Container
						key={otherProject.id}
						params={{ slugs: `${otherProject.slug}-${otherProject.id}` }}
						to='/projects/$slugs'
					>
						<ProjectCard.CardRoot>
							<ProjectCard.CardImage
								alt={otherProject.name}
								src={otherProject.image}
							/>
							<ProjectCard.CardOverlay>
								<ProjectCard.CardTitle>
									{otherProject.name}
								</ProjectCard.CardTitle>
							</ProjectCard.CardOverlay>
						</ProjectCard.CardRoot>
					</ProjectCard.Container>
				))}
			</Section.RootSecondary>
		</main>
	)
}
