import Image from "next/image";
import Logo from "@/assets/images/logo.svg";
import { button } from "framer-motion/client";

const navLinks = [
    { label: "Home", href: "#" },
    { label: "Features", href: "#features" },
    { label: "Integrations", href: "#integrations" },
    { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
    return(
        <section className="py-4 lg:py-8">
            <div className="container max-w-5xl ">
                <div className="grid grid-cols-2 lg:grid-cols-3 border border-white/15 rounded-full p-2 px-4 md:px-2 items-center ">
                    <div>
                        <Image src={Logo} alt="Logo" className="h-9 w-auto md:h-auto" />
                    </div>
                    <div className="lg:flex justify-center items-center hidden">
                        <nav className="flex gap-6 font-medium ">
                            {navLinks.map((link) => (
                                <a href={link.href} key={link.label} className="text-white/80 hover:text-white">
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                    </div>
                    <div className="flex justify-end gap-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu md:hidden"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                        <button className="border border-white rounded-full px-6 h-12 font-medium sm:hidden md:block">Log In</button>
                        <button className="border border-white rounded-full px-6 h-12 font-semibold sm:hidden md:block bg-lime-400 text-black">Sign Up</button>
                    </div>
                </div>
            </div>
        </section>
    );
}
