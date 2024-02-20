import Container from "@/ui/components/container/container";
import { Buttons } from "@/ui/design-system/buttons/buttons";
import Typography from "@/ui/design-system/typographie/typography";
import Image from "next/image";
import React from "react";

export default function HeroTopView() {
  return (
    <Container className="relative pt-40 pb-52 overflow-hidden">
      <div className=" max-w-xl w-full space-y-5">
        <Typography className=" " component="h1" variant="h1">
          Hello, Bienvenue sur la plateforme !
        </Typography>
        <Typography className=" " theme="gray" component="h1" variant="body-lg">
          Le Saas qui te permet de partager ton code avec d'autres codeurs pour
          te faire des nouveaux amis codeurs, collaborateurs ou mentors.
        </Typography>
        <div className=" space-x-5 pt-2.5">
          <Buttons baseUrl="">Commencer</Buttons>
          <Buttons variant="secondary" baseUrl="">
            En savoir plus
          </Buttons>
        </div>
      </div>
      <Image
        src="https://doodleipsum.com/700/flat?i=72146f9a9265527cc8a4010e4db98bd1"
        alt="Illustration Hero Top"
        width={500}
        height={500}
        className="absolute top-20 right-0 z-0"
      />
    </Container>
  );
}
