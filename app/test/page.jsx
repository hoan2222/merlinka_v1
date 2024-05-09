import { getDocuments } from 'outstatic/server';

import Preis from '../components/ui/preis/preis';



export default async function PreisListe() {
    const posts = await getData();
    return posts.map((post) => {
        console.log(post.content)
        const content = post.content.trim().split("\n- ");
        console.log(content);
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





