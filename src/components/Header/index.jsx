import Link from "next/link";
import { LuFilm, LuPlus } from "react-icons/lu";
import Button from "../ui/button";

export default function Header() {
    return (
        <header className="sticky top-0 z-40 w-full
         bg-[#1D2839]/95 backdrop-blur-sm border-b border-[#e5e7eb]">
            <div className="mx-auto[100px] flex h-16 items-center justify-between">
                <div className="flex items-center gap-2">
                    <LuFilm className="text-[30px] text-[#6d28d9]"/>
                    <Link href={"/"} className="text-xl font-bold text-[#f8fafc]">
                        FLY<span className="text-[#6d26d9]">FLIX</span>
                    </Link>
                </div>
                <nav className="flex items-center gap-6">
                    <Link href={"/"} className="text-[#f8fafc]/80 hover:text-[#f8fafc] transition-colors">
                        Home
                    </Link>
                    <Link href={"/filmes"} className="text-[#f8fafc]/80 hover:text-[#f8fafc] transition-colors">
                        Filmes
                    </Link>
                </nav>
                    
                <Button>
                    <LuPlus />
                    Add Movies
                </Button>
            </div>
        </header>
    )
}
