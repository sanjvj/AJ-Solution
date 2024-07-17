import { Footer } from "../Components/Footer";
import {ServiceIntro} from "../Components/ServiceIntro";
import { ServiceHero } from "../Components/ServiceHero";
import { ServiceCard } from "../Components/ServiceCard";
import {FooterAnimation} from "../Components/FooterAnimation"
export function Services() {
  return (
    <div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <ServiceIntro></ServiceIntro>
      <ServiceHero></ServiceHero>
      <ServiceCard></ServiceCard>
      </div> 
      <FooterAnimation></FooterAnimation>
      <Footer></Footer>
      
    </div>
  );
}
