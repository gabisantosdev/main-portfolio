import type { LinkComponentProps } from '@tanstack/react-router'
import type { IconsList } from '#/lib/global/ui/icons/types/icons-list.type'

type HeaderNavigationLink = {
	link?: LinkComponentProps['to']
	hash?: string
	label: string
	iconName: IconsList
}

export const HeaderNavigationLinks: HeaderNavigationLink[] = [
	{ link: '/', label: 'Início', iconName: 'Home' },
	{ link: '/projects', label: 'Projetos', iconName: 'Projects' },
	{ link: '.', hash: 'contact', label: 'Contato', iconName: 'Contact' },
]
