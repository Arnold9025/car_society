import Link from "next/link"
import Image from "next/image"
import { CustomButton } from "."
const Navbar = () => {
  return (
    <header className="w-full absolute z-100">
        <nav className="max-w-[1440px] mx-auto flex justify-between items center sm:px-16 px-6 py-4">
            <Link href="/" className="flex-justifu-center items-center">
                <Image src="/thunderCAR.png" alt="Car Society logo" width={120} height={120} className="object-contain"/>
            </Link>
            <CustomButton 
            title="Sign In"
            btnType="button"
            containerStyles="bg-transparent border text-white rounded-full mt-10 min-w-[100px] max-h-[30px]"
            />
        </nav>
    </header>
  )
}

export default Navbar