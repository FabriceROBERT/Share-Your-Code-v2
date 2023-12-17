import React from "react";
import Container from "../container/container";
import { Logo } from "@/ui/design-system/logo/logo";
import Typographie from "@/ui/design-system/typographie/typography";
import { Buttons } from "@/ui/design-system/buttons/buttons";
import Link from "next/link";
import ActiveLink from "./active-link";
interface Props {}

function Navigation({}: Props) {
  return (
    <div className="border-b-2 border-gray-400">
      <Container className="flex items-center justify-between gap-7 py-1.5">
        <Link href="/">
          <div className=" flex items-center gap-2.5">
            <Logo size="small" />
            <div className="flex flex-col">
              <div className="text-gray font-extrabold text-[24px]">
                Share Your Code
              </div>
              <Typographie variant="caption4" theme="gray" component="span">
                Trouve ton inspiration et reçois des feedbacks
              </Typographie>
            </div>
          </div>
        </Link>
        <div className="flex items-center gap-7">
          <Typographie
            variant="caption3"
            component="div"
            className="flex items-center gap-7"
          >
            <ActiveLink href="/design-system">Design System</ActiveLink>
            <ActiveLink href="/projets">Projets</ActiveLink>
            <ActiveLink href="/formations">Formations</ActiveLink>
            <ActiveLink href="contact/">Contact</ActiveLink>
          </Typographie>
          <div className="flex items-center gap-2">
            <Buttons size="small">Connexion</Buttons>
            <Buttons variant="secondary" size="small">
              Rejoindre
            </Buttons>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Navigation;
