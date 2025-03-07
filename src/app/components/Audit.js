import Link from "next/link";
import Image from "next/image";

import skeletonLogo from "/public/images/skeleton-logo.webp";
import skeletonproof from "/public/images/skeleton-proof.png";

export default function AuditPage(){
    return(
        <div className="bg-neutral-100 text-neutral-900 px-8 md:px-16 py-8 md:py-16 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div>
                <h1 className="text-xl font-bold">We have been audited by</h1>
                <Link href="https://skeletonecosystem.com/audit-phoenix-token-bep20/">
                <Image src={skeletonLogo} width={300} alt="skeleton ecosystem logo" />
                </Link>
            </div>
            
        </div>
    );
}