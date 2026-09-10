import * as stylex from '@stylexjs/stylex';
import type { ComponentProps } from 'react';

import { colors } from '#/styles/tokens/colors.stylex';
import { spacing } from '#/styles/tokens/spacing.stylex';

const textLoop = stylex.keyframes({
	from: {
		transform: 'translate3d(0, 0, 0)',
	},
	to: {
		transform: 'translate3d(-50%, 0, 0)',
	},
});

const styles = stylex.create({
	root: {
		width: '100%',
		overflow: 'hidden',
		whiteSpace: 'nowrap',
		maskImage:
			'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
		WebkitMaskImage:
			'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
	},

	track: {
		display: 'flex',
		width: 'max-content',
		animationName: textLoop,
		animationDuration: '10s',
		animationTimingFunction: 'linear',
		animationIterationCount: 'infinite',

		'@media (prefers-reduced-motion: reduce)': {
			animationPlayState: 'paused',
		},
	},

	item: {
		flexShrink: 0,
		paddingRight: spacing[100],
		color: colors.text100,
	},
});

interface TextLoopProps extends ComponentProps<'div'> {}

export function TextLoop({ children, ...restProps }: TextLoopProps) {
	return (
		<div {...stylex.props(styles.root)} {...restProps}>
			<div {...stylex.props(styles.track)}>
				<div {...stylex.props(styles.item)}>{children}</div>

				<div {...stylex.props(styles.item)} aria-hidden='true'>
					{children}
				</div>
			</div>
		</div>
	);
}
