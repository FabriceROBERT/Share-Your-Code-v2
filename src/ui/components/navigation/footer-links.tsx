import { FooterLinks } from "@/types/app-links";
import Typography from "@/ui/design-system/typographie/typography";
import ActiveLink from "./active-link";
import { v4 as uuidv4 } from "uuid";
import { LinkTypes } from "@/lib/link-type";

// Recupère les données de FooteLinks dont ( label et links)
interface footerLinkProps {
  data: FooterLinks;
}

// recupere la data dans footerLinkProps uniquement
export const FooterLink = ({ data }: footerLinkProps) => {
  const linksList = data.links.map((link) => (
    <div key={uuidv4()}>
      {link.type === LinkTypes.INTERNAL && (
        <ActiveLink href={link.baseUrl}>{link.label}</ActiveLink>
      )}
      {link.type === LinkTypes.EXTERNAL && (
        <a href={link.baseUrl} target="_blank">
          {link.label}
        </a>
      )}
    </div>
  ));

  return (
    <div className="min-w-[190px]">
      <Typography
        variant="caption2"
        className="pb-5"
        theme="white"
        weight="medium"
      >
        {data.label}
      </Typography>
      <Typography variant="caption3" className="space-y-4" theme="gray">
        {linksList}
      </Typography>
    </div>
  );
};

FooterLink;
