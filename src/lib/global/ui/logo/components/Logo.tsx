import * as stylex from '@stylexjs/stylex'
import type { ComponentProps } from 'react'
import { colors } from '#/styles/tokens/colors.stylex'
import { typography } from '#/styles/tokens/typography.stylex'

const styles = stylex.create({
	main: {
		fontSize: typography.bodySm,
		letterSpacing: typography.tracking400,
		userSelect: 'none',
		color: colors.text400,
	},
})

interface LogoMainProps extends ComponentProps<'div'> {}

export const LogoMain = ({ ...restProps }: LogoMainProps) => {
	return <div {...stylex.props(styles.main)} {...restProps} />
}
