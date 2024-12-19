import ProjectIcon from "../components/ProjectIcon";
import { TextGenerateEffect } from "../components/ui/TextGenerateEffect";
import dynamic from 'next/dynamic'
import IntroPara from "../components/IntroPara";

const F1Car = dynamic(() => import('../components/f1car'), { ssr: false })

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-center h-screen p-4 bg-[#F6E8EA]">
      <div className="absolute top-1/2">
        <TextGenerateEffect
          className="text-center"
          words="🏁 Welcome to the Aryan Jain Grand Prix 🏁"
        />
      </div>
      <IntroPara />
      <F1Car />
      <ProjectIcon />
    </main>
  );
}

