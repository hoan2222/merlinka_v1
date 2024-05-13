import { OutstaticApi } from 'outstatic'

export const GET = OutstaticApi.GET

export const POST = OutstaticApi.POST

export async function generateStaticParams() {
    const posts = getDocumentSlugs('posts')
    return posts.map((slug) => ({ slug }))
}