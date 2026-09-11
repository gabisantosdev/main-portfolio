import * as stylex from '@stylexjs/stylex'
import { Button } from '#/lib/global/ui/Button/components'
import { Section } from '#/lib/global/ui/section/components'
import { colors } from '#/styles/tokens/colors.stylex'
import { spacing } from '#/styles/tokens/spacing.stylex'
import { typography } from '#/styles/tokens/typography.stylex'

const styles = stylex.create({
	box: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		gap: spacing[700],
	},
	content: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		gap: spacing[400],
	},
	number: {
		fontSize: 'clamp(6rem, 3vw, 8rem)',
		fontWeight: typography.weightMedium,
		color: colors.text400,
	},
	text: {
		fontSize: typography.bodyXl,
		fontWeight: typography.weightMedium,
		color: colors.text400,
	},
})

export const NotFound = () => {
	return (
		<main>
			<Section.Root>
				<div {...stylex.props(styles.box)}>
					<div {...stylex.props(styles.content)}>
						<span {...stylex.props(styles.number)}>404</span>
						<p {...stylex.props(styles.text)}>Página não encontrada.</p>
					</div>
					<Button.Root to='/'>
						<Button.Text>Voltar ao início</Button.Text>
					</Button.Root>
				</div>
			</Section.Root>
		</main>
	)
}
