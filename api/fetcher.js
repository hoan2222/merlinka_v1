

export default async function fetchGraphQL(query) {
    return fetch(
        `https://graphql.contentful.com/content/v1/spaces/${{ secrets.CONTENTFUL_SPACE_ID }}`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${{ secrets.CONTENTFUL_ACCESS_TOKEN }}`,
            },
            body: JSON.stringify({ query }),

        }
    ).then((response) => response.json());
}


