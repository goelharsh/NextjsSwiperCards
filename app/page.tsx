import LatestPhones from "@/components/LatestPhones";
import PhonesWithAI from "@/components/PhonesWithAI";
import PopularComparison from "@/components/PopularComparison";
import PopularMobileBrands from "@/components/PopularMobileBrands";
import PopularPhones from "@/components/PopularPhones";
import ProductFinder from "@/components/ProductFinder";
import UpcomingPhones from "@/components/UpcomingPhones";

export default function Home() {
  return (
    <div>
      <ProductFinder />
      <PopularPhones />
      <PhonesWithAI />
      <LatestPhones />
      <UpcomingPhones />
      <PopularComparison />
      <PopularMobileBrands />
    </div>
  );
}
