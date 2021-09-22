import Image from "next/image";

export const Logo = (props) => {
  return (
    <>
      <Image
        src="/images/logo_unifors.png"
        width={100}
        height={100}
        alt="UNIFORS logo capital U"
      />
      <Image
        src="/images/erasmus.svg"
        width={175}
        height={50}
        alt="Erasmus+ logo european flag"
      />
    </>
  );
};
