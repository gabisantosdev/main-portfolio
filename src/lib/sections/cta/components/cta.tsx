import * as stylex from '@stylexjs/stylex'
import type { ComponentProps } from 'react'
import { colors } from '#/styles/tokens/colors.stylex'
import { effects } from '#/styles/tokens/effects.stylex'
import { radius } from '#/styles/tokens/radius.stylex'
import { spacing } from '#/styles/tokens/spacing.stylex'
import { typography } from '#/styles/tokens/typography.stylex'

const styles = stylex.create({
	root: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		gap: spacing[700],
		width: '100%',
	},
	container: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		gap: spacing[400],
	},
	title: {
		fontSize: typography.bodyLg,
		fontWeight: typography.weightMedium,
		color: colors.text400,
	},
	text: {
		fontSize: typography.bodyMd,
		color: colors.text300,
	},
	socialMedia: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		gap: spacing[400],
	},
	socialMediaLink: {
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
			transition: 'opacity 300ms ease-in-out, transform 300ms ease-in-out',
		},
	},
})

interface CtaRootProps extends ComponentProps<'div'> {}

export const CtaRoot = ({ ...restProps }: CtaRootProps) => {
	return <div {...stylex.props(styles.root)} {...restProps} />
}

interface CtaContainerProps extends ComponentProps<'div'> {}

export const CtaContainer = ({ ...restProps }: CtaContainerProps) => {
	return <div {...stylex.props(styles.container)} {...restProps} />
}

interface CtaTitleProps extends ComponentProps<'p'> {}

export const CtaTitle = ({ ...restProps }: CtaTitleProps) => {
	return <p {...stylex.props(styles.title)} {...restProps} />
}

interface CtaTextProps extends ComponentProps<'p'> {}

export const CtaText = ({ ...restProps }: CtaTextProps) => {
	return <p {...stylex.props(styles.text)} {...restProps} />
}

interface CtaSocialMediaProps extends ComponentProps<'ul'> {}

export const CtaSocialMedia = ({ ...restProps }: CtaSocialMediaProps) => {
	return <ul {...stylex.props(styles.socialMedia)} {...restProps} />
}

interface CtaSocialMediaLinkProps extends ComponentProps<'a'> {
	label: string
}

export const CtaSocialMediaLink = ({
	label,
	children,
	...restProps
}: CtaSocialMediaLinkProps) => {
	return (
		<li>
			<a
				{...stylex.props(styles.socialMediaLink)}
				data-label={label}
				rel='noopener noreferrer'
				target='_blank'
				{...restProps}
			>
				{children}
			</a>
		</li>
	)
}
