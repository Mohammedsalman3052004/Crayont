"use client";

import designExample1Image from "@/assets/images/design-example-1.png";
import designExample2Image from "@/assets/images/design-example-2.png";
import Pointer from "@/components/Pointer";
import Image from "next/image";
import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";
import cursorYouImage from "@/assets/images/cursor-you.svg";

export default function Hero() {
    const [leftDesineScope, leftDesignAnimate] = useAnimate();
    const [leftPointerScope, leftPointerAnimate] = useAnimate();
    const [rightDesineScope, rightDesignAnimate] = useAnimate();
    const [rightPointerScope, rightPointerAnimate] = useAnimate();

    useEffect(() => {
        leftDesignAnimate([
            [leftDesineScope.current, { opacity: 1 }, { duration: 0.5 }],
            [leftDesineScope.current, { x: 0, y: 0 }, { duration: 0.5 }],
        ]);
        leftPointerAnimate([
            [leftPointerScope.current, { opacity: 1 }, { duration: 0.5 }],
            [leftPointerScope.current, { y: 0, x: -100 }, { duration: 0.5 }],
            [
                leftPointerScope.current,
                { x: 0, y: [0, 16, 0] },
                { duration: 0.5, ease: "easeInOut" },
            ],
        ]);
        rightDesignAnimate([
            [
                rightDesineScope.current,
                { opacity: 1 },
                { duration: 0.5, delay: 1.5 },
            ],
            [rightDesineScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
        ]);
        rightPointerAnimate([
            [
                rightPointerScope.current,
                { opacity: 1 },
                { duration: 0.5, delay: 1.5 },
            ],
            [rightPointerScope.current, { y: 0, x: 175 }, { duration: 0.5 }],
            [
                rightPointerScope.current,
                { x: 0, y: [0, 20, 0] },
                { duration: 0.5 },
            ],
        ]);
    }, []);

    return (
        <section
            className="py-24 overflow-x-clip"
            style={{
                cursor: `url(${cursorYouImage.src}), auto`,
            }}
        >
            <div className="container relative">
                <motion.div
                    ref={leftDesineScope}
                    initial={{ opacity: 0, x: -100, y: 100 }}
                    className="absolute -left-32 top-16 hidden lg:block"
                    drag
                    dragConstraints={{
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                    }}
                >
                    <Image
                        src={designExample1Image}
                        alt="Design Example 1"
                        draggable={false}
                    />
                </motion.div>
                <motion.div
                    ref={leftPointerScope}
                    initial={{ opacity: 0, y: 100, x: -200 }}
                    className="absolute left-56 top-96 hidden lg:block"
                >
                    <Pointer name="Salman" />
                </motion.div>
                <motion.div
                    ref={rightDesineScope}
                    initial={{ opacity: 0, y: 100, x: 100 }}
                    drag
                    dragConstraints={{
                        top: -100,
                        left: 0,
                        right: 0,
                        bottom: 0,
                    }}
                    className="absolute -right-64 -top-16 hidden lg:block"
                >
                    <Image
                        src={designExample2Image}
                        alt="Design Example 2"
                        draggable={false}
                    />
                </motion.div>
                <motion.div
                    ref={rightPointerScope}
                    initial={{ opacity: 0, x: 275, y: 100 }}
                    className="absolute right-80 -top-4 hidden lg:block"
                >
                    <Pointer name="Riyaz" color="red" />
                </motion.div>
                <div className="flex justify-center">
                    <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 text-neutral-950 font-bold rounded-full">
                        ✨ $7.5M seed round raised
                    </div>
                </div>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6 pt-8">
                    Impactful design, created effortlessly
                </h1>
                <p className="text-center text-xl text-white/50 mt-8 mx-auto max-w-2xl">
                    Design tools shouldn&apos;t slow you down. Layers combines
                    powerful features with an intuitive interface that keeps you
                    in your creative flow.
                </p>
                <form className="flex border mx-auto border-white/15 rounded-full p-3 mt-8 max-w-lg">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="bg-transparent px-1 md:flex-1 w-full"
                    />
                    <button className="border rounded-full px-4 h-10 font-semibold bg-lime-400 text-black whitespace-nowrap">
                        Sign Up
                    </button>
                </form>
            </div>
        </section>
    );
}
