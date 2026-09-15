import * as stylex from '@stylexjs/stylex'
import type { ComponentProps } from 'react'
import { spacing } from '#/styles/tokens/spacing.stylex'
import { SocialMediaInformation } from '../global/constants/social-media-information'
import { GABRIEL_INFORMATION } from '../global/data/gabriel-information.data'
import { Button } from '../global/ui/Button/components'
import { Effect } from '../global/ui/effects/components'
import { Icon } from '../global/ui/icons/components'
import { Logo } from '../global/ui/logo/components'
import { Section } from '../global/ui/section/components'
import { Cta } from '../sections/cta/components'
import { Footer } from '../sections/footer/components'
import { Header } from '../sections/header/components'
import { HeaderNavigationLinks } from '../sections/header/constants/header-navigation-links'

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
})

type LayoutRootProps = ComponentProps<'div'>

export const LayoutRoot = ({ children }: LayoutRootProps) => {
	return (
		<>
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

				<Effect.RevealOnScroll>
					<Section.Root aria-label='CTA section' id='contact'>
						<Cta.Root>
							<Cta.Container>
								<Cta.Title>Seu próximo projeto começa aqui.</Cta.Title>
								<Cta.Text>Vamos conversar sobre sua ideia.</Cta.Text>
							</Cta.Container>

							<Button.Container>
								<Button.Root
									href={GABRIEL_INFORMATION.urls.socialMedia.whatsApp}
								>
									<Button.Text>WhatsApp</Button.Text>
									<Icon.ArrowRight height='0.5rem' width='0.625rem' />
								</Button.Root>
								<Button.SecondaryRoot
									href={GABRIEL_INFORMATION.urls.socialMedia.email}
								>
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
				</Effect.RevealOnScroll>

				<Footer.Root>
					<Footer.Text>© 2026 GABRIEL S. COUTINHO</Footer.Text>
				</Footer.Root>
			</div>
			<Effect.BottomBlur />
		</>
	)
}
