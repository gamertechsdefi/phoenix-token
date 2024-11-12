export default function IconsPage() {
    return (
        <div className="">
            <main className="px-8 md:px-16">

                {/* color palletes */}
                <div className="py-8 md:py-16">
                    <h1 className="font-bold text-2xl pb-4">Color Palletes</h1>
                    <div className="flex flex-col gap-4">

                        <div className=" flex flex-col gap-4 justify-center items-center aspect-video bg-[#f9f9f9] text-neutral-900 rounded-lg">
                            <div className="flex items-center aspect-square bg-orange-500 rounded-lg p-4">#F9F9F9F</div>
                            <p className="text-xl">Meme White</p>
                            <p>Primary Color</p>
                        </div>

                        <div className=" flex flex-col gap-4 justify-center items-center aspect-video bg-[#f9f9f9] text-neutral-900 rounded-lg">
                            <div className="flex items-center aspect-square bg-orange-500 rounded-lg p-4">#F9F9F9F</div>
                            <p className="text-xl">Meme White</p>
                            <p>Primary Color</p>
                        </div>
                        <div className=" flex flex-col gap-4 justify-center items-center aspect-video bg-[#f9f9f9] text-neutral-900 rounded-lg">
                            <div className="flex items-center aspect-square bg-orange-500 rounded-lg p-4">#F9F9F9F</div>
                            <p className="text-xl">Meme White</p>
                            <p>Primary Color</p>
                        </div>
                        <div className=" flex flex-col gap-4 justify-center items-center aspect-video bg-[#f9f9f9] text-neutral-900 rounded-lg">
                            <div className="flex items-center aspect-square bg-orange-500 rounded-lg p-4">#F9F9F9F</div>
                            <p className="text-xl">Meme White</p>
                            <p>Primary Color</p>
                        </div>
                    </div>

                </div>

                {/* typography */}
                <div>
                    <h1 className="font-bold text-2xl pb-4 py-8">Typography</h1>
                    <div className="flex flex-col gap-4">

                        <div style={{fontFamily: 'ZenDots, sans-serif'}} className=" flex flex-col gap-4 p-4 aspect-video bg-[#f9f9f9] text-neutral-900 rounded-lg">
                            <h1 className="text-xl font-bold ">ZenDots</h1>
                            <p className="text-xl">Primary Font - For headlines and important text </p>
                            <p>ABCDEFGHIJKLMNOPQRSTUVWXYZ <br />
                                abcdefghijklmnopqrstuvwxyz <br />
                                1234567890</p>
                        </div>

                        <div className=" flex flex-col gap-4 p-4 aspect-video bg-[#f9f9f9] text-neutral-900 rounded-lg">
                            <h1 className="text-xl font-bold ">Space Mono</h1>
                            <p className="text-xl">Secondary Font - For that authentic meme feel </p>
                            <p>ABCDEFGHIJKLMNOPQRSTUVWXYZ <br />
                                abcdefghijklmnopqrstuvwxyz <br />
                                1234567890</p>
                        </div>
                    </div>

                </div>
            </main >
        </div >
    );
}