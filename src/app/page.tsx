import Image from "next/image";
import heroImg from "../../public/assets/hero.svg";
import Header from "../components/header/header"

function createSectionBox(title: string){
  return (
    <section className="bg-white text-black p-2 rounded-md w-32 text-center hover:scale-105 transition-transform">
      <span>{title}</span>
    </section>
  )
}


export default function Home() {
  return (
    <div className="bg-black w-full mt-16 flex flex-col justify-center items-center text-white xheroContainer"> 

      <main className="xmain--Hero">
        <Image src={heroImg} alt="Hero" className="w-72"/>
        <h1 className="text-center">Organize suas tarefas</h1>

        <div className="xmain--Hero__infos flex gap-4 justify-center p-4"> 
          {createSectionBox("Tarefas")}
          {createSectionBox("Usuarios")}
        </div>
      </main>

    </div>
  );
}
