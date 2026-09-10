import * as stylex from '@stylexjs/stylex';
import { createRootRoute, HeadContent, Scripts } from '@tanstack/react-router';
import { Icon } from '#/lib/global/ui/icons/components';
import { Logo } from '#/lib/global/ui/logo/components';
import { Footer } from '#/lib/sections/footer/components';
import { Header } from '#/lib/sections/header/components';
import { HeaderNavigationLinks } from '#/lib/sections/header/constants/header-navigation-links';
import { spacing } from '#/styles/tokens/spacing.stylex';
import globalCss from '../styles/global.css?url';
import '../styles/stylex.css';

const styles = stylex.create({
	container: {
		display: 'flex',
		flexDirection: 'column',
		gap: spacing[700],
		maxWidth: '720px',
		width: '100%',
		minHeight: '100dvh',
		padding: '0 20px',
		margin: 'auto',
	},
});

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
});

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
								const IconNavigation = Icon[navigation.iconName];

								return (
									<Header.NavigationLink
										aria-label={navigation.label}
										href={navigation.link}
										key={navigation.link}
										label={navigation.label}
									>
										<IconNavigation height='1.125rem' width='1.125rem' />
									</Header.NavigationLink>
								);
							})}
						</Header.Navigation>
					</Header.Root>

					{children}

					<Footer.Root>
						<Footer.Text>© 2026 GABRIEL S. COUTINHO</Footer.Text>
					</Footer.Root>
				</div>
				<Scripts />
			</body>
		</html>
	);
}
