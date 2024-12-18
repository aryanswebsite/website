import AboutMe from "@/app/components/aboutme";

export default async function Home() {

    return (
      <main className="relative flex flex-col items-center justify-center h-screen p-4 bg-[#F6E8EA]">
        <div className="absolute top-28">
            <AboutMe />
        </div>
      </main>
    );
  }
  
  