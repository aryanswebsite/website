// import F1Car from "../components/f1car"
import { TextGenerateEffect } from "../components/ui/TextGenerateEffect";
import dynamic from 'next/dynamic'

const F1Car = dynamic(() => import('../components/f1car'), {ssr: false})

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-center h-screen p-4 bg-[#F6E8EA]">
      <div className="absolute top-1/2">
        <TextGenerateEffect
          className="text-center"
          words="🏁 Welcome to the Aryan Jain Grand Prix 🏁"
        />
        <p className="mt-4 text-lg text-gray-700">
          Hi, I’m Aryan! Explore my projects and passions.
        </p>
      </div>
      <F1Car />
    </main>
  );
}

