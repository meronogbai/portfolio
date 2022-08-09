import type { NextPage } from "next";
import {
  CtaSection,
  ProjectsSection,
  SocialLinks,
  ToolboxSection,
} from "../components";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col py-2 text-gray-100">
      <main className="flex w-full flex-1 flex-col justify-center px-3 sm:px-20 space-y-12">
        <section className="flex flex-col gap-6">
          <h1 className="text-6xl font-bold">
            Hi , I'm <span className="text-blue-600">Meron</span>
          </h1>

          <p className="text-2xl">
            I'm a software engineer who loves building things for the web.
          </p>

          <SocialLinks />
        </section>

        <CtaSection />
        <ToolboxSection />
        <ProjectsSection />
      </main>
    </div>
  );
};

export default Home;
