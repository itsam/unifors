import Image from "next/image";

export const Logo = (props) => {
  return (
    <Image
      src="/images/erasmus.svg"
      width={175}
      height={50}
      alt="Life cycle assessment workflow"
    />
  );
};
