import { IconProps } from "@/types/iconProps";
import clsx from "clsx";
import { Spinner } from "../spinner/spinner";
import { LinkType, LinkTypes } from "@/lib/link-type";
import Link from "next/link";
import React from "react";
interface Props {
  size?: "small" | "medium" | "large";
  variant?: "accent" | "secondary" | "outline" | "disabled" | "ico";
  icon?: IconProps;
  iconTheme?: "accent" | "secondary" | "gray";
  iconPosition?: "left" | "right";
  disabled?: boolean;
  isLoading?: boolean;
  children?: React.ReactNode;
  baseUrl?: string;
  linkType?: LinkType;
  // Va jouer la fonction qui lui sera transmise
  action?: Function;
}
// Autre maniere d'ecrire export const Button = ({size = "medium", variant ="accent"...}: Props)
export const Buttons: React.FC<Props> = ({
  // Par default
  size = "medium",
  variant = "accent",
  icon,
  iconTheme = "accent",
  iconPosition = "right",
  disabled,
  isLoading,
  children,
  baseUrl,
  linkType = "internal",
  action = () => {},
}) => {
  let variantStyle: string = "",
    sizeStyle: string = "",
    icoSize: number = 0;
  switch (variant) {
    case "accent": //Default
      variantStyle = "bg-primary hover:bg-primary-400/80 text-white rounded";
      break;
    case "secondary":
      variantStyle =
        "bg-primary-200 hover:bg-primary-300/50 text-primary rounded";
      break;
    case "outline":
      variantStyle =
        "bg-white hover:bg-gray-400/50 border border-gray-500 text-gray-900 rounded";
      break;
    case "disabled":
      variantStyle =
        "bg-gray-400 border border-gray-500 text-gray-600 cursor-not-allowed rounded";
      break;
    case "ico":
      if (iconTheme === "accent") {
        variantStyle =
          "bg-primary hover:bg-primary-400/80 text-white rounded-full";
      }
      if (iconTheme === "secondary") {
        variantStyle =
          "bg-primary hover:bg-primary-300/80 text-white rounded-full";
      }
      if (iconTheme === "gray") {
        variantStyle = "bg-gray-800 hover:bg-gray-700 text-white rounded-full";
      }

      break;
  }

  switch (size) {
    case "small":
      sizeStyle = `text-caption3  font-medium"; ${
        variant === "ico"
          ? "flex justify-center items-center w-[40px] h-[40px] "
          : "py-[14px] px-[12px]"
      }`;
      icoSize = 18;
      break;

    case "medium": //Default
      sizeStyle = `text-caption2  ${
        variant === "ico"
          ? "flex justify-center items-center w-[50px] h-[50px]"
          : "px-[15px] py-[18px] "
      }  font-medium`;
      icoSize = 20;

      break;
    case "large":
      sizeStyle = `text-caption1  ${
        variant === "ico"
          ? "flex justify-center items-center w-[60px] h-[60px]"
          : "px-[18px] py-[22px] "
      } font-medium;`;
      icoSize = 24;

      break;
  }

  const buttonContent = (
    <div>
      {isLoading && (
        <div className="absolute flex inset-0 items-center justify-center">
          {variant === "accent" || variant === "ico" ? (
            <Spinner size="small" variant="white" />
          ) : (
            <Spinner size="small" variant="primary" />
          )}
        </div>
      )}
      <div className={clsx(isLoading && "invisible")}>
        {icon && variant === "ico" ? (
          <icon.icon size={icoSize} />
        ) : (
          <div className={clsx(icon && "flex  items-center gap-1")}>
            {icon && iconPosition === "left" && <icon.icon size={icoSize} />}
            {children}
            {icon && iconPosition === "right" && <icon.icon size={icoSize} />}
          </div>
        )}
      </div>
    </div>
  );

  const handleClick = () => {
    if (action) action();
  };

  const buttElement = (
    <button
      type="button"
      className={clsx(
        variantStyle,
        sizeStyle,
        icoSize,
        isLoading && "cursor-wait",
        "relative animate"
      )}
      onClick={handleClick}
      disabled={disabled}
    >
      {buttonContent}
    </button>
  );

  if (baseUrl) {
    if (linkType === LinkTypes.EXTERNAL) {
      return (
        <a href={baseUrl} target="_blank">
          {buttElement}
        </a>
      );
    } else {
      return <Link href={baseUrl}>{buttElement}</Link>;
    }
  }
  return buttElement;
};
