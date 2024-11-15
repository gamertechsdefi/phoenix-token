import Link from "next/link";

export default function BrandAsset(){
    return (
        <div className="m-8 p-8 bg-gradient-to-b from-[#670409] to-[#340612] rounded-xl shadow-md flex flex-col items-center">
            <h1 className="font-bold text-2xl pb-2 text-[#EF7103]">OUR BRAND ASSETS</h1>
            <p className="pb-4">Everything you need to spread the meme magic responsibly </p>
            <Link href="/brand-assets" className="px-4 py-2 bg-[#EF7013] text-white rounded-xl">Check out</Link>
        </div>
    );
}