import Image from "next/image";

import logoico from "/public/images/pht-logo ico.ico";
import logopng from "/public/images/pht-logo.png";
import logosvg from "/public/images/pht-logo-svg.svg";
import logojpg from "/public/images/pht-logo-jpg.jpg";
import logowhite from "/public/images/phtlogo-white.png";
import logoblack from "/public/images/phtlogo-black.png";

export default function LogoPacksPage() {
    return (
        <div className="">
            <main className="px-8 md:px-16">

                {/* logo assets */}
                <div className="py-8 md:py-16">
                    <h1 className="font-bold text-2xl pb-4">Logo Assets</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                        <div className="p-4 flex flex-col gap-4 justify-center items-center aspect-video bg-neutral-300 text-neutral-900 rounded-lg">
                            <Image src={logoico} alt="ico logo format" width={200} height={200} className="bg-white shadow-md rounded-lg p-4" />
                            <button className="bg-orange-500 px-4 py-2  rounded-lg text-white">Download .ICO</button>
                        </div>
                        <div className="p-4 flex flex-col gap-4 justify-center items-center aspect-video bg-neutral-300 text-neutral-900 rounded-lg">
                            <Image src={logopng} alt="ico logo format" width={200} height={200} className="bg-white shadow-md rounded-lg p-4" />
                            <button className="bg-orange-500 px-4 py-2  rounded-lg text-white">Download .PNG</button>
                        </div>
                        <div className="p-4 flex flex-col gap-4 justify-center items-center aspect-video bg-neutral-300 text-neutral-900 rounded-lg">
                            <Image src={logosvg} alt="ico logo format" width={200} height={200} className="bg-white shadow-md rounded-lg p-4" />
                            <button className="bg-orange-500 px-4 py-2  rounded-lg text-white">Download .SVG</button>
                        </div>
                        <div className="p-4 flex flex-col gap-4 justify-center items-center aspect-video bg-neutral-300 text-neutral-900 rounded-lg">
                            <Image src={logojpg} alt="ico logo format" width={200} height={200} className="bg-white shadow-md rounded-lg p-4" />
                            <button className="bg-orange-500 px-4 py-2  rounded-lg text-white">Download .JPG</button>
                        </div>
                        <div className="p-4 flex flex-col gap-4 justify-center items-center aspect-video bg-neutral-300 text-neutral-900 rounded-lg">
                            <Image src={logowhite} alt="ico logo format" width={200} height={200} className="bg-neutral-900 shadow-md rounded-lg p-4" />
                            <button className="bg-orange-500 px-4 py-2  rounded-lg text-white">Download</button>
                        </div>
                        <div className="p-4 flex flex-col gap-4 justify-center items-center aspect-video bg-neutral-300 text-neutral-900 rounded-lg">
                            <Image src={logoblack} alt="ico logo format" width={200} height={200} className="bg-white shadow-md rounded-lg p-4" />
                            <button className="bg-orange-500 px-4 py-2  rounded-lg text-white">Download</button>
                        </div>

                    </div>
                </div>
            </main >
        </div >
    );
}