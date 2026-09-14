import { createFileRoute } from '@tanstack/react-router'
import { createSeoHead } from '#/lib/global/seo/seo'
import { ProjectsPage } from '#/lib/pages/projects/components/projects'

export const Route = createFileRoute('/projects/')({
	head: () => {
		return createSeoHead({
			title: 'Projetos | Gabriel S. Coutinho',
			description:
				'Conheça projetos de websites criados por Gabriel Coutinho, com foco em estratégia, design, performance e experiência do usuário.',
			path: '/projects/',
		})
	},
	component: RouteComponent,
})

function RouteComponent() {
	return <ProjectsPage />
}
