import { Footer } from "../Components/Footer";
import { Service } from "../Components/Service";
import { Topbar } from "../Components/Topbar";

export function Services() {
  return (
    <div>
      <Topbar></Topbar>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
      <Service></Service>
      </div>
      
    
      <Footer></Footer>
      
    </div>
  );
}
