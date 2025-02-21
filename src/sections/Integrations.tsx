import Tag from "@/components/Tag";
import figma from "@/assets/images/figma-logo.svg";
import notion from "@/assets/images/notion-logo.svg";
import slack from "@/assets/images/slack-logo.svg";
import relume from "@/assets/images/relume-logo.svg";
import framer from "@/assets/images/framer-logo.svg";
import github from "@/assets/images/github-logo.svg";
import IntegrationColumns from "@/components/IntegrationColumns";

const integrations = [
    {
        name: "Figma",
        icon: figma,
        description: "Figma is a collaborative interface design tool.",
    },
    {
        name: "Notion",
        icon: notion,
        description: "Notion is an all-in-one workspace for notes and docs.",
    },
    {
        name: "Slack",
        icon: slack,
        description: "Slack is a powerful team communication platform.",
    },
    {
        name: "Relume",
        icon: relume,
        description: "Relume is a no-code website builder and design system.",
    },
    {
        name: "Framer",
        icon: framer,
        description: "Framer is a professional website prototyping tool.",
    },
    {
        name: "GitHub",
        icon: github,
        description: "GitHub is the leading platform for code collaboration.",
    },
];

export type IntegrationsType = typeof integrations;

export default function Integrations() {
    return (
        <section className="py-24 overflow-hidden">
            <div className="container">
                <div className="grid lg:grid-cols-2 items-center lg:gap-16">
                    <div className="">
                        <div className="p-4">
                            <Tag name="INTEGRATIONS" />
                        </div>
                        <div className="text-6xl md:text-6xl lg:text-7xl p-4 font-medium lg:max-w-2xl">
                            Plays well with
                            <span className="text-lime-400"> others</span>
                        </div>
                        <div className="text-white/50 p-4 text-lg md:text-xl lg:text-xl lg:max-w-xl">
                            Layers seamlessly connects with your favorite tools,
                            making it easy to plug into any workflow and
                            collaborate across platforms.
                        </div>
                    </div>
                    <div>
                        <div className="h-[400px] lg:h-[800px] grid md:grid-cols-2 gap-4 mt-8 lg:mt-0 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
                            <IntegrationColumns integrations={integrations} />
                            <IntegrationColumns
                                integrations={integrations.slice().reverse()}
                                reverse
                                className="hidden md:flex"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
