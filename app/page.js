import Head from "./components/head";
import About from "./components/about";
import Contact from "./components/contact";
import Preisliste from "./components/preisliste";
import Impressum from "./components/impressum";
import PreisListe from "./components/preisliste/test.jsx"

export default function Home() {

  return (
    <main>
      <Head />
      <div className="flex flex-col py-48 justify-start w-full">
        <About />
        <PreisListe />
        <Preisliste />
        <Contact />

        <Impressum />
      </div>
    </main>
  );
}
