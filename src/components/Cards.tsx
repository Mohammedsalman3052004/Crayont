import Image from "next/image";

export default function Cards({ images, name, width, height }: { images: string; name: string; url: string; width: number; height: number; }) {
    return (
        <div className="border  border-white/15 rounded-3xl p-4">
            <div className="flex justify-center rounded-3xl">
                <Image className="py-2 full lg:rounded-3xl md:rounded-3xl sm:rounded-2xl " width={width} height={height} src={images} alt="Design Example 1" />
            </div>
            <div className="font-bold py-3">{name}</div>
            {/* <div className="text-white/70">{url}</div> */}
        </div>
    );
}