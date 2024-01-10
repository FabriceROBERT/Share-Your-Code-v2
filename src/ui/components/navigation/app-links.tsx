import { AppLinks } from "@/types/app-links";
import { networkInterfaces } from "os";

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

const footerSocialNetworksLinks: AppLinks[] = [
  {
    label: "Linkedin",
    baseUrl: "https://www.linkedin.com/in/fabrice-robert9536/",
    type: "external",
  },
  {
    label: "Github",
    baseUrl: "https://github.com/FabriceROBERT",
    type: "external",
  },
  {
    label: "Twitter (X)",
    baseUrl: "https://twitter.com/fabriciooo_fr",
    type: "external",
  },
];

export const footerLinks = [
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
  
  }
  

]