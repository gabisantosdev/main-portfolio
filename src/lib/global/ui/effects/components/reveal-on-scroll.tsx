import * as stylex from '@stylexjs/stylex'

import { type ComponentProps, useEffect, useRef, useState } from 'react'

const reveal = stylex.keyframes({
	from: {
		opacity: 0,
		transform: 'translate3d(0, 1.5rem, 0)',
	},

	to: {
		opacity: 1,
		transform: 'translate3d(0, 0, 0)',
	},
})

const styles = stylex.create({
	visible: {
		animationName: reveal,
		animationDuration: '800ms',
		animationTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
		animationFillMode: 'both',

		'@media (prefers-reduced-motion: reduce)': {
			animation: 'none',
			opacity: 1,
			transform: 'none',
		},
	},
})

interface RevealOnScrollProps extends ComponentProps<'div'> {}

export const RevealOnScroll = ({ ...restProps }: RevealOnScrollProps) => {
	const ref = useRef<HTMLDivElement>(null)
	const [isVisible, setIsVisible] = useState(false)

	useEffect(() => {
		const element = ref.current

		if (!element) return

		const observer = new IntersectionObserver(
			([entry]) => {
				if (!entry.isIntersecting) return

				setIsVisible(true)
				observer.unobserve(element)
			},
			{
				threshold: 0.1,
			}
		)

		observer.observe(element)

		return () => observer.disconnect()
	}, [])

	return (
		<div
			ref={ref}
			{...restProps}
			{...stylex.props(isVisible && styles.visible)}
		/>
	)
}
