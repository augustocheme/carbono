import Image from "next/image";

export default function Picture({ src, alt, ...props }) {
  return <Image src={src} alt={alt} />;
}
