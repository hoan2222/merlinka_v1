import 'outstatic/outstatic.css'
import { Outstatic } from 'outstatic'
import { OstClient } from 'outstatic/client'
import { getDocumentSlugs } from 'outstatic/server'

export async function generateStaticParams() {
    const posts = getDocumentSlugs('')
    console.log(posts);
    return posts.map((slug) => ({ slug }))
}

export default async function Page({ params }) {
    const ostData = await Outstatic()
    return <OstClient ostData={ostData} params={params} />
}