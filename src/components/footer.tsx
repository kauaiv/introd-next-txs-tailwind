import Image from "next/image";
import Logo from "@/assets/logo.svg";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";

export function Footer() {
  return (
    <div className="bg-roxo1">
        <div className=" h-auto w-auto flex justify-evenly items-center pt-1">


          <div className="w-20 h-16 flex items-center text-xs">
            <p className="text-roxo2 text-opacity-60">
              Endereço
              <br />
              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-300 hover:duration-500 underline text-xss"
              >
                Rua CimatecJr
              </a>
            </p>
          </div>


          <div className="border-l border-r border-white border-opacity-25 border- w-32 h-16 flex justify-center items-center">
            <Image className="w-14 h-14" src={Logo} alt={"Logo"}></Image>
          </div>


          <div className="w-20 h-16 flex flex-col items-start justify-center text-roxo2 text-opacity-60 text-xs">
            <div>
              <p >
                Contato:
                <br />
              </p>
            </div>
            <div className="-mt-1">
              <p>
                <a
                  href="https://wa.me/5571999998888"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-300 hover:duration-500 underline text-xss">
                  (71) 99999-8888
                </a>
              </p>
            </div>
            <div className="flex justify-evenly gap-4 mt-1">
              <FaInstagram className="text-white text-xs cursor-pointer text-opacity-60" />
              <FaFacebook className="text-white text-xs cursor-pointer text-opacity-60" />
              <FaWhatsapp className="text-white text-xs cursor-pointer text-opacity-60" />
            </div>
          </div>


        </div>
        <p className="text-white text-center text-xss mx-4 text-opacity-40 pb-2">
          ©2024-CitySneackers - Todos os direitos reservados
        </p>
    </div>
  );
}
