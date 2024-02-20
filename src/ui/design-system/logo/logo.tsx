import Image from "next/image";

interface Props {
  size?: "very-small" | "small" | "medium" | "large";
}

export const Logo = ({ size = "medium" }: Props) => {
  let sizeLogo: number;

  switch (size) {
    case "very-small":
      sizeLogo = 34;

      break;

    case "small":
      sizeLogo = 61;

      break;

    case "medium": //Default
      sizeLogo = 88;

      break;

    case "large":
      sizeLogo = 140;

      break;
  }
  return (
    <div>
      <Image
        src="https://doodleipsum.com/700/abstract?i=3628ed72497c3380a9d8ed5b28324b4e"
        width={50}
        height={50}
        alt=""
      />
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        width={sizeLogo}
        viewBox="0 0 80.3 80.3"
      >
        <circle cx="40.2" cy="40.2" r="40.2" fill="#f6a09c" />
        <path
          d="M67.7 56.2c0 .7-.5 1.2-1.2 1.2H13.8c-.7 0-1.2-.5-1.2-1.2V17.4c0-.7.5-1.2 1.2-1.2h52.8c.7 0 1.2.5 1.2 1.2v38.8z"
          fill="#fff"
        />
        <path d="M29.8 56.3h20.7v7H29.8z" fill="#bababa" />
        <path d="M15.5 18.6h49.3v30.5H15.5z" fill="#0c2c48" />
        <path
          d="M12.6 48.1v8.1c0 .7.5 1.2 1.2 1.2h52.8c.7 0 1.2-.5 1.2-1.2v-8.1H12.6zM55.7 68.1v-2.2c0-1.7-1.3-3-3-3h-25c-1.7 0-3 1.3-3 3v2.2h31z"
          fill="#55ab99"
        />
        <circle cx="40.2" cy="52.5" r="1.5" fill="#0c2c48" />
      </svg>{" "} */}
    </div>
  );
};
