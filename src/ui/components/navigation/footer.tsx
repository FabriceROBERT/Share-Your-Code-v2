import React from "react";
import Container from "../container/container";
import Typographie from "@/ui/design-system/typographie/typographie";
import Image from "next/image";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="  bg-gray">
      <Container className="flex justify-between pt-16">
        <div className="flex flex-col items-center gap-1">
          <Typographie variant="caption1" theme="white" weight="medium">
            Contribution de projets
          </Typographie>
          <Typographie variant="caption3" theme="gray">
            Rejoins la chaîne
          </Typographie>
          <div className="flex flex-row gap-5 justify-center align-baseline">
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
          </div>
        </div>
        <div className="">Liste de liens</div>
      </Container>
      <Container>
        <hr className="text-gray-500" />
        <div className="flex items-center justify-between">
          <Typographie variant="caption4" theme="gray">
            {`Copyright © ${currentYear}| Propulsed by `}{" "}
            <a href="https://portfolio-v3-fabricerobert.vercel.app/">
              {`Fabrice ROBERT - Share Your
            Code`}
            </a>
          </Typographie>
          <div className="">2</div>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
