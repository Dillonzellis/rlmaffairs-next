import { CTAHome } from "@/components/pages/home/CTAHome";
import { FeatSection } from "@/components/pages/home/FeatSection";
import { FullImgSection } from "@/components/pages/home/FullImgSection";
import { HomeSlider } from "@/components/pages/home/HomeSlider";
import { MarqueeSection } from "@/components/pages/home/MarqueeSection";
import { SmallFeats } from "@/components/pages/home/SmallFeats";
import { Welcome } from "@/components/pages/home/Welcome";
import Image from "next/image";

// TODO: Fix all shadows
// TODO: add onscroll loadin animations

export default function Home() {
  return (
    <main>
      <div className="pb-4 pt-2">
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
      <FeatSection
        imgLeft
        imgSrc="/venue-feat.png"
        imgAlt={""}
        heading="Venue Feature"
        body="Floral Showroom: RLM Affairs is a full-service florist serving North Georgia for 40 years. Our award winning designers offer exquisite attention to detail. Whether it’s a single rose or decor for an entire Gala every bloom is hand picked and sourced eco friendly. Our retail storefront offers modern & unique items keeping everyone in mind"
        linkLabel="schedule a tour"
        link="/"
      />
      <FullImgSection />
      <div className="relative">
        <Image
          src="/leaves-right-2.png"
          alt=""
          width={119}
          height={440}
          className="absolute right-0 top-1/3"
        />
        <FeatSection
          imgSrc="/catering-feat.png"
          imgAlt={""}
          heading="Renowned Catering"
          body="Floral Showroom: RLM Affairs is a full-service florist serving North Georgia for 40 years. Our award winning designers offer exquisite attention to detail. Whether it’s a single rose or decor for an entire Gala every bloom is hand picked and sourced eco friendly. Our retail storefront offers modern & unique items keeping everyone in mind"
          linkLabel="have a taste"
          link={""}
        />
      </div>
      <HomeSlider />
      <MarqueeSection />
    </main>
  );
}
