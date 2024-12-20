'use client'
import F1Card from "@/app/components/CardComponent";
import BadmintonCard from "@/app/components/CardComponent2";

async function getTickets() {
  await new Promise(resolve => setTimeout(resolve, 500))
}

export default async function Home() {
  await getTickets()

  return (
    <section className="py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">My Hobbies</h2>
      <div className="flex flex-wrap justify-center gap-6">
        <F1Card />
        <BadmintonCard />
        {/* Add more HobbyCards for other hobbies */}
      </div>
    </section>
  );
}

