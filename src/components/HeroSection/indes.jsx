export default function HerorSection() {
    return (
        <section className="relative h-[70vh]">
            <div className="absolute inset-0 bg-gradient-to-r from-[#1d283a] to-transparent z-10">


            </div>
            <img src="/cinema.avif" alt="Hero image" className="w-full h-full object-cover object-center" />
            <div className="absolute inset-0 z-20 mx-[100px] flex flex-col justify-center">
                <div className="max-w-xl animate-fade-in">
                    <h1 className="text-5xl font-bold mb-4 text-white">
                        Welcome to <span className="text-[#6d28d9]">FLY FLIX</span>
                    </h1>
                    <p  className="text-lg text-gray-200 mb-8"> 
                    Discover the best movies all in one place. Stream now, enjoy unlimited entertaiment.
                    </p>
                </div>
            </div>
        </section>
    )
}
