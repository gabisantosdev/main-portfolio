import * as stylex from '@stylexjs/stylex';

import { colors } from './colors.stylex';

export const borders = stylex.defineVars({
	width: '2px',
	style: 'solid',
	light: colors.borderLight,
	mid: colors.borderMid,
	dark: colors.borderDark,
});
