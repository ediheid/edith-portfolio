import Head from "next/head";
import styles from "../ViewComponents/Home/home.module.scss";

import ContactButton from "../ViewComponents/Home/ContactButton";
import EnterWebDev from "../ViewComponents/Home/EnterWebDev";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Edith Heidmann</title>
        <meta
          name="description"
          content="Web Developer - Web Designer - Visual Artist based in Berlin, hailing from Sydney, Australia. Available for contract and freelance projects."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.background}>
       
        <ContactButton />

        <section className={styles["intro-text-container"]}>
          <p className={styles["intro-text"]}>Web <br/> Developer, <br/> Designer and <br/> Visual Artist.</p>
        </section>

<section className={styles["enter-components-container"]}>
<EnterWebDev /> 

<EnterWebDev /> 

</section>
      
   
       
        
      </main>
    </div>
  );
}
