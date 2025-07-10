import Link from "next/link";


export default function Navbar() {
    return (
        <nav className="flex items-center justify-between p-4 border-b-3 border-b-black bg-gradient-to-l from-gray-900 to-[#800020] text-white">
            {/* Logo and Title */}
            <div className="flex items-center space-x-4">
                <img src="/assets/pics/onlyLogo.png" alt="Logo" style={{ width: '90px', height: '50px' }} />
                <h1 className="font-bold text-4xl">NeUto</h1>
            </div>

            {/* Navigation Links */}
            <div className="flex items-center space-x-6 mr-32 text-xl">
                <Link href="/about" className="hover:underline">About</Link>
                <Link href="/contact" className="hover:underline">Contact Us</Link>
                <div className="relative group">
                    <button className="hover:underline focus:outline-none">Subject</button>
                    <div className="absolute left-0 mt-2 w-32 bg-white text-black rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-10">
                        <Link href="/games" className="block px-4 py-2 hover:bg-gray-200">Games</Link>
                        <Link href="/movies" className="block px-4 py-2 hover:bg-gray-200">Movies</Link>
                        <Link href="/musics" className="block px-4 py-2 hover:bg-gray-200">Musics</Link>
                    </div>
                </div>
            </div> 
        </nav>
    )
}
