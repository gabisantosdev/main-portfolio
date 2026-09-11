import * as stylex from '@stylexjs/stylex'
import type { ComponentProps } from 'react'
import { borders } from '#/styles/tokens/borders.stylex'
import { colors } from '#/styles/tokens/colors.stylex'
import { radius } from '#/styles/tokens/radius.stylex'
import { spacing } from '#/styles/tokens/spacing.stylex'
import { typography } from '#/styles/tokens/typography.stylex'

const styles = stylex.create({
	container: {
		display: 'flex',
		flexDirection: 'column',
		gap: spacing[400],
		width: '100%',
	},
	card: {
		display: 'flex',
		alignItems: 'center',
		gap: spacing[200],
		padding: spacing[200],
		borderWidth: borders.width,
		borderStyle: borders.style,
		borderColor: borders.light,
		borderRadius: radius[300],
	},
	number: {
		fontSize: typography.bodySm,
		color: colors.text300,
	},
	info: {
		display: 'flex',
		flexDirection: 'column',
		gap: spacing[300],
	},
	title: {
		fontSize: typography.headingSm,
		fontWeight: typography.weightRegular,
		color: colors.text400,
	},
	description: {
		fontSize: typography.headingSm,
		color: colors.text100,
	},
})

interface ServicesContainerProps extends ComponentProps<'div'> {}

export const ServicesContainer = ({ ...restProps }: ServicesContainerProps) => {
	return <div {...stylex.props(styles.container)} {...restProps} />
}

interface ServiceCardProps extends ComponentProps<'div'> {}

export const ServiceCard = ({ ...restProps }: ServiceCardProps) => {
	return <div {...stylex.props(styles.card)} {...restProps} />
}

interface ServiceCardNumberProps extends ComponentProps<'span'> {}

export const ServiceCardNumber = ({ ...restProps }: ServiceCardNumberProps) => {
	return <span {...stylex.props(styles.number)} {...restProps} />
}

interface ServiceCardInfoProps extends ComponentProps<'div'> {}

export const ServiceCardInfo = ({ ...restProps }: ServiceCardInfoProps) => {
	return <div {...stylex.props(styles.info)} {...restProps} />
}

interface ServiceCardTitleProps extends ComponentProps<'h3'> {}

export const ServiceCardTitle = ({ ...restProps }: ServiceCardTitleProps) => {
	return <h3 {...stylex.props(styles.title)} {...restProps} />
}

interface ServiceCardDescriptionProps extends ComponentProps<'p'> {}

export const ServiceCardDescription = ({
	...restProps
}: ServiceCardDescriptionProps) => {
	return <p {...stylex.props(styles.description)} {...restProps} />
}
