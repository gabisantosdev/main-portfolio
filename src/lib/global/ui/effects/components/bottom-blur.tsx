import * as stylex from '@stylexjs/stylex'

const styles = stylex.create({
	root: {
		position: 'fixed',
		zIndex: 100,
		right: 0,
		bottom: 0,
		left: 0,

		height: '96px',

		pointerEvents: 'none',

		/*
		 * O gradiente evita que o blur termine de forma abrupta.
		 * A maior opacidade fica próxima ao bottom e desaparece
		 * gradualmente em direção ao conteúdo.
		 */
		background:
			'linear-gradient(to top, rgba(255, 255, 255, 0.72), transparent)',

		/*
		 * Blur progressivo do conteúdo que está atrás do elemento.
		 */
		backdropFilter: 'blur(12px)',
		WebkitBackdropFilter: 'blur(12px)',

		/*
		 * Faz o próprio elemento desaparecer gradualmente,
		 * criando um fade mais natural.
		 */
		maskImage: 'linear-gradient(to top, black 0%, transparent 100%)',
		WebkitMaskImage: 'linear-gradient(to top, black 0%, transparent 100%)',
	},
})

export const BottomBlur = () => {
	return <div {...stylex.props(styles.root)} aria-hidden='true' />
}
