import { GABRIEL_INFORMATION } from '../data/gabriel-information.data'
import type { IconsList } from '../ui/icons/types/icons-list.type'

type SocialMedia = {
	label: string
	url: string
	iconName: IconsList
}

export const SocialMediaInformation: SocialMedia[] = [
	{
		label: 'Instagram: @gabrielscoutinhodev',
		url: GABRIEL_INFORMATION.urls.socialMedia.instagram,
		iconName: 'Instagram',
	},
	{
		label: 'Twitter: @gabscoutinhodev',
		url: GABRIEL_INFORMATION.urls.socialMedia.twitter,
		iconName: 'Twitter',
	},
	{
		label: 'WhatsApp',
		url: GABRIEL_INFORMATION.urls.socialMedia.whatsApp,
		iconName: 'WhatsApp',
	},
]
