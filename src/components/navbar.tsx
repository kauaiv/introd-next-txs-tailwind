import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/logo.svg"

export function NavBar() {
  return (
    <div className="bg-roxo1 px-6 lg:px-20 py-1 flex flex-wrap items-center justify-between ">
      {/* <h1 className=" text-4xl text-white md:mx-10">Site</h1> */}
      <Image className="w-12 h-12" src={Logo} alt={""}></Image>
      <div className="text-sm flex gap-4  text-roxo2 font-bold md:gap-8 ">
        <ul className="flex gap-4 lg:gap-8">
          <li>
            <Link href={"/"} className="hover:text-orange-400 hover:duration-500 ">Marcas</Link>
          </li>
          <li>
            <Link href={"/novidade"} className="hover:text-orange-400 hover:duration-500 " >Novidade</Link>            
          </li>
          <li>
            <Link href={"/feedback"} className="cursor-pointer hover:text-orange-400 hover:duration-500  " >FeedBack</Link>
          </li>
        </ul>
      </div>

    </div>
  );
}
