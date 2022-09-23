import Head from "next/head";
import WebLayout from "../../Layout/WebLayout";
import WebAbout from "../../Components/PagesWeb/AboutSection/WebAbout";

type WebAppProps = {
  title: string;
};

let webAppData = {
  title: "EH · Web",
};

const Web = ({}: WebAppProps) => {
  return (
    <WebLayout>
      <Head>
        <title>{webAppData.title}</title>
        <meta
          name="description"
          content="Web Developer - Web Designer - Visual Artist based in Berlin, hailing from Sydney, Australia. Available for contract and freelance projects."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <WebAbout heading={""} altTag={""} />
    </WebLayout>
  );
};

export default Web;
