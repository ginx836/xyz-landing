import Banner from "../shared/Banner";
import banner from "../assets/banner.png";


const Home = () => {
  return (
    <div className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-24" id="home">
      <Banner
        banner={banner}
        heading="Développez vos compétences"
        subheading="Apprendre et développer ces compétences aisément avec notre programme d'entrainement sur-mesure"
        btn1={"Inscription"}
        btn2={"Offres spéciales"}
      />
      
    </div>
  );
};

export default Home;
