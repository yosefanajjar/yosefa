import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { compareDesc, toDate } from 'date-fns'

interface Frontmatter {
  title: string
  date: string
  description: string
  imagePath: string
  tags: string
}

interface Meta extends Omit<Frontmatter, 'tags'> {
  tags: string[]
}

export interface BlogPost {
  meta: Meta
  slug: string
}

export const getBlog = (): BlogPost[] => {
  const blogDir = 'blog'

  const files = fs.readdirSync(path.join(blogDir))

  const blog = files.map(filename => {
    const fileContent = fs.readFileSync(path.join(blogDir, filename), 'utf-8')

    const { data: frontMatter } = matter(fileContent)

    return {
      meta: {
        ...(frontMatter as Frontmatter),
        tags: (frontMatter as Frontmatter).tags.split(', '),
      },
      slug: filename.replace('.mdx', ''),
    }
  })

  return blog.sort((postA, postB) => {
    const firstDate = toDate(postA.meta.date)
    const secondDate = toDate(postB.meta.date)

    return compareDesc(firstDate, secondDate)
  })
}
