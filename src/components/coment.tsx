import Image from "next/image";
import Pessoa1 from "@/assets/pessoa1.svg";


export function Coment() {
  return (
    <div className="bg-white flex flex-col">
      
      <div className="mt-10 flex justify-center">
        <p className="relative text-3xl font-bold">
          Feedbacks
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 h-0.5 bg-black bg-opacity-60"> </div>
        </p>
      </div>

      <div className=" flex flex-col items-center text-sm">

        <div className="bg-customPurple-700 mt-6 h-36 rounded-3xl w-8/12 text-white">
          
          <div className="flex lg:ml-8">
            <div >
              <Image src={Pessoa1} alt={""} className="ml-6 mt-4 h-12 w-12 "></Image>
            </div>

            <div>
              <p className="ml-3 mt-5 ">Fulano</p>
              <p className="ml-3 -mt-1 text-xss opacity-60">@fulano</p>
            </div>
          </div>

          <div className="flex flex-col text-xs lg:ml-10 ">
            <p className="ml-4 mr-4 mt-2">
            Estilo incrível! Os modelos dessa loja são modernos e únicos. Adorei o design dos sneakers, super estilosos!
            </p>
          </div>

        </div>
        
        <div className="bg-customPurple-700 mt-4 h-36 rounded-3xl w-8/12 text-white">
          
          <div className="flex lg:ml-8">
            <div >
              <Image src={Pessoa1} alt={""} className="ml-6 mt-4 h-12 w-12 "></Image>
            </div>

            <div>
              <p className="ml-3 mt-5 ">Fulano</p>
              <p className="ml-3 -mt-1 text-xss opacity-60">@fulano</p>
            </div>
          </div>

          <div className="flex flex-col text-xs lg:ml-10">
            <p className="ml-4 mr-4 mt-2">
            Estilo incrível! Os modelos dessa loja são modernos e únicos. Adorei o design dos sneakers, super estilosos!
            </p>
          </div>

        </div>

        <div className="bg-customPurple-700 mt-4 mb-6 h-36 rounded-3xl w-8/12 text-white">
          
          <div className="flex lg:ml-8">
            <div >
              <Image src={Pessoa1} alt={""} className="ml-6 mt-4 h-12 w-12 "></Image>
            </div>

            <div>
              <p className="ml-3 mt-5 ">Fulano</p>
              <p className="ml-3 -mt-1 text-xss opacity-60">@fulano</p>
            </div>
          </div>

          <div className="flex flex-col text-xs lg:ml-10 ">
            <p className="ml-4 mr-4 mt-2">
            Estilo incrível! Os modelos dessa loja são modernos e únicos. Adorei o design dos sneakers, super estilosos!
            </p>
          </div>

        </div>


      </div>



    </div>
  );
}
