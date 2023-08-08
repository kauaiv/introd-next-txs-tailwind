import { Carrosel } from '@/components/carrosel';
import { Marcas } from '@/components/marcas';
import { Produto } from '@/components/produto';

import Banner from "@/assets/banner1.svg"
import Boot from "@/assets/boot-white.svg"

export default function Home() {
  return (
    <main className="">
      <Carrosel
        img={Banner}
      />
      <Marcas/>
      <Produto
        img={Boot}
        bottomtext={"Entrar em Contato"}      
        text={"Passos de Estilo: Explore a Cidade com Elegância Impecável!"}
      />        
    </main>
  )
}
