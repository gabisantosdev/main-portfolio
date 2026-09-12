import * as stylex from '@stylexjs/stylex'
import { useEffect, useState } from 'react'

import avatarImage from '#/assets/images/gabriel_perfil.webp'
import { GABRIEL_INFORMATION } from '#/lib/global/data/gabriel-information.data'
import { colors } from '#/styles/tokens/colors.stylex'
import { radius } from '#/styles/tokens/radius.stylex'
import { spacing } from '#/styles/tokens/spacing.stylex'
import { typography } from '#/styles/tokens/typography.stylex'

const fade = stylex.keyframes({
	from: {
		opacity: 0,
	},
	to: {
		opacity: 1,
	},
})

const styles = stylex.create({
	container: {
		display: 'flex',
		alignItems: 'center',
		gap: spacing[400],
	},
	avatar: {
		flexShrink: 0,
		width: 'clamp(4.375rem, 3vw, 5.625rem)',
		height: 'clamp(4.375rem, 3vw, 5.625rem)',
		borderRadius: radius[500],
		backgroundColor: colors.backgroundMid,
		overflow: 'hidden',
	},
	avatarImage: {
		display: 'block',
		width: '100%',
		height: '100%',
		objectFit: 'cover',
	},
	content: {
		display: 'flex',
		flexDirection: 'column',
		gap: spacing[200],
	},
	name: {
		margin: 0,
		fontSize: typography.bodyLg,
		lineHeight: 1,
		color: colors.text300,
	},
	descriptionWrapper: {
		position: 'relative',
		width: 'max-content',
		height: '1.25rem',
	},
	descriptionMeasure: {
		display: 'block',
		width: 'max-content',
		visibility: 'hidden',
		whiteSpace: 'nowrap',
		fontSize: typography.bodySm,
		lineHeight: '1.25rem',
	},
	description: {
		position: 'absolute',
		top: 0,
		left: 0,
		margin: 0,
		width: 'max-content',
		whiteSpace: 'nowrap',
		fontSize: typography.bodySm,
		lineHeight: '1.25rem',
		color: colors.text100,

		animationName: fade,
		animationDuration: {
			default: '400ms',
			'@media (prefers-reduced-motion: reduce)': '1ms',
		},
		animationTimingFunction: 'ease',
		animationFillMode: 'both',
	},
})

const descriptions = [
	'Desenvolvedor Full-Stack',
	'Web Designer',
	'Product Designer',
]

export function HeroBio() {
	const [currentDescription, setCurrentDescription] = useState(0)

	useEffect(() => {
		const interval = window.setInterval(() => {
			setCurrentDescription((current) => {
				return (current + 1) % descriptions.length
			})
		}, 1500)

		return () => {
			window.clearInterval(interval)
		}
	}, [])

	return (
		<div {...stylex.props(styles.container)}>
			<div {...stylex.props(styles.avatar)}>
				<img
					{...stylex.props(styles.avatarImage)}
					alt='Gabriel Coutinho avatar'
					src={avatarImage}
				/>
			</div>

			<div {...stylex.props(styles.content)}>
				<p {...stylex.props(styles.name)}>{GABRIEL_INFORMATION.name}</p>

				<div {...stylex.props(styles.descriptionWrapper)}>
					<span {...stylex.props(styles.descriptionMeasure)}>
						Criador de experiências digitais
					</span>

					<p key={currentDescription} {...stylex.props(styles.description)}>
						{descriptions[currentDescription]}
					</p>
				</div>
			</div>
		</div>
	)
}
