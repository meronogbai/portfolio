import Link, { LinkProps } from "next/link";
import { Mail, FileText } from "react-feather";

const EMAIL = "mailto:okbaymeron@gmail.com";
const RESUME =
  "https://docs.google.com/document/d/1wkbHhGV8NKb8BE4BDHTmr0h7OQZbgs-r6v5theUWvJ4/export?format=pdf";

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

export const Ctas = () => (
  <>
    <Contact />
    <GetResume />
  </>
);
