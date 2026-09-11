import * as stylex from '@stylexjs/stylex'
import { createRootRoute, HeadContent, Scripts } from '@tanstack/react-router'
import { SocialMediaInformation } from '#/lib/global/constants/social-media-information'
import { Button } from '#/lib/global/ui/Button/components'
import { Icon } from '#/lib/global/ui/icons/components'
import { Logo } from '#/lib/global/ui/logo/components'
import { Section } from '#/lib/global/ui/section/components'
import { Cta } from '#/lib/sections/cta/components'
import { Footer } from '#/lib/sections/footer/components'
import { Header } from '#/lib/sections/header/components'
import { HeaderNavigationLinks } from '#/lib/sections/header/constants/header-navigation-links'
import { colors } from '#/styles/tokens/colors.stylex'
import { spacing } from '#/styles/tokens/spacing.stylex'
import { typography } from '#/styles/tokens/typography.stylex'
import globalCss from '../styles/global.css?url'
import '../styles/stylex.css'

const styles = stylex.create({
	container: {
		display: 'flex',
		flexDirection: 'column',
		gap: spacing[700],
		maxWidth: '720px',
		width: '100%',
		minHeight: '100dvh',
		padding: spacing[500],
		margin: 'auto',
	},
	box: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		gap: spacing[700],
	},
	content: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		gap: spacing[400],
	},
	number: {
		fontSize: 'clamp(6rem, 3vw, 8rem)',
		fontWeight: typography.weightMedium,
		color: colors.text400,
	},
	text: {
		fontSize: typography.bodyXl,
		fontWeight: typography.weightMedium,
		color: colors.text400,
	},
})

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{
				charSet: 'utf-8',
			},
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1',
			},
			{
				title: 'Gabriel Coutinho | Especialista em sites',
			},
			{ name: 'description', content: 'Especialista em criação de sites' },
		],
		links: [{ rel: 'stylesheet', href: globalCss }],
	}),
	shellComponent: RootDocument,
	notFoundComponent: NotFound,
})

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<html lang='pt-BR' suppressHydrationWarning>
			<head>
				<HeadContent />
			</head>
			<body>
				<div {...stylex.props(styles.container)}>
					<Header.Root>
						<Logo.Main>GABRIEL S. COUTINHO</Logo.Main>
						<Header.Navigation>
							{HeaderNavigationLinks.map((navigation) => {
								const IconNavigation = Icon[navigation.iconName]

								return (
									<Header.NavigationLink
										aria-label={navigation.label}
										hash={navigation.hash}
										key={navigation.link}
										label={navigation.label}
										to={navigation.link}
									>
										<IconNavigation height='1.125rem' width='1.125rem' />
									</Header.NavigationLink>
								)
							})}
						</Header.Navigation>
					</Header.Root>

					{children}

					<Section.Root aria-label='CTA section' id='contact'>
						<Cta.Root>
							<Cta.Container>
								<Cta.Title>Seu próximo projeto começa aqui.</Cta.Title>
								<Cta.Text>Vamos conversar sobre sua ideia.</Cta.Text>
							</Cta.Container>

							<Button.Container>
								<Button.Root href='/'>
									<Button.Text>WhatsApp</Button.Text>
									<Icon.ArrowRight height='0.5rem' width='0.625rem' />
								</Button.Root>
								<Button.SecondaryRoot href='/'>
									<Button.Text>E-mail</Button.Text>
									<Icon.ArrowRight height='0.5rem' width='0.625rem' />
								</Button.SecondaryRoot>
							</Button.Container>

							<Cta.Container>
								<Cta.Text>Redes Sociais</Cta.Text>
								<Cta.SocialMediaList>
									{SocialMediaInformation.map((socialMedia) => {
										const IconNavigation = Icon[socialMedia.iconName]

										return (
											<Cta.SocialMediaLink
												href={socialMedia.url}
												key={socialMedia.label}
												label={socialMedia.label}
											>
												<IconNavigation height='1.125rem' width='1.125rem' />
											</Cta.SocialMediaLink>
										)
									})}
								</Cta.SocialMediaList>
							</Cta.Container>
						</Cta.Root>
					</Section.Root>

					<Footer.Root>
						<Footer.Text>© 2026 GABRIEL S. COUTINHO</Footer.Text>
					</Footer.Root>
				</div>
				<Scripts />
			</body>
		</html>
	)
}

function NotFound() {
	return (
		<main>
			<Section.Root>
				<div {...stylex.props(styles.box)}>
					<div {...stylex.props(styles.content)}>
						<span {...stylex.props(styles.number)}>404</span>
						<p {...stylex.props(styles.text)}>Página não encontrada.</p>
					</div>
					<Button.Root to='/'>
						<Button.Text>Voltar ao início</Button.Text>
					</Button.Root>
				</div>
			</Section.Root>
		</main>
	)
}
