import { Carrosel } from '@/components/carrosel';
import { Marcas } from '@/components/marcas';
import { Produto } from '@/components/produto';

import Banner from "@/assets/banner3.svg"
import Boot from "@/assets/boot3.svg"

export default function Home() {
  return (
    <main className="">
      <Carrosel
        img={Banner}
      />
      <Produto
        img={Boot}
        bottomtext={"Tá curioso dms"}      
        text={"adquira agora mesmo essa incrível boot.png por 2 mil"}
      />       
      <Marcas/>
    </main>
  )
}
