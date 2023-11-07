import React from "react";
import Container from "../container/container";
import Typographie from "@/ui/design-system/typographie/typographie";
import Image from "next/image";

function Footer() {
  return (
    <div className="py-40  bg-gray">
      <Container className="flex justify-between pt-16">
        <div className="flex flex-col items-center gap-1">
          <Typographie variant="caption1" theme="white" weight="medium">
            Contribution de projets
          </Typographie>
          <Typographie variant="caption3" theme="gray">
            Rejoins la chaîne
          </Typographie>
          <div className="flex flex-row gap-5">
            <a href="https://github.com/FabriceROBERT" target="_blacnk">
              <Image
                src="/assets/svg/github.svg"
                //width : 229 , height : 216
                width={100}
                height={100}
                alt=""
              />
            </a>
            <a href="https://github.com/FabriceROBERT" target="_blacnk">
              <Image
                src="/assets/svg/github.svg"
                width={100}
                height={100}
                alt=""
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
                alt=""
              />
            </a>
          </div>
        </div>
        <div className=""></div>
      </Container>
    </div>
  );
}

export default Footer;
