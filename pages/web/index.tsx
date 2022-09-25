import Head from "next/head";
import WebLayout from "../../Layout/WebLayout";
import WebAbout from "../../Components/PagesWeb/AboutSection/WebAbout";

type WebAppProps = {
  title: string;
  metaContent: string;
};

let webAppData: WebAppProps = {
  title: "EH · Web",
  metaContent:
    "Web Developer - Web Designer - Visual Artist based in Berlin, hailing from Sydney, Australia. Available for contract and freelance projects.",
};

const Web = ({}: WebAppProps) => {
  return (
    <WebLayout>
      <Head>
        <title>{webAppData.title}</title>
        <meta name="description" content={webAppData.metaContent} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <WebAbout heading={""} altTag={""} buttonText1={""} buttonText2={""} />
    </WebLayout>
  );
};

export default Web;
