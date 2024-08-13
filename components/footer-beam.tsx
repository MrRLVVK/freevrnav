import Image from "next/image";

export default function FooterItem() {
    return (
        <div className="max-w-screen-xl mx-auto px-4 flex flex-col items-center gap-4">
            <div>
                <div className="select-none flex items-center">
                    <div className="mr-2">
                        <Image src="/VVK-logo.svg" alt="Free-VRPorn Logo" width={80} height={0} />
                    </div>
                    <div className="text-xl text-zinc-500">Free VR Porn</div>
                </div>
            </div>
            <p className="text-base text-center text-zinc-500 mx-auto max-w-2xl">The website focusing on VR collections, and continuously in upgrading, please stay tuned...</p>

            <div className="text-sm text-zinc-500 text-center">© 2024 Free-VRPorn.com. All Rights Reserved.</div>
        </div>
    );
}
