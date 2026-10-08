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
      <footer className="mt-24 pb-16 text-sm sm:text-base text-slate-400 leading-relaxed max-w-md">
        <p>
          Designed &amp; coded by <span className="text-slate-200 font-medium">Aradhya Garg</span>. Built with <span className="text-slate-200 font-medium">Next.js</span> and <span className="text-slate-200 font-medium">Tailwind CSS</span>, deployed with <span className="text-slate-200 font-medium">Vercel</span>.
        </p>
      </footer>
    </>
  );
}
