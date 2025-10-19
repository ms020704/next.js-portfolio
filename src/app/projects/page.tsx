import ProjectsList from './ProjectsList'
import { Repository } from '@/types/repo'

export default async function Projects() {
  const username = 'ms020704'

  const res = await fetch(`https://api.github.com/users/${username}/repos`, {
    next: { revalidate: 60 },
  })
  const repos: Repository[] = await res.json()

  return (
    <section className="max-w-6xl mx-auto py-16 px-6">
      <ProjectsList repos={repos} />
    </section>
  )
}
