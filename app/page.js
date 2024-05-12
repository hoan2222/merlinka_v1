import Head from "./components/head";
import About from "./components/about";
import Contact from "./components/contact";
import Preisliste from "./components/preisliste";
import Impressum from "./components/impressum";
import TestPage from "./components/meinungen/meinungen.jsx"
import Gallery from "./components/gallery";

export default function Home() {

  return (
    <main>
      <Head />
      <div className="flex flex-col pb-48 justify-start w-full">
        <Gallery />
        <About />
        <Preisliste />
        <Contact />
        <TestPage />
        <Impressum />
      </div>
    </main>
  );
}
