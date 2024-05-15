import 'outstatic/outstatic.css'
import { Outstatic } from 'outstatic'
import { OstClient } from 'outstatic/client'
import { getCollections, getDocumentSlugs } from 'outstatic/server'



export async function generateStaticParams() {
    const posts = getCollections()
    console.log(posts.map((slug) => ({ slug })))
    return posts.map((slug) => ({ slug }))
}


export default async function Page({ params }) {
    const ostData = await Outstatic()
    console.log(params)
    return <OstClient ostData={ostData} params={params} />
}

