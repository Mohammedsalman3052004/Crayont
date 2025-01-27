export default function Hero() {
    return (
        <section className="py-24">
            <div className="container">
                <div className="flex justify-center">
                    <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 text-neutral-950 font-bold rounded-full">
                        ✨ $7.5M seed round raised
                    </div>
                </div>
                <h1 className="text-6xl md:text-7xl font-medium text-center mt-6">Impactful design, created effortlessly</h1>
                <p className="text-center text-xl text-white/50 mt-8  max-w-2xl">
                    Design tools shouldn&apos;t slow you down. Layers combines powerful features with an intuitive interface that keeps you in your creative flow.
                </p>
                <form className="flex border border-white/15 rounded-full p-2 mt-8">
                    <input type="email" placeholder="Enter your email" className="bg-transparent px-4" />
                    <button className=" rounded-full px-4 h-10 font-semibold bg-lime-400 text-black whitespace-nowrap">Sign Up</button>
                </form>
            </div>
        </section>
    );
}
