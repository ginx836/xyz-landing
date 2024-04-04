import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#010851] md:px-14 p-4 max-w-screen-2xl mx-auto text-white">
      <div className="my-12 flex flex-col md:flex-row gap-10">
        <div className="md:w-1/2 space-y-8">
          <a
            href="/"
            className="text-2xl font-semibold flex items-center space-x-3 text-white"
          >
            ARES
          </a>
          <p className="md:w-1/2 text-tertiary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere vero
            earum consequuntur repellendus nobis vitae quia commodi explicabo.
            Atque distinctio accusantium sit doloremque tempore consequuntur
            aliquam quibusdam ipsum voluptatibus sequi.
          </p>
          <div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Votre email"
              className="bg-[#9a7af159] py-2 px-4 rounded-md focus:outline-none"
            />
            <input
              type="submit"
              value="Subscribe"
              className="px-4 py-2 bg-secondary rounded-md cursor-pointer hover:bg-white hover:text-primary transition-all duration-300"
            />
          </div>
        </div>
        {/* footer navigation */}
        <div className="md:w-1/2 flex flex-col md:flex-row flex-wrap justify-between gap-8">
          <div className="space-y-4 mt-5">
            <h4 className="text-xl">Structure du site</h4>
            <ul className="space-y-3">
              <a href="/" className="block hover:text-gray-300">
                Aperçu
              </a>
              <a href="/" className="block hover:text-gray-300">
                Fonctionnalités
              </a>
              <a href="/" className="block hover:text-gray-300">
                A propos
              </a>
              <a href="/" className="block hover:text-gray-300">
                Tarifs
              </a>
            </ul>
          </div>
          <div className="space-y-4 mt-5">
            <h4 className="text-xl">Aide</h4>
            <ul className="space-y-3">
              <a href="/" className="block hover:text-gray-300">
                Comment cela fonctionne ?
              </a>
              <a href="/" className="block hover:text-gray-300">
                Où poser mes questions ?
              </a>
              <a href="/" className="block hover:text-gray-300">
                Comment participer ?
              </a>
              <a href="/" className="block hover:text-gray-300">
                Quels sont les avantages ?
              </a>
            </ul>
          </div>
          <div className="space-y-4 mt-5">
            <h4 className="text-xl">Contact</h4>
            <ul className="space-y-3">
              <p className="block hover:text-gray-300">+33 0102030405</p>
              <p className="block hover:text-gray-300">12 ruye du lac</p>
              <p className="block hover:text-gray-300">75000 PARIS</p>
              <p className="block hover:text-gray-300">test@test.com</p>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex flex-col sm:flex-row gap-8 sm:items-center justify-between my-8">
        <p>@ ARES --- 2024. Tous droits réservés</p>
        <div className="flex items-center space-x-4">
          <a href="/" className="text-white cursor-pointer hover:-translate-y-4 trnasition-all duration-300">
            <AiOutlineFacebook size={30} />
          </a>
          <a href="/" className="text-white cursor-pointer hover:-translate-y-4 trnasition-all duration-300">
            <FaXTwitter size={30} />
          </a>
          <a href="/" className="text-white cursor-pointer hover:-translate-y-4 trnasition-all duration-300">
            <AiOutlineInstagram size={30} />
          </a>
          <a href="/" className="text-white cursor-pointer hover:-translate-y-4 trnasition-all duration-300">
            <AiOutlineLinkedin size={30} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
