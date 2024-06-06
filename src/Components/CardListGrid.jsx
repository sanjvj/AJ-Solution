import { CardList } from "./CardList";

const PHOTOS = [
  {
    img: "webdev.png",
    title: "E-commerce Development",
    content:
      "Ecommerce website(online shopping website) also known as E-Business website, is the process of customer shopping online and processing their payment. Customer can visit online shopping website to find their products, add them to their cart with the help of payment gateways customer can pay using their cards or online banking to complete the purchase. If the customer needs to pay on time of delivery they can choose on making payment. We are leading web design company in Coimbatore",
    button: "E-commerce websites",
  },
  {
    img: "mobile.png",
    title: "Mobile App Development",
    content:
      "Our team experise in developing mobile applications for Android & iOS platforms along with the proficiency in creating applications be it native or hybrid mobile apps. We are offering a high functionality Mobile Application to our business people. Our expert team of talented developers create the quality mobile application by bridging the user specification and latest technologies used in the industry.",
    button: "Mobile Apps",
  },
];
export const CardListGrid = () => {
  return (
    <div>
      <CardList
        img1={PHOTOS[0].img}
        title1={PHOTOS[0].title}
        content1={PHOTOS[0].content}
        button1={PHOTOS[0].button}
        img2={PHOTOS[1].img}
        title2={PHOTOS[1].title}
        content2={PHOTOS[1].content}
        button2={PHOTOS[1].button}
      ></CardList>
    </div>
  );
};
