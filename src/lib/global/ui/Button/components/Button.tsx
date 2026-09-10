import * as stylex from '@stylexjs/stylex';
import type { ComponentProps } from 'react';
import { borders } from '#/styles/tokens/borders.stylex';
import { colors } from '#/styles/tokens/colors.stylex';
import { effects } from '#/styles/tokens/effects.stylex';
import { radius } from '#/styles/tokens/radius.stylex';
import { spacing } from '#/styles/tokens/spacing.stylex';
import { typography } from '#/styles/tokens/typography.stylex';

const styles = stylex.create({
	base: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		gap: spacing[200],
		padding: `${spacing[400]} ${spacing[700]}`,
		borderRadius: radius[500],
		boxShadow: effects.shadow100,
		transition: 'box-shadow 300ms ease-in-out',
		':hover': {
			boxShadow: effects.shadow200,
		},
	},
	root: {
		borderWidth: borders.width,
		borderStyle: borders.style,
		borderColor: borders.dark,
		color: `${colors.textWhite} !important`,
		backgroundColor: colors.backgroundMid,
	},
	secondary: {
		borderWidth: borders.width,
		borderStyle: borders.style,
		borderColor: borders.light,
		color: `${colors.text400} !important`,
		backgroundColor: colors.backgroundLight,
	},
	container: {
		display: 'flex',
		flexDirection: {
			default: 'column',
			'@media (min-width: 500px)': 'row',
		},
		gap: spacing[400],
	},
	text: {
		fontSize: typography.bodyMd,
	},
});

interface ButtonRootProps extends ComponentProps<'a'> {}

export const ButtonRoot = ({ ...restProps }: ButtonRootProps) => {
	return <a {...stylex.props(styles.base, styles.root)} {...restProps} />;
};

interface ButtonSecondaryRootProps extends ComponentProps<'a'> {}

export const ButtonSecondaryRoot = ({
	...restProps
}: ButtonSecondaryRootProps) => {
	return <a {...stylex.props(styles.base, styles.secondary)} {...restProps} />;
};

interface ButtonContainerProps extends ComponentProps<'div'> {}

export const ButtonContainer = ({ ...restProps }: ButtonContainerProps) => {
	return <div {...stylex.props(styles.container)} {...restProps} />;
};

interface ButtonTextProps extends ComponentProps<'span'> {}

export const ButtonText = ({ ...restProps }: ButtonTextProps) => {
	return <span {...stylex.props(styles.text)} {...restProps} />;
};
