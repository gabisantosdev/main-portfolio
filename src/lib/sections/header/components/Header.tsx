import * as stylex from '@stylexjs/stylex';
import type { ComponentProps } from 'react';
import { colors } from '#/styles/tokens/colors.stylex';
import { effects } from '#/styles/tokens/effects.stylex';
import { radius } from '#/styles/tokens/radius.stylex';
import { spacing } from '#/styles/tokens/spacing.stylex';

const styles = stylex.create({
	root: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		position: 'sticky',
		zIndex: '9999',
		top: '2%',
		padding: spacing[500],
		borderRadius: radius[500],
		backdropFilter: `blur(${effects.blur100})`,
		backgroundColor: colors.backgroundGrey50,
	},
	nav: {
		display: 'flex',
		alignItems: 'center',
		gap: spacing[400],
	},
	navLink: {
		position: 'relative',
		display: 'inline-flex',
		alignItems: 'center',
		justifyContent: 'center',
		padding: spacing[200],
		width: '2rem',
		height: '2rem',
		borderRadius: radius[300],
		boxShadow: effects.shadow100,
		backgroundColor: colors.backgroundLight,
		transition: 'box-shadow 300ms ease-in-out',

		':hover': {
			boxShadow: effects.shadow200,
		},

		':hover::after': {
			opacity: 1,
			transform: 'translate(-50%, 0)',
		},

		'::after': {
			content: 'attr(data-label)',
			position: 'absolute',
			top: 'calc(100% + 0.5rem)',
			left: '50%',

			padding: `${spacing[100]} ${spacing[300]}`,

			borderRadius: radius[300],
			backgroundColor: colors.backgroundLight,
			boxShadow: effects.shadow100,

			whiteSpace: 'nowrap',
			fontSize: '0.75rem',
			lineHeight: 1,
			pointerEvents: 'none',

			opacity: 0,
			transform: 'translate(-50%, -0.25rem)',
			transition: 'opacity 150ms ease, transform 150ms ease',
		},
	},
});

interface HeaderRootProps extends ComponentProps<'header'> {}

export const HeaderRoot = ({ ...restProps }: HeaderRootProps) => {
	return <header {...stylex.props(styles.root)} {...restProps} />;
};

interface HeaderNavProps extends ComponentProps<'ul'> {}

export const HeaderNav = ({ children, ...restProps }: HeaderNavProps) => {
	return (
		<nav>
			<ul {...stylex.props(styles.nav)} {...restProps}>
				{children}
			</ul>
		</nav>
	);
};

interface HeaderNavLinkProps extends ComponentProps<'a'> {
	label: string;
}

export const HeaderNavLink = ({
	label,
	children,
	...restProps
}: HeaderNavLinkProps) => {
	return (
		<li>
			<a {...stylex.props(styles.navLink)} data-label={label} {...restProps}>
				{children}
			</a>
		</li>
	);
};
