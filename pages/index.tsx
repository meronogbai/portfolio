import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link, { LinkProps } from "next/link";
import { GitHub, Twitter, Linkedin, Mail, FileText } from "react-feather";

const GITHUB_LINK = "https://github.com/meronogbai";
const TWITTER_LINK = "https://twitter.com/meronogbai";
const LINKEDIN_LINK = "https://www.linkedin.com/in/meronogbai";
const EMAIL = "mailto:okbaymeron@gmail.com";
const RESUME =
  "https://docs.google.com/document/d/1wkbHhGV8NKb8BE4BDHTmr0h7OQZbgs-r6v5theUWvJ4/export?format=pdf";

const SocialLink = ({
  href,
  children,
}: {
  href: LinkProps["href"];
  children: React.ReactNode;
}) => {
  return (
    <Link href={href}>
      <a className="hover:text-blue-600 transition-colors" target="_blank">
        {children}
      </a>
    </Link>
  );
};

const SocialLinks = () => (
  <div className="flex gap-2">
    <SocialLink href={GITHUB_LINK}>
      <GitHub />
    </SocialLink>

    <SocialLink href={TWITTER_LINK}>
      <Twitter />
    </SocialLink>

    <SocialLink href={LINKEDIN_LINK}>
      <Linkedin />
    </SocialLink>
  </div>
);

const Contact = () => (
  <Link href={EMAIL}>
    <a className="transition-colors border border-blue-600 hover:border-white p-2 bg-blue-600 hover:bg-black rounded flex gap-1">
      <Mail /> <span>Contact Me</span>
    </a>
  </Link>
);

const GetResume = () => (
  <Link href={RESUME}>
    <a className="transition-colors border p-2 hover:bg-blue-600 hover:border-blue-600 rounded flex gap-1">
      <FileText /> <span>Get Resume</span>
    </a>
  </Link>
);

const Ctas = () => (
  <div className="flex gap-6">
    <Contact />
    <GetResume />
  </div>
);

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col py-2 bg-black text-gray-100">
      <Head>
        <title>Meron Ogbai</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col justify-center px-20 ">
        <div className="flex flex-col gap-3">
          <h1 className="text-6xl font-bold">
            Hi , I'm <span className="text-blue-600">Meron</span>
          </h1>

          <p className="text-2xl">
            I'm a software engineer who loves building things for the web.
          </p>

          <SocialLinks />
          <Ctas />
        </div>
      </main>

      <footer className="flex justify-end pt-2 pr-4 w-full border-t border-gray-700">
        <SocialLinks />
      </footer>
    </div>
  );
};

export default Home;
