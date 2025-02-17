'use client'

import { type IntegrationsType } from "@/sections/Integrations";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import {motion} from "framer-motion"
import { Fragment } from "react";

export default function IntegrationColumns(props: {integrations: IntegrationsType; className?: string;}) {
    const{integrations, className} = props;
    return (
        <motion.div 
        animate={{
            y:"-50%"
        }}
        transition={{
            duration: 25,
            ease: "linear",
            repeat: Infinity
        }}
        className={twMerge("flex flex-col gap-4 mb-4",className)}>
            {Array.from({ length: 2 }).map((_, i) => (
                <Fragment key={i}>
                    {integrations.map((integration) => (
                        <div key={integration.name} className="bg-neutral-900 border border-white/10 rounded-3xl p-6">
                            <div className="flex justify-center">
                                <Image src={integration.icon} alt={"integration.name"} className="size-24" />
                            </div>
                            <h3 className="text-3xl text-center mt-6">{integration.name}</h3>
                            <p className="text-white/50 text-center mt-2">{integration.description}</p>
                        </div>
                    ))}
                </Fragment>
            ))}
            
        </motion.div>
    );
}