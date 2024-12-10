import AboutComponent from "@/components/AboutComponent";
import HomeSwiperSection from "@/components/HomeSwiperSection";
import CatalogueSection from "@/components/CatalogueSection";
import CompanySection from "@/components/CompanySection";
import HeroSection from "@/components/HeroSection";
import OfficeSwiperSection from "@/components/OfficeSwiperSection";
import ReviewSection from "@/components/ReviewSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CompanySection />
      <AboutComponent />
      <CatalogueSection />
      <HomeSwiperSection />
      <OfficeSwiperSection />
      <ReviewSection />
    </>
  );
}
