import { getDocuments } from 'outstatic/server'



export default async function PreisListe() {
    const posts = await getData();
    return posts.map((post) => <h1>{post.content}</h1>)
}

async function getData() {
    const posts = getDocuments('Pakete', ['title', 'content'])

    return posts
}



