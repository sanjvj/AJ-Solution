import { Footer } from "../Components/Footer";
import {ServiceIntro} from "../Components/ServiceIntro";
import { ServiceHero } from "../Components/ServiceHero";
import { ServiceCard } from "../Components/ServiceCard";
import {FooterAnimation} from "../Components/FooterAnimation"
import { Topbar } from "../Components/Topbar";
export function Services() {
  return (
    <div>
    <Topbar></Topbar>
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
