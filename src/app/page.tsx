import Image from "next/image";
import HeroImg from '../../public/5114855.jpg'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center p-24 ]">

<h2 className="text-2xl font-bold">Gerencie sua empresa</h2>
<h1 className="text-3xl font-bold mb-8 text-green-500">Atendimentos, clientes</h1>
    <Image src={HeroImg} className="App-logo" 
    alt="Vercel Logo" 
    width={500} 
    height={500} 
    />

    </main>
  );
}
