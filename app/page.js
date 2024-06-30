import Head from './components/head';
import About from './components/about';
import Contact from './components/contact';
import Preisliste from './components/preisliste';
import Impressum from './components/impressum';
import TestPage from './components/meinungen/meinungen.jsx';
import Gallery from './components/gallery';

import fetchGraphQL from '../api/fetcher';

export default async function Home() {
  const items = await fetchGraphQL(
    `query{
      paketeCollection{
        items{
          title
          leistungen{
            json
          }
          preis
          thumbnail{
            url
          }
          id
        }
      }
    }`,
  );

  const pakete = items?.data?.paketeCollection?.items?.sort(
    (a, b) => a.id - b.id,
  );

  const data = await fetchGraphQL(
    `query{
          meinungCollection {
            items {
              inhalt {
                json
              }
              name
            }
          }
        }`,
  );
  return (
    <main>
      <Head />
      <div className="flex w-full flex-col justify-start pb-48">
        <Gallery />
        <About />
        <Preisliste item={pakete} />
        <Contact />
        <TestPage data={data} />
        <Impressum />
      </div>
    </main>
  );
}
