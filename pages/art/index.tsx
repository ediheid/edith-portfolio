import Head from "next/head";

type ArtAppProps = {
  title: string;
};

let artAppData = {
  title: "EH · Art",
};

const Art = ({}: ArtAppProps) => {
  return (
    <div>
      <Head>
        <title>{artAppData.title}</title>
        <meta
          name="description"
          content="Web Developer - Web Designer - Visual Artist based in Berlin, hailing from Sydney, Australia. Available for contract and freelance projects."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main> This will be the main section of the art SPA (components)</main>
    </div>
  );
};

export default Art;
