import * as stylex from '@stylexjs/stylex'
import type { ComponentProps } from 'react'
import { colors } from '#/styles/tokens/colors.stylex'
import { typography } from '#/styles/tokens/typography.stylex'

const styles = stylex.create({
	root: {
		display: 'flex',
		justifyContent: 'center',
	},
	text: {
		fontSize: typography.bodySm,
		color: colors.text100,
	},
})

interface FooterRootProps extends ComponentProps<'footer'> {}

export const FooterRoot = ({ ...restProps }: FooterRootProps) => {
	return <footer {...stylex.props(styles.root)} {...restProps} />
}

interface FooterTextProps extends ComponentProps<'p'> {}

export const FooterText = ({ ...restProps }: FooterTextProps) => {
	return <p {...stylex.props(styles.text)} {...restProps} />
}
