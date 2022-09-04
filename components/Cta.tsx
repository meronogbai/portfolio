import Link from "next/link";
import { FileText, Mail } from "react-feather";
import { customGoogleAnalyticsEvent } from "../lib";

const EMAIL = "mailto:okbaymeron@gmail.com";
const RESUME =
  "https://docs.google.com/document/d/1wkbHhGV8NKb8BE4BDHTmr0h7OQZbgs-r6v5theUWvJ4/export?format=pdf";

const Contact = () => (
  <Link href={EMAIL}>
    <a className="border border-blue-600 p-2 bg-blue-600 rounded flex gap-1">
      <Mail /> <span>Contact Me</span>
    </a>
  </Link>
);

const GetResume = () => {
  const handleGetResume = () => {
    customGoogleAnalyticsEvent({
      action: "get_resume",
    });
  };

  return (
    <Link href={RESUME}>
      <a
        className="transition-colors border p-2 hover:bg-blue-600 hover:border-blue-600 rounded flex gap-1"
        onClick={handleGetResume}
      >
        <FileText /> <span>Get Resume</span>
      </a>
    </Link>
  );
};

export const CtaSection = () => (
  <section className="flex gap-6">
    <Contact />
    <GetResume />
  </section>
);
