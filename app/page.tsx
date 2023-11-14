import Image from "next/image";
import { Welcome } from "@/components/pages/home/Welcome";
import { SmallFeats } from "@/components/pages/home/SmallFeats";
import { CTAHome } from "@/components/pages/home/CTAHome";
import { FeatSection } from "@/components/pages/home/FeatSection";
import { FullImgSection } from "@/components/pages/home/FullImgSection";

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
      <SmallFeats />
      <CTAHome />
      <FeatSection />
      <FullImgSection />
    </main>
  );
}
