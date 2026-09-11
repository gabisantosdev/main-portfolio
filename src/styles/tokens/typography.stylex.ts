import * as stylex from '@stylexjs/stylex'

export const typography = stylex.defineVars({
	fontBody: 'Inter, sans-serif',

	weightRegular: '400',
	weightMedium: '500',

	bodySm: 'clamp(0.75rem, 3vw, 0.875rem)',
	bodyMd: 'clamp(0.875rem, 3vw, 1rem)',
	bodyLg: 'clamp(1rem, 3vw, 1.125rem)',

	headingSm: 'clamp(0.75rem, 3vw, 0.875rem)',
	headingMd: 'clamp(0.875rem, 3vw, 1rem)',
	headingLg: 'clamp(1rem, 3vw, 1.25rem)',
	headingXl: 'clamp(1.5rem, 4vw, 2rem)',

	tracking100: '-0.08em',
	tracking200: '-0.04em',
	tracking300: '0',
	tracking400: '0.04em',
	tracking500: '0.08em',
})
