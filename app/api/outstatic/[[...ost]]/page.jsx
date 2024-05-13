import { getDocumentSlugs } from 'outstatic/server'

export async function generateStaticParams() {
    const posts = getDocumentSlugs('posts')
    return posts.map((slug) => ({ slug }))
}