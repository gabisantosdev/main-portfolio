import * as stylex from '@stylexjs/stylex'
import type { ComponentProps } from 'react'
import { GABRIEL_INFORMATION } from '#/lib/global/data/gabriel-information.data'
import { Icon } from '#/lib/global/ui/icons/components'
import { borders } from '#/styles/tokens/borders.stylex'
import { colors } from '#/styles/tokens/colors.stylex'
import { palette } from '#/styles/tokens/palette.stylex'
import { spacing } from '#/styles/tokens/spacing.stylex'
import { typography } from '#/styles/tokens/typography.stylex'

const styles = stylex.create({
	container: {
		display: 'flex',
		flexDirection: 'column',
		gap: spacing[400],
	},

	link: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingRight: spacing[200],
		borderBottomWidth: borders.width,
		borderBottomStyle: borders.style,
		borderBottomColor: borders.light,
		color: colors.text100,
		fontSize: typography.bodyMd,
		transition:
			'padding-right 300ms ease-in-out, border-bottom-color 300ms ease-in-out',
		':hover': {
			paddingRight: 0,
			borderBottomColor: palette.navy200,
		},
	},

	content: {
		display: 'flex',
		alignItems: 'center',
		gap: spacing[100],
	},

	text: {
		padding: `${spacing[200]} 0`,
		color: colors.text400,
		letterSpacing: typography.tracking200,
	},

	icon: {
		width: '0.875rem',
		height: '0.875rem',
		flexShrink: 0,
		color: colors.text100,
	},
})

interface AboutLinksProps extends ComponentProps<'div'> {}

export function AboutLinks({ ...restProps }: AboutLinksProps) {
	return (
		<div {...stylex.props(styles.container)} {...restProps}>
			<a
				{...stylex.props(styles.link)}
				href={GABRIEL_INFORMATION.urls.curriculum}
				rel='noopener noreferrer'
				target='_blank'
			>
				<div {...stylex.props(styles.content)}>
					<Icon.Curriculo {...stylex.props(styles.icon)} />
					<span>|</span>
					<span {...stylex.props(styles.text)}>Ver currículo</span>
				</div>

				<Icon.ArrowRight {...stylex.props(styles.icon)} />
			</a>
		</div>
	)
}
