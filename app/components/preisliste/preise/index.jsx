
import Preis from '../../ui/preis/preis';

export default async function Preise({ items }) {


    return (items?.data?.paketeCollection?.items?.map((post, idx) => {

        const content = post.leistungen.json.content[0].content[0].value.trim().split("\n");
        return (
            <Preis content={content} name={post.title} preis={post.preis} image={post.thumbnail.url} key={idx} />
        )

    }
    ))
}







