import { LinkType } from "@/lib/link-type";
import { IconType } from "react-icons";

export interface AppLinks {
  label: string;
  baseUrl: string;
  type: LinkType;
  // Icon passe un composant React avec React.ReactNode, une div peut très bien passer mais je fais appel à IconType pour les icones.
  // icon?: React.ReactNode;

  // Iconype renvoit une icone voir la documentation IconType
  icon?: IconType;
}

export interface FooterLinks {
  label: string;
  // Prend en compte les liens contenant AppLinks[]  de import { AppLinks } from "@/types/app-links";
  links: AppLinks[];
}
