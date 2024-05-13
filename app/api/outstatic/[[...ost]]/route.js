import { OutstaticApi } from 'outstatic'
import { getDocumentSlugs } from 'outstatic/server'

export const GET = OutstaticApi.GET

export const POST = OutstaticApi.POST

export async function generateStaticParams() {
    const posts = getDocumentSlugs('posts')
    return posts.map((slug) => ({ slug }))
}