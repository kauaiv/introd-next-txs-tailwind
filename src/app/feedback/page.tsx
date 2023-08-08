import { Carrosel } from '@/components/carrosel';
import { Marcas } from '@/components/marcas';
import { Produto } from '@/components/produto';
import { Coment } from '@/components/coment';

import Banner from "@/assets/banner2.svg"
import Boot from "@/assets/boot2.svg"

export default function Home() {
  return (
    <main className="">
      <Carrosel
        img={Banner}
      />
      <Coment></Coment>
      <Produto
        img={Boot}
        bottomtext={"Você dnv aq"}      
        text={"Arrasta pacima"}
      />      
      <Marcas/>
    </main>
  )
}
