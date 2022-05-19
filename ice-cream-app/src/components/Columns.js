import React from "react";
import { CakeIcon } from "@heroicons/react/outline";
import { PhoneIncomingIcon } from "@heroicons/react/outline";
import { HeartIcon } from "@heroicons/react/outline";
import { EmojiHappyIcon } from "@heroicons/react/outline";

const Columnas = () => {
  return (
    <div className="font-sans:'Roboto' mt-10 ml-10 mr-10">
      <div className="flex content-center justify-center">
        <h1 className="mt-4 mb-4 text-4xl font-semibold">
          ¿Por qué elegir helados{" "}
          <span className="font-serif text-4xl font-semibold text-cyan-400">
            Luna Ice
          </span>{" "}
          ?{" "}
        </h1>
      </div>
      <div className="ml-4 mr-4">
        <div className="grid gap-10 mt-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div className="bg-white-200">
            <CakeIcon className="w-8 h-8 mt-4 ml-4 text-gray-600" />
            <h2 className="mt-2 mb-6 font-sans:'Roboto' text-xl font-semibold">
              Descubre nuestros sabores!
            </h2>
            <p className="text-justify">
              Descubre sabores que nunca te hubieras imaginado encontrar en un
              helado. Te enseñaremos además cómo y quiénes los crean. Sabores
              tradicionales y exóticos, siempre con la máxima calidad.
            </p>
          </div>
          <div className="bg-white-200">
            <PhoneIncomingIcon className="w-8 h-8 mt-4 ml-4 text-gray-600" />
            <h2 className="mt-2 mb-6 font-sans:'Roboto' text-xl font-semibold">
              Podemos endulzar tus fiestas
            </h2>
            <p className="text-justify">
              Ofrecemos grandes formatos para que puedas disfrutar de nuestros
              deliciosos helados en tu fiesta de bodas o cualquier festejo a
              precios realmente convenientes.
            </p>
          </div>
          <div className="bg-white-200">
            <HeartIcon className="w-8 h-8 mt-4 ml-4 text-gray-600" />
            <h2 className="mt-2 mb-6 font-sans:'Roboto' text-xl font-semibold">
              Ayuda a tu comunidad
            </h2>
            <p className="text-justify">
              Nuestra producción está orientada al KM 0, por lo que compramos
              los ingredientes a productores cercanos, y en los casos en los que
              es posible, a productores locales.
            </p>
          </div>
          <div className="bg-white-200">
            <EmojiHappyIcon className="w-8 h-8 mt-4 ml-4 text-gray-600" />
            <h2 className="mt-2 mb-6 font-sans:'Roboto' text-xl font-semibold">
              Disfruta de la mejor calidad
            </h2>
            <p className="text-justify">
              Somos muy estrictos con nuestros controles de calidad, que van
              desde el agua a cada uno de los ingredientes, por lo que podemos
              garantizarte que nuestros helados son los mejores de Argentina.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Columnas;
