"use client";

import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

export default function MainPageBanner() {
    return (
        <section className="h-80 mt-4 flex justify-around items-center bg-gradient-to-r from-gray-900 to-[#800020] text-white">
            <div>
                <h1 className="text-9xl font-bold">NeUto</h1>
                <h2 className="text-5xl">
                <Typewriter
                    words={['When Gears Think, Work Flows']}
                    cursor
                    cursorStyle='|'
                    typeSpeed={70}
                    deleteSpeed={50}
                    />
                    </h2>
            </div>
            {/* Logo Image */}
            <Image src="/assets/pics/onlyLogo.PNG" alt="Logo" width={360} height={70} className="hidden md:block" />

        </section>
    )
}
