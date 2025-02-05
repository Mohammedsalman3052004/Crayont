import Cards from "@/components/Cards";
import Tag from "@/components/Tag";
import card from "../json/cards.json";
  
export default function Features() {
    return (
        <section className="py-28 lg:py-12">
            <div className="container">
                <div className="flex justify-center">
                        <Tag name="features" />
                </div>
                {/* <div>
                    <div className="text-5xl md:text-6xl lg:text-7xl text-center font-medium mt-10">Our <span className="text-lime-400">Portfolio</span></div>
                    <div className="text-white/50 text-center text-xl mt-4 md:text-2xl lg:text-2xl">Creations that reflect our dedication and passion.</div>
                </div> */}
                <div className="flex flex-wrap whitespace-nowrap justify-center gap-8 mt-12">
                    {card.map((card) => (
                        <Cards key={card.name} images={card.src} name={card.name} url={card.url} width={card.width} height={card.height} />
                    ))}
                </div>
            </div>
        </section>
    );
}
