import 'outstatic/outstatic.css'
import { Outstatic } from 'outstatic'
import { OstClient } from 'outstatic/client'
import { getCollections, getDocumentSlugs } from 'outstatic/server'



export default async function Page({ params }) {
    const ostData = await Outstatic()
    console.log(params)
    return <OstClient ostData={ostData} params={params} />
}

