import Link from "next/link";
import Image from "next/image";

import skeletonLogo from "/public/images/skeleton-logo.webp";
import skeletonproof from "/public/images/skeleton-proof.png";

export default function AuditPage(){
    return(
        <div className="px-8 md:px-16 pt-4 pb-24 md:py-16 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div>
                <h1 className="text-2xl font-bold">We have been audited by</h1>
                <Link href="https://skeletonecosystem.com/audit-phoenix-token-bep20/">
                <Image src={skeletonLogo} width={300} alt="skeleton ecosystem logo" />
                </Link>
            </div>

            <Image src={skeletonproof} />
            
        </div>
    );
}