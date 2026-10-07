
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection/indes";
import Link from "next/link";

export default function Home() {
  const movies = [
    {
      id: 1,
      title: "Inception",
      year: 2010,
      rating: 8.8,
      genre: "Sci-Fi",
      image: "https://occ-0-2218-2219.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABUaj21FX-dy1mzKTkdvmahZa2IP2TVBOnbZWdJailESNeZtDZtLhFIon-BaMSRXlKUXGfZCKnoPVvFG-or7_rbJIFnFZC4_Pn0gY.jpg?r=df3",
    },
    {
      id: 2,
      title: "Interstellar",
      year: 2014,
      rating: 8.6,
      genre: "Adventure",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ25sOb-AJOSErr9nZFM8tK7jcdopMdc76pxEWs1mfz-jcQyz-D_xNObFEb&s=10"
    },
    {
      id: 3,
      title: "The Dark Knight",
      year: 2008,
      rating: 9,
      genre: "Action",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX3vWCeYZn6RKSxiKshsM1SdgTc9ru6z8YESKX5dRgxv0j-DCyg8qGge9r&s=10"
    },
  ]
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <HeroSection />
      <main className="flex-1 py-12 px-[100px]">
        <section>
        <div className="flex items-center justify-between mb-6">
        <h2 className="font-bold text-2xl">Featured Movies</h2>
        <Link href={"/filmes"} className="text-[#0ea5e9] text-sm font-medium hover:text-[#0ea5e9]/80">View All</Link>
        </div>
        <div className="grid grid-cols-4 gap-6">
          {movies.map(
            (filme) => {
              return (
                <div className="relative cursor-pointer hover:scale-105 transition-transform w-[316px] h-[320px]">
                  <img className="w-full h-full object-cover rounded-md object-center" src={filme.image} alt={filme.title} />

                </div>
              )
            }
          )}
        </div>
        </section>
      </main>
    </div>
  )
}