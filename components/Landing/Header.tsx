import { Button } from '@/components/ui/button';
import { SignInButton, SignUpButton } from "@clerk/nextjs";
import Image from 'next/image';
import Link from 'next/link';
const Header = () => {
  return (
  <nav className="fixed top-0 right-0 left-0 z-50 px-6 py-2 border-b border-border/50 bg-background/80 backdrop-blur-md h-16">
      <section className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image src={"/logo.png"} alt="DentWise Logo" width={32} height={32} className="w-11  animate-collapsible-down duration-1000" />
          <span className="font-semibold text-lg   font-[Harmattan]  ">Dent Wise</span>
        </Link>

         <div className="hidden md:flex items-center gap-8 font-[Harmattan]">
          <a href="#" className="text-muted-foreground hover:text-orange-400 hover: duration-1000">
            How it Works
          </a>
          <a href="#" className="text-muted-foreground hover:text-orange-400 hover: duration-1000">
            Pricing
          </a>
          <a href="#" className="text-muted-foreground hover:text-orange-400 hover: duration-1000">
            About
          </a>
        </div>
       < div className="flex items-center gap-3 font-[Harmattan] font-medium">
          <SignInButton mode="modal">
            <Button  variant={"ghost"} size={"sm"} className=' cursor-pointer  '>
              Login
            </Button>
          </SignInButton>
          <SignUpButton mode="modal">
            <Button   size={"sm"} className='   shadow-2xl cursor-pointer hover:bg-amber-500 hover:duration-700 bg-white'  >Sign Up</Button >
          </SignUpButton>
        </div>
      </section>


    </nav>
  )
}
export default Header
