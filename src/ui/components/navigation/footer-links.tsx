import { FooterLinks } from "@/types/app-links";
import Typography from "@/ui/design-system/typographie/typography";
import ActiveLink from "./active-link";
import {v4 as uuidv4} from "uuid";

interface footerLinkProps {
    data: FooterLinks;
  }
  
  // recupere la data dans footerLinkProps uniquement
 export const FooterLink = ({data}:footerLinkProps) => {
    const linksList = data.links.map((link) => (
      <div key={uuidv4()}> 
      {link.type === "internal" && ( <ActiveLink href={link.baseUrl}>{link.label}</ActiveLink>)
    }
        {link.type ==="external" && (
       
      <a href={link.baseUrl} target="_blank">{link.label}</a>)}</div>))
    
    return (
      <div className="min-w-[190px]">
        <Typography variant="caption2" className="pb-5" theme="white" weight="medium">
          {data.label}
        </Typography>
        <Typography variant="caption3" className="space-y-4" theme="gray">
     {linksList}
        </Typography>
       
      </div>
    )}

FooterLink