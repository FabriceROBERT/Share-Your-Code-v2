import React from "react";
import Container from "../container/container";
import Typography from "@/ui/design-system/typographie/typography";
import Image from "next/image";
import { footerAppLinks, footerLinks, footerUsersLinks } from "./app-links";
import {v4 as uuidv4} from "uuid";
import ActiveLink from "./active-link";
import { Link } from "react-router-dom";
import { AppLinks, FooterLinks } from "@/types/app-links";
import {FooterLink} from "./footer-links"

function Footer() {
  // Afficher la date de l'année en cours
  const currentYear = new Date().getFullYear();

  const footerNavigationList = footerLinks.map((columnLinks) => (
    <FooterLink key={uuidv4()} data={columnLinks}/>
  ))
    
    
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

         
        </div>
        <div className=" flex gap-7">
         {footerNavigationList} 
          </div>
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
          <div className="text-white">2</div>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
  