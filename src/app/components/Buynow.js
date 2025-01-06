import React from "react";

export default function BuyToken() {
    return (
        <div className="px-8 md:px-32 py-16 flex flex-col items-center">
            <h1 className="pb-4 font-bold text-2xl">BUY NOW ON VOLTICHANGE</h1>
                <iframe
                    src="https://voltichange.net/api/widget/?chain=56&darktheme=true&tokenin=Native&tokenout=0x885c99a787BE6b41cbf964174C771A9f7ec48e04&slippage=6"
                    frameborder="0"
                    class="voltichange-widget"></iframe>
        </div>
    );
}