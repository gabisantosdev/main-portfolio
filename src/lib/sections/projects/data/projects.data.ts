import BrandingPortfolio from '#/assets/images/projects/branding-portfolio.webp'
import Craftsman from '#/assets/images/projects/craftsman.webp'

type Project = {
	id: number
	slug: string
	name: string
	image: string
	url?: string
	info?: {
		description?: string
		age?: number
		duration?: string
		category?: string
		technologies?: string[]
	}
}

export const Projects: Project[] = [
	{
		id: 1,
		slug: 'branding-portfolio',
		name: 'Branding Portfolio',
		image: BrandingPortfolio,
		url: '#',
		info: {
			description:
				'A Empresa oferece uma experiência fluida e impactante ao apresentar seu trabalho em tela cheia. Ela combina tipografia suíça marcante, animações suaves, navegação por barra lateral e um CMS flexível — tudo para fazer seu portfólio se destacar.',
			age: 2026,
			duration: '3 semanas',
			category: 'Landing Page',
			technologies: ['React', 'Tanstack Start', 'Stylex CSS', 'Figma'],
		},
	},
	{
		id: 2,
		slug: 'craftsman',
		name: 'Craftsman',
		image: Craftsman,
		url: '#',
		info: {
			description:
				'A Empresa oferece uma experiência fluida e impactante ao apresentar seu trabalho em tela cheia.',
			age: 2026,
			duration: '2 semanas',
			category: 'Institucional',
			technologies: ['React', 'Tanstack Start', 'Stylex CSS', 'Figma'],
		},
	},
]
