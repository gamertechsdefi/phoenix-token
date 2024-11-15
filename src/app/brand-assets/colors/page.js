export default function IconsPage() {
    return (
        <div className="">
            <main className="px-8 md:px-16">

                {/* color palletes */}
                <div className="py-8 md:py-16">
                    <h1 className="font-bold text-2xl pb-4">Color Palletes</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">

                        <div className="p-4 flex flex-col gap-4 justify-center items-center aspect-video bg-[#f9f9f9] text-neutral-900 rounded-lg">
                            <div className="flex items-center aspect-square bg-[#EF7103] rounded-lg p-4">#EF7103</div>
                            <p className="">Meme White</p>
                            <p className="text-sm">Text Primary Color</p>
                        </div>
                        <div className="p-4 flex flex-col gap-4 justify-center items-center aspect-video bg-[#f9f9f9] text-neutral-900 rounded-lg">
                            <div className="flex items-center aspect-square bg-[#ffcb4b] rounded-lg p-4">#FFCB4B</div>
                            <p className="">Meme White</p>
                            <p className="text-sm">Text Secondary Color</p>
                        </div>
                        <div className="p-4 flex flex-col gap-4 justify-center items-center aspect-video bg-[#f9f9f9] text-neutral-900 rounded-lg">
                            <div className="flex items-center aspect-square bg-[#FAE570] rounded-lg p-4">#FAE570</div>
                            <p className="">Meme White</p>
                            <p className="text-sm">Text Tertiary Color</p>
                        </div>

                        <div className="p-4 flex flex-col gap-4 justify-center items-center aspect-video bg-[#f9f9f9] text-neutral-900 rounded-lg">
                            <div className="flex items-center aspect-square bg-[#670409] text-[#f9f9f9] rounded-lg p-4">#670409</div>
                            <p className="">Meme White</p>
                            <p className="text-sm">Background Primary Color</p>
                        </div>
                        <div className="p-4 flex flex-col gap-4 justify-center items-center aspect-video bg-[#f9f9f9] text-neutral-900 rounded-lg">
                            <div className="flex items-center aspect-square bg-[#340612] text-[#f9f9f9] rounded-lg p-4">#340612</div>
                            <p className="">Meme White</p>
                            <p className="text-sm">Background Secondary Color</p>
                        </div>
                        <div className="p-4 flex flex-col gap-4 justify-center items-center aspect-video bg-[#f9f9f9] text-neutral-900 rounded-lg">
                            <div className="flex items-center aspect-square bg-[#9B0B17] text-[#f9f9f9] rounded-lg p-4">#9B0B17</div>
                            <p className="">Meme White</p>
                            <p className="text-sm">Background Tertiary Color</p>
                        </div>
                    </div>

                </div>

                {/* typography */}
                <div className="py-8">
                    <h1 className="font-bold text-2xl pb-4">Typography</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                        <div style={{fontFamily: 'Zen Dots, sans-serif'}} 
                        className=" flex flex-col gap-4 p-8 aspect-video bg-[#f9f9f9] text-neutral-900 rounded-lg">
                            <h1 className="text-2xl font-bold ">ZenDots</h1>
                            <p className="">Primary Font - For headlines and important text </p>
                            <p className="text-sm">ABCDEFGHIJKLMNOPQRSTUVWXYZ <br />
                                abcdefghijklmnopqrstuvwxyz <br />
                                1234567890</p>
                        </div>

                        <div className="flex flex-col gap-4 p-8 aspect-video bg-[#f9f9f9] text-neutral-900 rounded-lg">
                            <h1 className="text-2xl font-bold ">Space Mono</h1>
                            <p className="">Secondary Font - For that authentic meme feel </p>
                            <p className="text-sm">ABCDEFGHIJKLMNOPQRSTUVWXYZ <br />
                                abcdefghijklmnopqrstuvwxyz <br />
                                1234567890</p>
                        </div>
                    </div>

                </div>
            </main >
        </div >
    );
}