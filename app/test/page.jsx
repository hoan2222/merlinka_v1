import { getDocuments } from 'outstatic/server'

import Preis from '../components/ui/preis/preis';


export default async function PreisListe() {
    const posts = await getData();
    return posts.map((post) => {

        <h1>{post.content}</h1>
    }
    )
}

async function getData() {
    const posts = getDocuments('Pakete', ['title', 'preis', 'content', 'coverImage'])

    return posts
}





