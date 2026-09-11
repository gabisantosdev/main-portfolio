import type { IconsList } from '#/lib/global/ui/icons/types/icons-list.type'

type HeaderNavigationLink = {
	link: string
	label: string
	iconName: IconsList
}

export const HeaderNavigationLinks: HeaderNavigationLink[] = [
	{ link: '/', label: 'Início', iconName: 'Home' },
	{ link: '/projects', label: 'Projetos', iconName: 'Projects' },
	{ link: '#contact', label: 'Contato', iconName: 'Contact' },
]
