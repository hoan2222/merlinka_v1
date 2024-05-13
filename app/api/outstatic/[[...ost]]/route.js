import { OutstaticApi } from 'outstatic'
import { getDocumentSlugs } from 'outstatic/server'

export async function generateStaticParams() {
    const posts = getDocumentSlugs('content')
    return posts.map((slug) => ({ slug }))
}

export const GET = OutstaticApi.GET

export const POST = OutstaticApi.POST

