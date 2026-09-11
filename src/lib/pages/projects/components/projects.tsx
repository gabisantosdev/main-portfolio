import { Section } from '#/lib/global/ui/section/components'
import { ProjectCard } from '#/lib/sections/projects/components'
import { Projects } from '#/lib/sections/projects/data/projects.data'

export const ProjectsPage = () => {
	return (
		<main>
			<Section.RootSecondary aria-label='Projects section'>
				<Section.TitleContainer>
					<Section.TitleH1>Projetos</Section.TitleH1>
				</Section.TitleContainer>

				{Projects.map((project) => (
					<ProjectCard.Container
						key={project.id}
						params={{ slugs: `${project.slug}-${project.id}` }}
						to='/projects/$slugs'
					>
						<ProjectCard.CardRoot>
							<ProjectCard.CardImage alt={project.name} src={project.image} />
							<ProjectCard.CardOverlay>
								<ProjectCard.CardTitle>{project.name}</ProjectCard.CardTitle>
							</ProjectCard.CardOverlay>
						</ProjectCard.CardRoot>
					</ProjectCard.Container>
				))}
			</Section.RootSecondary>
		</main>
	)
}
