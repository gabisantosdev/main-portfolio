import { GABRIEL_INFORMATION } from '#/lib/global/data/gabriel-information.data'
import { Button } from '#/lib/global/ui/Button/components'
import { ButtonSecondaryRoot } from '#/lib/global/ui/Button/components/Button'
import { Effect } from '#/lib/global/ui/effects/components'
import { Icon } from '#/lib/global/ui/icons/components'
import { Section } from '#/lib/global/ui/section/components'
import { About } from '#/lib/sections/about/components'
import { Hero } from '#/lib/sections/hero/components'
import { ProjectCard } from '#/lib/sections/projects/components'
import { Projects } from '#/lib/sections/projects/data/projects.data'
import { Services } from '#/lib/sections/services/components'
import { CardInfos } from '#/lib/sections/services/constants/card-infos'

export const Home = () => {
	return (
		<main>
			<Effect.RevealOnScroll>
				<Section.Root aria-label='Hero section'>
					<Hero.Bio />
					<Section.Container>
						<Section.Info>
							<Section.TitleH1>
								Crio websites premium, feitos para destacar sua marca.
							</Section.TitleH1>
							<Section.Description>
								Design e desenvolvimento sob medida, combinando estética,
								funcionalidade e performance.
							</Section.Description>
						</Section.Info>
						<Button.Container>
							<Button.Root href={GABRIEL_INFORMATION.urls.socialMedia.whatsApp}>
								<Button.Text>Vamos conversar</Button.Text>
								<Icon.ArrowRight height='0.5rem' width='0.625rem' />
							</Button.Root>
							<Button.SecondaryRoot to='/projects'>
								<Button.Text>Ver projetos</Button.Text>
							</Button.SecondaryRoot>
						</Button.Container>
						<Effect.TextLoop>
							Product Design ✦ UX/UI ✦ Web Design ✦ Desenvolvimento Web ✦
						</Effect.TextLoop>
					</Section.Container>
				</Section.Root>
			</Effect.RevealOnScroll>

			<Effect.RevealOnScroll>
				<Section.Root aria-label='About me section'>
					<Section.TitleH2>Sobre mim</Section.TitleH2>
					<Section.Description>
						Sou Gabriel Santos Coutinho — desenvolvedor web e web designer,
						transformando ideias em experiências digitais refinadas, funcionais
						e bem construídas.
					</Section.Description>
					<About.Links />
				</Section.Root>
			</Effect.RevealOnScroll>

			<Effect.RevealOnScroll>
				<Section.Root aria-label='Services section'>
					<div>
						<Section.TitleH2>Serviços</Section.TitleH2>
						<Section.Subtitle>Do conceito ao produto final.</Section.Subtitle>
					</div>
					<Services.Container>
						{CardInfos.map((card) => (
							<Services.Card key={card.id}>
								<Services.CardNumber>{card.id}</Services.CardNumber>
								<Services.CardInfo>
									<Services.CardTitle>{card.title}</Services.CardTitle>
									<Services.CardDescription>
										{card.description}
									</Services.CardDescription>
								</Services.CardInfo>
							</Services.Card>
						))}
					</Services.Container>
				</Section.Root>
			</Effect.RevealOnScroll>

			<Effect.RevealOnScroll>
				<Section.RootSecondary aria-label='Projects section'>
					<Section.TitleContainer>
						<Section.TitleH2>Projetos</Section.TitleH2>
						<Section.Subtitle>Trabalhos selecionados</Section.Subtitle>
					</Section.TitleContainer>

					{Projects.slice(0, 2).map((project) => (
						<Effect.RevealOnScroll key={project.id}>
							<ProjectCard.Container
								params={{ slugs: `${project.slug}-${project.id}` }}
								to='/projects/$slugs'
							>
								<ProjectCard.CardRoot>
									<ProjectCard.CardImage
										alt={project.name}
										loading='lazy'
										src={project.image}
									/>
									<ProjectCard.CardOverlay>
										<ProjectCard.CardTitle>
											{project.name}
										</ProjectCard.CardTitle>
									</ProjectCard.CardOverlay>
								</ProjectCard.CardRoot>
							</ProjectCard.Container>
						</Effect.RevealOnScroll>
					))}

					<ButtonSecondaryRoot to='/projects'>
						<Button.Text>Ver todos os projetos</Button.Text>
						<Icon.ArrowRight height='0.5rem' width='0.625rem' />
					</ButtonSecondaryRoot>
				</Section.RootSecondary>
			</Effect.RevealOnScroll>
		</main>
	)
}
