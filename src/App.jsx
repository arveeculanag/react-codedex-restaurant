import Header from "./components/Header";
import Menu from "./components/Menu";

import "./App.css";
import { useState } from "react";
import OrderForm from "./components/OrderForm";
import Footer from "./components/Footer";

function App() {
  const menuArray = [
    {
      menuName: "Flaming Burger",
      menuDescription:
        "Indulge in fiery flavors! Our flaming burger sizzles with tantalizing spices, igniting your taste buds with every bite. Seared to perfection, this culinary masterpiece delivers a symphony of heat and savory goodness. Dare to taste the inferno? 🔥🍔 #FlameGrilled  #BurgerBliss #SizzleAndSavor ",
      menuImage:
        "https://images.pexels.com/photos/23744954/pexels-photo-23744954/free-photo-of-burger-served-in-a-restaurant.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1/",
      imageArtistLink: "https://www.pexels.com/@nadin-sh-78971847/",
      artistName: "Nadin Sh",
    },
    {
      menuName: "Healthy Waffle",
      menuDescription:
        "Embrace wellness with every bite! Our healthy waffle bursts with wholesome ingredients, offering a delightful blend of nourishment and flavor. Crisp on the outside, fluffy on the inside, it's a guilt-free indulgence that satisfies both your taste buds and your well-being goals. 🌿🥞 #NutritiousNosh #WaffleWonder #HealthyIndulgence",
      menuImage:
        "https://images.pexels.com/photos/23641042/pexels-photo-23641042/free-photo-of-pasta-served-in-a-restaurant.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      artistName: "Layanne Aguiar",
      imageArtistLink: "https://www.pexels.com/@layanne-aguiar-500650789/",
    },
    {
      menuImage:
        "https://images.pexels.com/photos/20157982/pexels-photo-20157982/free-photo-of-plate-of-sushi-in-a-restaurant.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      menuName: "Amazing Sushi",
      menuDescription:
        "Embark on a culinary adventure! Our amazing sushi delights with a symphony of flavors and artistry. Crafted with the freshest ingredients and expert precision, each bite is a journey to Japan's culinary heart. Elevate your dining experience with every roll, savoring the essence of tradition and innovation. 🍣✨ #SushiSplendor #ArtOfSushi #TasteTheCraftsmanship",
      imageArtistLink: "https://www.pexels.com/@nadin-sh-78971847/",
      artistName: "Nadin Sh",
    },
  ];

  const [menu] = useState(menuArray);

  return (
    <>
      <main>
        <Header></Header>
        <Menu menu={menu} hello={"Hello"}></Menu>
        <OrderForm />
      </main>
      <Footer />
    </>
  );
}

export default App;
