import { HoverEffect } from "./ui/card-hover-effect";

export default function CardGridComponent({ title, item }: {
    title: string,
    item: {
        img: React.ReactNode;
        title: string;
        description: string;
        link: string;
    }[]
}) {
    return (<>
        <div className="mt-12 my-4 p-2">
            <h2 className="text-2xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-semibold">{title}</h2>
        </div>
        <div className="">
            <HoverEffect items={item} />
        </div>
    </>)
}