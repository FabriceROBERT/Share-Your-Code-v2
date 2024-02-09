import { AppLinks, FooterLinks } from "@/types/app-links";
import {
  RiGithubFill,
  RiLinkedinFill,
  RiPlanetFill,
  RiTwitterFill,
} from "react-icons/ri";
// Prends en compte la liste des propriété de AppLinks dans @/types/app-links
export const footerAppLinks: AppLinks[] = [
  // AppLinks
  {
    label: "Accueil",
    baseUrl: "/",
    type: "internal",
  },

  // AppLinks
  {
    label: "Projets",
    baseUrl: "/#",
    type: "internal",
  },

  // AppLinks
  {
    label: "Share Your Code",
    baseUrl: "/#",
    type: "internal",
  },
];

export const footerUsersLinks: AppLinks[] = [
  {
    label: "Mon espace",
    baseUrl: "/#",
    type: "internal",
  },
  {
    label: "Connexion",
    baseUrl: "/#",
    type: "internal",
  },
  {
    label: "Inscrpition",
    baseUrl: "/#",
    type: "internal",
  },
  {
    label: "Mot de passe oublié",
    baseUrl: "/#",
    type: "internal",
  },
];

const footerInformationLinks: AppLinks[] = [
  {
    label: "CGU",
    baseUrl: "",
    type: "internal",
  },
  {
    label: "Confidentialité",
    baseUrl: "",
    type: "internal",
  },
  {
    label: "A propos",
    baseUrl: "",
    type: "internal",
  },
  {
    label: "Contact",
    baseUrl: "",
    type: "internal",
  },
];

export const footerSocialNetworksLinks: AppLinks[] = [
  {
    label: "Linkedin",
    baseUrl: "https://www.linkedin.com/in/fabrice-robert9536/",
    type: "external",
    icon: RiLinkedinFill,
  },
  {
    label: "Github",
    baseUrl: "https://github.com/FabriceROBERT",
    type: "external",
    icon: RiGithubFill,
  },
  {
    label: "Twitter (X)",
    baseUrl: "https://twitter.com/fabriciooo_fr",
    type: "external",
    icon: RiTwitterFill,
  },
  {
    label: "Portfolio",
    baseUrl: "https://portfolio-v3-fabricerobert.vercel.app/",
    type: "external",
    icon: RiPlanetFill,
  },
];

export const footerLinks: FooterLinks[] = [
  {
    label: "App",
    links: footerAppLinks,
  },

  {
    label: "Utilisateurs",
    links: footerUsersLinks,
  },
  {
    label: "Informations",
    links: footerInformationLinks,
  },
  {
    label: "Réseaux",
    links: footerSocialNetworksLinks,
  },
];
