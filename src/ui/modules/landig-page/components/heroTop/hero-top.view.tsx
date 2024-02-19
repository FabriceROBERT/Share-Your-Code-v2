import Container from "@/ui/components/container/container";
import Image from "next/image";
import React from "react";

export default function HeroTopView() {
  return (
    <Container>
      <div>
        <Image
          src="https://doodleipsum.com/700/flat?i=72146f9a9265527cc8a4010e4db98bd1"
          alt="Illustration Hero Top"
          width={500}
          height={500}
          className=""
        />
      </div>
    </Container>
  );
}
