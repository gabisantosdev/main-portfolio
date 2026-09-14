import defaultSocialImage from '#/assets/images/gabriel_perfil.webp'
import { GABRIEL_INFORMATION } from '#/lib/global/data/gabriel-information.data'

const SITE_NAME = 'Gabriel S. Coutinho'
const SITE_URL = GABRIEL_INFORMATION.urls.website

const absoluteUrl = (path: string) => {
	return new URL(path, SITE_URL).toString()
}

const DEFAULT_SOCIAL_IMAGE = absoluteUrl(defaultSocialImage)

const personSchema = {
	'@type': 'Person',
	name: GABRIEL_INFORMATION.name,
	url: SITE_URL,
}

export const SEO_DEFAULTS = {
	title: 'Gabriel S. Coutinho | Criação de sites profissionais',
	description:
		'Desenvolvedor full-stack, web e product designer. Gabriel Coutinho cria websites sob medida, unindo estratégia, UX/UI, SEO e alta performance.',
}

type SeoInput = {
	title?: string
	description?: string
	path?: string
	image?: string
	imageAlt?: string
	type?: 'website' | 'article'
	noIndex?: boolean
}

export const createSeoHead = ({
	title = SEO_DEFAULTS.title,
	description = SEO_DEFAULTS.description,
	path = '/',
	image = DEFAULT_SOCIAL_IMAGE,
	imageAlt = title,
	type = 'website',
	noIndex = false,
}: SeoInput = {}) => {
	const url = absoluteUrl(path)
	const imageUrl = absoluteUrl(image)

	return {
		meta: [
			{ title },
			{ name: 'description', content: description },
			{ property: 'og:title', content: title },
			{ property: 'og:description', content: description },
			{ property: 'og:type', content: type },
			{ property: 'og:url', content: url },
			{ property: 'og:site_name', content: SITE_NAME },
			{ property: 'og:locale', content: 'pt_BR' },
			{ property: 'og:image', content: imageUrl },
			{ property: 'og:image:alt', content: imageAlt },
			{
				name: 'twitter:card',
				content: 'summary_large_image',
			},
			{ name: 'twitter:title', content: title },
			{ name: 'twitter:description', content: description },
			{ name: 'twitter:image', content: imageUrl },
			{ name: 'twitter:image:alt', content: imageAlt },
			...(noIndex ? [{ name: 'robots', content: 'noindex, nofollow' }] : []),
		],
		links: [{ rel: 'canonical', href: url }],
	}
}

export const personJsonLd = {
	'@context': 'https://schema.org',
	...personSchema,
	image: DEFAULT_SOCIAL_IMAGE,
	jobTitle: 'Desenvolvedor Full-Stack, Web Designer e Product Designer',
	sameAs: [
		GABRIEL_INFORMATION.urls.socialMedia.instagram,
		GABRIEL_INFORMATION.urls.socialMedia.twitter,
	],
}

type ProjectJsonLdInput = {
	name: string
	description: string
	path: string
	image: string
	dateCreated?: number
	category?: string
	technologies?: string[]
}

export const createProjectJsonLd = ({
	name,
	description,
	path,
	image,
	dateCreated,
	category,
	technologies,
}: ProjectJsonLdInput) => ({
	'@context': 'https://schema.org',
	'@type': 'CreativeWork',
	name,
	description,
	url: absoluteUrl(path),
	image: {
		'@type': 'ImageObject',
		url: absoluteUrl(image),
	},
	...(dateCreated ? { dateCreated: `${dateCreated}-01-01` } : {}),
	...(category ? { genre: category } : {}),
	...(technologies?.length ? { keywords: technologies.join(', ') } : {}),
	creator: personSchema,
})
