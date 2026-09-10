import * as stylex from '@stylexjs/stylex';
import { palette } from './palette.stylex';

export const colors = stylex.defineVars({
	backgroundLight: palette.white,
	backgroundMid: palette.navy300,
	backgroundDark: palette.navy400,
	backgroundGrey: palette.grey,
	backgroundGrey50: palette.grey50,

	borderLight: palette.grey,
	borderMid: palette.navy300,
	borderDark: palette.navy400,

	textWhite: palette.white,
	textGrey: palette.grey,
	textGrey50: palette.grey50,
	text100: palette.navy100,
	text200: palette.navy200,
	text300: palette.navy300,
	text400: palette.navy400,
});
