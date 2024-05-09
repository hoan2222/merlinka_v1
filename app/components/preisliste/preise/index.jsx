import { getDocuments } from 'outstatic/server';

import Preis from '../../ui/preis/preis';



export default async function Preise() {
    const posts = await getData();
    return posts.map((post) => {
        const content = post.content.trim().split("\n\n");
        return (
            <Preis content={content} name={post.title} preis={post.preis} image={post.coverImage} />
        )

    }
    )
}

async function getData() {
    const posts = getDocuments('Pakete', ['title', 'preis', 'content', 'coverImage'])


    return posts
}





