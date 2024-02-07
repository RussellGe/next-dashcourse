import Image from "next/image";
import giraffe from "@/public/images/giraffe3.jpg";
export default async function Home() {
  return (
    <main>
      <Image
        src="https://bit.ly/react-cover"
        fill
        className="object-cover"
        alt="giraffe"
        sizes="(min-width: 480px) 100vw, (min-width: 768px) 50vw, 33vw"
      ></Image>
    </main>
  );
}
