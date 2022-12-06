import type { NextPage } from "next";
import {
  CtaSection,
  ProjectsSection,
  SocialLinks,
  ToolboxSection,
} from "../components";

const Home: NextPage = () => {
  return (
    <main className="p-3 sm:p-20 text-gray-100 max-w-5xl m-auto flex flex-col gap-12 justify-center min-h-screen">
      <section className="flex flex-col gap-6">
        <h1 className="text-6xl font-bold">
          Hi, I'm <span className="text-blue-600">Meron</span>
        </h1>

        <p className="text-2xl">
          I'm a software engineer who loves building things for the web.
        </p>

        <SocialLinks />
      </section>

      <CtaSection />
      <ToolboxSection />
      {/* <ProjectsSection /> */}
    </main>
  );
};

export default Home;
