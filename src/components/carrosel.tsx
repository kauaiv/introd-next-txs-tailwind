import Image, { StaticImageData } from "next/image" 

interface CarroselProps{
   img: StaticImageData; 
}   

export function Carrosel({ img } : CarroselProps){
  return(
      <div className=" m-0 p-0 w-screen flex  ">
          <Image src={img} alt={"Banner"}></Image>            
      </div>
  );
}
