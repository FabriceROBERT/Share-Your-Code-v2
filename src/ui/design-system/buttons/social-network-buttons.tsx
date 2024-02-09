import { footerSocialNetworksLinks } from "@/ui/components/navigation/app-links";
import { v4 as uuidv4 } from "uuid";
import { Buttons } from "./buttons";
import { RiFacebookBoxFill } from "react-icons/ri";
import clsx from "clsx";
import { LinkTypes } from "@/lib/link-type";

interface Props {
  theme?: "gray" | "accent" | "secondary";
  className?: string;
}

export const SocialNetworksButtons = ({
  className,
  theme = "accent",
}: Props) => {
  const icoList = footerSocialNetworksLinks.map((socialNetwork) => (
    <Buttons
      key={uuidv4()}
      icon={{
        icon: socialNetwork.icon ? socialNetwork.icon : RiFacebookBoxFill,
      }}
      iconTheme={theme}
      variant="ico"
      baseUrl={socialNetwork.baseUrl}
      linkType={socialNetwork.type}
    />
  ));

  return (
    <div className={clsx((className = "flex items-center gap-2.5"))}>
      {icoList}{" "}
    </div>
  );
};
