import { getDocuments } from 'outstatic/server'



export default async function PreisListe() {
    const posts = await getData();
    return posts.map((post) => <h1>{post.title}</h1>)
}

async function getData() {
    const posts = getDocuments('pakete')

    return posts
}
