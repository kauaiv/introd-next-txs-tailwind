import Image from "next/image";
import Marca1 from "@/assets/marca1.svg";
import Marca2 from "@/assets/marca2.svg";
import Marca3 from "@/assets/marca3.svg";

export function Marcas() {
  return (
    <div className="bg-gradient-radial from-roxo4 to-customPurple-200 w-screen flex flex-col">


      <div className="mt-8 lg:mt-12 flex justify-center">
        <p className="relative text-3xl font-bold ">
          Nossas Marcas
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 h-0.5 bg-black bg-opacity-60" />
        </p>
      </div>

      <div className="mt-6  flex flex-col gap-7 lg:gap-12 text-xs text-justify">
      
        <div className="flex justify-center items-center bg-customPurple-800 rounded-3xl h-36 w-11/12 lg:w-7/12 mx-auto">
          <Image className="w-28 h-28 ml-8" src={Marca1} alt={""}></Image>
          <p className="ml-4 mr-6 text-white">
            A New Balance se destaca por qualidade, conforto e designs inovadores. Oferece modelos variados para corrida, treino e uso casual, combinando estilo e desempenho.
          </p>
        </div>

        <div className="flex justify-center items-center bg-customPurple-800 rounded-3xl h-36 w-11/12 lg:w-7/12 mx-auto">
          <Image className="w-28 h-28 ml-8" src={Marca2} alt={""}></Image>
          <p className="ml-4 mr-6 text-white">
            A Nike lidera com tecnologia e estilo em tênis esportivos. De clássicos a lançamentos, garante conforto e performance para atletas e entusiastas.
          </p>
        </div>

        <div className="flex justify-center items-center bg-customPurple-800 rounded-3xl h-36 w-11/12 lg:w-7/12 mx-auto">
          <Image className="w-28 h-28 ml-8" src={Marca3} alt={""}></Image>
          <p className="ml-4 mr-6 text-white">
          A Adidas é reconhecida por design contemporâneo e icônicos modelos esportivos. Para esporte ou casualidade, seus tênis unem conforto, qualidade e estilo.
          </p>
        </div>      

      </div>

      <div>
        <p className="p-5 text-center font-semibold text-customPurple-700">Descubra mais sobre as marcas mais famosas do mercado, exclusivas aqui na CitySneakers!</p>
      </div>

    </div>
  );
}
