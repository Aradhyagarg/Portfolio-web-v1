import Head from "next/head";
import About from "./about";
import Certifications from "./certifications";
import Experience from "./experience";
import Project from "./projects";

export default function Home() {
  return (
    <>
      <div>
        <Head>
          <title>Aradhya&apos;s Portfolio</title>
          <meta
            property="og:description"
            content="Aradhya Garg is a software engineer who builds accessible,
  inclusive products and digital experiences for the web."
          />
        </Head>
      </div>
      <About />
      <Experience />
      <Project />
      <Certifications />
      <div className="mt-20">
        A copied design and coded in Visual Studio Code by myself truly. Built
        with NextJs and Tailwind CSS, deployed with Vercel.
      </div>
    </>
  );
}
