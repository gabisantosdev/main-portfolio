import * as stylex from '@stylexjs/stylex'
import { Link, type LinkProps } from '@tanstack/react-router'
import type { ComponentProps } from 'react'
import { borders } from '#/styles/tokens/borders.stylex'
import { colors } from '#/styles/tokens/colors.stylex'
import { effects } from '#/styles/tokens/effects.stylex'
import { radius } from '#/styles/tokens/radius.stylex'
import { spacing } from '#/styles/tokens/spacing.stylex'
import { typography } from '#/styles/tokens/typography.stylex'

const styles = stylex.create({
	container: {
		width: '100%',
	},

	card: {
		position: 'relative',
		width: '100%',
		overflow: 'hidden',
		borderWidth: borders.width,
		borderStyle: borders.style,
		borderColor: borders.light,
		borderRadius: radius[500],
	},

	image: {
		display: 'block',
		width: '100%',
		height: 'auto',
		transform: 'scale(1)',
		transition: 'transform 300ms ease-in-out',

		':hover': {
			transform: 'scale(1.06)',
		},

		'@media (prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},

	overlay: {
		position: 'absolute',
		right: 0,
		bottom: 0,
		left: 0,
		zIndex: 1,

		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',

		padding: `${spacing[500]} ${spacing[500]}`,
		margin: spacing[100],
		borderRadius: radius[400],

		backgroundColor: 'rgb(7 24 49 / 50%)',
		backdropFilter: effects.blur100,
		WebkitBackdropFilter: effects.blur100,
	},
	title: {
		fontSize: typography.bodyXl,
		fontWeight: typography.weightRegular,
		color: colors.textWhite,
	},
})

interface ProjectCardContainerProps extends LinkProps {}

export const ProjectCardContainer = ({
	...restProps
}: ProjectCardContainerProps) => {
	return <Link {...stylex.props(styles.container)} {...restProps} />
}

interface ProjectCardRootProps extends ComponentProps<'article'> {}

export const ProjectCardRoot = ({ ...restProps }: ProjectCardRootProps) => {
	return <article {...stylex.props(styles.card)} {...restProps} />
}

interface ProjectCardImageProps extends ComponentProps<'img'> {}

export const ProjectCardImage = ({ ...restProps }: ProjectCardImageProps) => {
	return <img {...stylex.props(styles.image)} {...restProps} />
}

interface ProjectCardOverlayProps extends ComponentProps<'div'> {}

export const ProjectCardOverlay = ({
	...restProps
}: ProjectCardOverlayProps) => {
	return <div {...stylex.props(styles.overlay)} {...restProps} />
}

interface ProjectCardTitleProps extends ComponentProps<'h3'> {}

export const ProjectCardTitle = ({ ...restProps }: ProjectCardTitleProps) => {
	return <h3 {...stylex.props(styles.title)} {...restProps} />
}
