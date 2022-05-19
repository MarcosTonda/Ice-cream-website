import React from "react";
import facebook from "./Images/facebook.png";
import instagram from "./Images/instagram.png";
import messenger from "./Images/messenger.png";
import telegram from "./Images/telegram.png";
import twitter from "./Images/twitter.png";
import whatsapp from "./Images/whatsapp.png";

const SocialMedia = () => {
  return (
    <div className="grid content-center max-w-full text-center bg-blue-300 gap-y-16 h-80 sm:grid-row-2">
      <div className="font-sans:'Roboto' text-xl font-semibold lg:text-2xl">
        <p>Nuestras Redes Sociales</p>
      </div>

      <div className="flex justify-center gap-5 flex-nowrap">
        <a href=".">
          <img
            className="w-10 h-10 rounded-full hover:bg-white"
            src={facebook}
            alt="facebook"
          ></img>
        </a>
        <a href=".">
          <img
            className="w-10 h-10 rounded-full hover:bg-white"
            src={instagram}
            alt="instagram"
          ></img>
        </a>
        <a href=".">
          <img
            className="w-10 h-10 rounded-full hover:bg-white"
            src={messenger}
            alt="messenger"
          ></img>
        </a>
        <a href=".">
          <img
            className="w-10 h-10 rounded-full hover:bg-white"
            src={telegram}
            alt="telegram"
          ></img>
        </a>
        <a href=".">
          <img
            className="w-10 h-10 rounded-full hover:bg-white"
            src={twitter}
            alt="twitter"
          ></img>
        </a>
        <a href=".">
          <img
            className="w-10 h-10 rounded-full hover:bg-white"
            src={whatsapp}
            alt="whatsapp"
          ></img>
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
