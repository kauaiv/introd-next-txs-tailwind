import Image, { StaticImageData } from "next/image" 

interface ProdutoProps{
   img: StaticImageData;
   bottomtext: string;
   text: string; 
}

export function Produto({ img , bottomtext, text} : ProdutoProps){
    return (
        <div className="bg-gradient-to-t from-roxo4 to-customPurple-200 w-screen flex flex-col">
    
          <div className="mt-12 flex justify-center">
            <p className="relative text-3xl font-bold">
              Novidades do Mês!
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 h-0.5 bg-black bg-opacity-60" />
            </p>
          </div>
    
          <div className="flex justify-center -mt-12">
            <Image src={img} alt={"Sapato"} className="w-max h-max lg:w-96 lg:h-96 lg:mb-6"></Image>
          </div>
    
          <div className="flex justify-center items-center p-4 -mt-36  bg-roxo4 w-7/12 text-white rounded-lg shadow-md hover:bg-roxo5 hover:duration-1000 cursor-pointer mx-auto lg:w-3/12 ">
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center"
            >
              {bottomtext}
            </a>
          </div>
    
          <div className="p-6 text-center font-semibold text-customPurple-300">
            <p>
            {text}
            </p>
          </div>
        </div>
      );
}
