import type { NextPage } from "next";
import { Ctas, SocialLinks } from "../components";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col py-2 text-gray-100">
      <main className="flex w-full flex-1 flex-col justify-center px-3 sm:px-20">
        <section className="flex flex-col gap-6">
          <h1 className="text-6xl font-bold">
            Hi , I'm <span className="text-blue-600">Meron</span>
          </h1>

          <p className="text-2xl">
            I'm a software engineer who loves building things for the web.
          </p>

          <SocialLinks />
        </section>

        <section className="flex gap-6 my-12">
          <Ctas />
        </section>

        <section className="flex flex-col gap-5">
          <h2 className="text-2xl font-bold">My Toolbox</h2>

          <ul className="toolbox">
            <li>TypeScript</li>
            <li>React</li>
            <li>Node</li>
            <li>PostgreSQL</li>
            <li>GraphQL</li>
            <li>Docker</li>
            <li>Rails</li>
          </ul>
        </section>
        {/** todo: what i've been up to */}
        {/** todo: blog posts */}
        {/** todo: side projects */}
      </main>
    </div>
  );
};

export default Home;
