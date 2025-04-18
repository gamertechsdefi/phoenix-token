import Link from "next/link";
import Image from "next/image";
import { PictureHolder } from "@/components/PictureHolders";

const pictures = [

];

export default function BrandAssetsPage() {
    return (
        <div className="">
            <main className="p-8 md:p-16 flex flex-col justify-center">
                <h1 className="text-2xl text-orange-500 font-bold ">PHOENIX TOKEN BRAND ASSETS</h1>
                <p className="pb-8 text-sm">Everything you need to spread the meme magic responsibly </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Link className="aspect-video  bg-orange-100 text-neutral-700  rounded-2xl flex items-center justify-center"
                        href="/brand-assets/logo-packs">Logo</Link>
                    <Link className="aspect-video  bg-orange-200 text-neutral-700 rounded-2xl flex items-center justify-center"
                        href="/brand-assets/icons">Icons & Assets</Link>
                    <Link className="aspect-video  bg-orange-300 text-neutral-700 rounded-2xl flex items-center justify-center"
                        href="/brand-assets/memes">Memes & Videos</Link>
                    <Link className="aspect-video  bg-orange-400 text-neutral-700 rounded-2xl flex items-center justify-center"
                        href="/brand-assets/colors">Color palletes and typography</Link>

                    <div className="aspect-video  bg-orange-500 text-neutral-700 rounded-2xl flex flex-col p-4">
                        <h1 className="text-xl font-bold pb-8">Usage Guidelines</h1>
                        <div className="p-4 bg-orange-200 text-neutral-900 rounded-xl">
                            <ul>
                                <li className="pb-4 text-sm">Do not modify the Brand logo colors without permission</li>
                                <li className="pb-4 text-sm">Maintain minimum clear space around logos</li>
                                <li className="pb-4 text-sm">Do not stretch or distort the logos</li>
                                <li className="pb-4 text-sm">Use approved color combinations only</li>
                                <li className="text-sm">When in doubt, ask the Meme Council</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}