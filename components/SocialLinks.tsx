import Link, { LinkProps } from "next/link";
import { GitHub, Twitter, Linkedin } from "react-feather";

const GITHUB_LINK = "https://github.com/meronogbai";
const TWITTER_LINK = "https://twitter.com/meronogbai";
const LINKEDIN_LINK = "https://www.linkedin.com/in/meronogbai";

const SocialLink = ({
  href,
  children,
  label,
}: {
  href: LinkProps["href"];
  children: React.ReactNode;
  label: string;
}) => {
  return (
    <Link href={href}>
      <a
        className="hover:text-blue-600 transition-colors"
        target="_blank"
        aria-label={label}
      >
        {children}
      </a>
    </Link>
  );
};

export const SocialLinks = () => (
  <div className="flex gap-2">
    <SocialLink href={GITHUB_LINK} label="GitHub">
      <GitHub />
    </SocialLink>

    <SocialLink href={TWITTER_LINK} label="Twitter">
      <Twitter />
    </SocialLink>

    <SocialLink href={LINKEDIN_LINK} label="Linkedin">
      <Linkedin />
    </SocialLink>
  </div>
);
