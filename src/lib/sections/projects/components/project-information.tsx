import * as stylex from '@stylexjs/stylex'
import type { ComponentProps } from 'react'
import { colors } from '#/styles/tokens/colors.stylex'
import { spacing } from '#/styles/tokens/spacing.stylex'
import { typography } from '#/styles/tokens/typography.stylex'

const styles = stylex.create({
	root: {
		display: 'flex',
		flexDirection: 'column',
		gap: spacing[400],
	},
	container: {
		display: 'flex',
		flexDirection: 'column',
		gap: spacing[200],
	},
	tag: {
		fontSize: typography.bodyMd,
		color: colors.text100,
	},
	tagContent: {
		fontSize: typography.bodyLg,
		fontWeight: typography.weightMedium,
		lineHeight: '120%',
		color: colors.text400,
	},
})

interface ProjectInformationRootProps extends ComponentProps<'div'> {}

export const ProjectInformationRoot = ({
	...restProps
}: ProjectInformationRootProps) => {
	return <div {...stylex.props(styles.root)} {...restProps} />
}

interface ProjectInformationContainerProps extends ComponentProps<'div'> {}

export const ProjectInformationContainer = ({
	...restProps
}: ProjectInformationContainerProps) => {
	return <div {...stylex.props(styles.container)} {...restProps} />
}

interface ProjectInformationTagProps extends ComponentProps<'p'> {}

export const ProjectInformationTag = ({
	...restProps
}: ProjectInformationTagProps) => {
	return <p {...stylex.props(styles.tag)} {...restProps} />
}

interface ProjectInformationTagContentProps extends ComponentProps<'p'> {}

export const ProjectInformationTagContent = ({
	...restProps
}: ProjectInformationTagContentProps) => {
	return <p {...stylex.props(styles.tagContent)} {...restProps} />
}
