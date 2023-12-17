import React from "react";
import Container from "../container/container";
import Typography from "@/ui/design-system/typographie/typography";
import Image from "next/image";
import { FooterAppLinks } from "./app-links";
import {v4 as uuidv4} from "uuid";
import ActiveLink from "./active-link";
import { Link } from "react-router-dom";

function Footer() {
  // Afficher la date de l'année en cours
  const currentYear = new Date().getFullYear();

    
    
  return (
    <div className="  bg-gray">
      <Container className="flex justify-between pt-16">
        <div className="flex flex-col items-center gap-1">
          <Typography variant="caption1" theme="white" weight="medium">
            Contribution de projets
          </Typography>
          <Typography variant="caption3" theme="gray">
            Rejoins la chaîne
          </Typography>

          {/* <div className="flex flex-row gap-5 justify-center align-baseline">
            <a href="https://github.com/FabriceROBERT" target="_blacnk">
              <Image
                src="/assets/svg/github.svg"
                //width : 229 , height : 216
                width={100}
                height={100}
                alt="Github link"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/fabrice-robert9536/"
              target="_blacnk"
            >
              <Image
                src="/assets/svg/linkedin.svg"
                width={150}
                height={150}
                alt="Linkedin link"
              />
            </a>
          </div> */}
        </div>
        <div className=""><FooterLink/> </div>
      </Container>
      <Container className="pt-9 pb-11 space-y-11">
        <hr className="text-gray-800" />
        <div className="flex items-center justify-between">
          <Typography variant="caption4" theme="gray">
            {`Copyright © ${currentYear}| Propulsed by `}{" "}
            <a
              href="https://portfolio-v3-fabricerobert.vercel.app/"
              target="_blank"
              className="underline"
            >
              {`Fabrice ROBERT`}
            </a>
            {` - Share Your
            Code`}
          </Typography>
          <div className="">2</div>
        </div>
      </Container>
    </div>
  );
}

export default Footer;

const FooterLink = () => {
  const linksList = FooterAppLinks.map((link) => (
    <div key={uuidv4()}> 
    {link.type === "internal" && ( <ActiveLink href={link.baseUrl}>{link.label}</ActiveLink>)
  }
      {link.type ==="external" && (
     
    <a href={link.baseUrl} target="_blank">{link.label}</a>)}</div>))
  
  return (
    <div className="min-w-[190px]">
      <Typography variant="caption2" className="pb-5" theme="white" weight="medium">
        Titre
      </Typography>
      <Typography variant="caption3" className="space-y-4" theme="gray">
   {linksList}
      </Typography>
     
    </div>
  )}
