import LatestPhones from "@/components/LatestPhones";
import PhonesWithAI from "@/components/PhonesWithAI";
import PopularMobileBrands from "@/components/PopularMobileBrands";
import PopularPhones from "@/components/PopularPhones";
import UpcomingPhones from "@/components/UpcomingPhones";

export default function Home() {
  return (
    <div>
      <PopularPhones />
      <PhonesWithAI />
      <LatestPhones />
      <PhonesWithAI />
      <UpcomingPhones />
      <PopularMobileBrands />
    </div>
  );
}
