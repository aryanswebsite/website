'use client'
async function getTickets() {
  await new Promise(resolve => setTimeout(resolve, 500))
}

export default async function Home() {
  await getTickets()

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
      <p className="mt-4 text-lg text-gray-700">
        Take a look at my resume 📝
      </p>
      <p>&lt;In progress/&gt;</p>
    </main>
  );
}

