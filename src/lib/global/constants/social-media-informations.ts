import type { IconsList } from '../ui/icons/types/icons-list.type'

type SocialMedia = {
	label: string
	url: string
	iconName: IconsList
}

export const SocialMediaInformation: SocialMedia[] = [
	{ label: 'Instagram: @gabrielscoutinho', url: '', iconName: 'Instagram' },
	{ label: 'Twitter: @gabrielscoutinho', url: '', iconName: 'Twitter' },
	{ label: 'WhatsApp', url: '', iconName: 'WhatsApp' },
]
