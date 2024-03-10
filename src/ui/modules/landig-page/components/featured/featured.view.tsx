import Container from "@/ui/components/container/container";
import React from "react";
import Avatar from "../../../../../../public/assets/images/avatar.png";
import { features } from "process";
import { v4 as uuidv4 } from "uuid";
import Typography from "@/ui/design-system/typographie/typography";
import Image from "next/image";

// Je créer l'interface des objets
interface FeaturesListInterface {
  imagePath: string;
  imageAlt: string;
  title: string;
  description?: string;
}

//  J'ajoute en 4 fois les données aux objets featuresData qui prend en paramètre l'interface FeaturesInterface[]
const featuresData: FeaturesListInterface[] = [
  {
    imagePath: "/assets/images/avatar.png",
    imageAlt: "Illustration",
    title: "Ressources",
    description: "Consulte et partage des ressouces pour les devs",
  },
  {
    imagePath: "/assets/images/avatar.png",
    imageAlt: "Illustration",
    title: "Entrainement",
    description: "Entraine-toi à devenir meilleur et trouve de l'inspiration",
  },
  {
    imagePath: "/assets/images/avatar.png",
    imageAlt: "Illustration",
    title: "Visibilité",
    description: "Exporte tes projets et crée toi des opportunités",
  },
  {
    imagePath: "/assets/images/avatar.png",
    imageAlt: "Illustration",
    title: "Relations",
    description: "Connecte-toi avec des devs web et booste ta carrière",
  },
];

export default function FeaturedView() {
  // variable featuredLists affiche les 4
  const featuredLists = featuresData.map((features) => (
    <div
      key={uuidv4()}
      className="flex flex-col items-center bg-white rounded p-7 "
    >
      <div className="w-[130px] h-[130px] rounded-full mb-6 p-10 relative overflow-hidden">
        <Image
          fill
          src={features.imagePath}
          alt={features.imageAlt}
          className="object-scale-down"
        />
        <Image
          fill
          src={features.imagePath}
          alt={features.imageAlt}
          className="object-scale-down blur-2xl"
        />
      </div>
      <Typography
        variant="lead"
        component="h3"
        weight="medium"
        className="text-center mb-2.5"
      >
        {features.title}
      </Typography>
      <Typography
        component="p"
        theme="gray"
        variant="body-base"
        className="text-center"
      >
        {features.description}
      </Typography>
    </div>
  ));
  return (
    <div className="bg-gray-300">
      <Container className="grid grid-cols-12 gap-24 py-24">
        <div className="col-span-7 grid grid-cols-2">{featuredLists} </div>
        <div className="  col-span-5"></div>
      </Container>
    </div>
  );
}
