import Image from "next/image";
import { Welcome } from "@/components/pages/home/Welcome";

export default function Home() {
  return (
    <main>
      <div className="py-4">
        <Image
          className="mx-auto"
          src="/hero-vid-placeholder.png"
          alt=""
          width={1207}
          height={688}
        />
      </div>
      <Welcome />
    </main>
  );
}
