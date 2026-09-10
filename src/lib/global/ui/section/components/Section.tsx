import * as stylex from '@stylexjs/stylex';
import type { ComponentProps } from 'react';
import { borders } from '#/styles/tokens/borders.stylex';
import { colors } from '#/styles/tokens/colors.stylex';
import { radius } from '#/styles/tokens/radius.stylex';
import { spacing } from '#/styles/tokens/spacing.stylex';
import { typography } from '#/styles/tokens/typography.stylex';

const styles = stylex.create({
	root: {
		display: 'flex',
		flexDirection: 'column',
		gap: spacing[700],
		padding: spacing[500],
		marginBottom: spacing[700],
		borderWidth: borders.width,
		borderStyle: borders.style,
		borderColor: borders.light,
		borderRadius: radius[500],
	},
	secondary: {
		display: 'flex',
		flexDirection: 'column',
		gap: spacing[700],
		padding: spacing[500],
		marginBottom: spacing[700],
	},
	container: {
		display: 'flex',
		flexDirection: 'column',
		gap: spacing[700],
	},
	info: {
		display: 'flex',
		flexDirection: 'column',
		gap: spacing[400],
	},
	titleH1: {
		fontSize: typography.headingXl,
		fontWeight: typography.weightMedium,
		color: colors.text400,
	},
	titleH2: {
		fontSize: typography.headingMd,
		fontWeight: typography.weightMedium,
		color: colors.text400,
	},
	titleH3: {
		fontSize: typography.headingSm,
		color: colors.text400,
	},
	subtitle: {
		fontSize: typography.bodySm,
		marginTop: `${spacing[200]} !important`,
		color: colors.text300,
	},
	description: {
		fontSize: typography.bodyMd,
		lineHeight: '135%',
		color: colors.text300,
	},
});

interface SectionRootProps extends ComponentProps<'section'> {}

export const SectionRoot = ({ ...restProps }: SectionRootProps) => {
	return <section {...stylex.props(styles.root)} {...restProps} />;
};

interface SectionSecondaryProps extends ComponentProps<'section'> {}

export const SectionSecondary = ({ ...restProps }: SectionSecondaryProps) => {
	return <section {...stylex.props(styles.secondary)} {...restProps} />;
};

interface SectionContainerProps extends ComponentProps<'div'> {}

export const SectionContainer = ({ ...restProps }: SectionContainerProps) => {
	return <div {...stylex.props(styles.container)} {...restProps} />;
};

interface SectionInfoProps extends ComponentProps<'div'> {}

export const SectionInfo = ({ ...restProps }: SectionInfoProps) => {
	return <div {...stylex.props(styles.info)} {...restProps} />;
};

interface SectionTitleH1Props extends ComponentProps<'h1'> {}

export const SectionTitleH1 = ({ ...restProps }: SectionTitleH1Props) => {
	return <h1 {...stylex.props(styles.titleH1)} {...restProps} />;
};

interface SectionTitleH2Props extends ComponentProps<'h2'> {}

export const SectionTitleH2 = ({ ...restProps }: SectionTitleH2Props) => {
	return <h2 {...stylex.props(styles.titleH2)} {...restProps} />;
};

interface SectionTitleH3Props extends ComponentProps<'h3'> {}

export const SectionTitleH3 = ({ ...restProps }: SectionTitleH3Props) => {
	return <h3 {...stylex.props(styles.titleH3)} {...restProps} />;
};

interface SectionSubtitleProps extends ComponentProps<'p'> {}

export const SectionSubtitle = ({ ...restProps }: SectionSubtitleProps) => {
	return <p {...stylex.props(styles.subtitle)} {...restProps} />;
};

interface SectionDescriptionProps extends ComponentProps<'p'> {}

export const SectionDescription = ({
	...restProps
}: SectionDescriptionProps) => {
	return <p {...stylex.props(styles.description)} {...restProps} />;
};
