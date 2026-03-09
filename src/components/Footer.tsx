import { FooterBackgroundGradient, LogoHoverEffect } from '@/components/ui/hover-footer'

export default function Footer() {
  return (
    <footer className="bg-navy relative h-fit overflow-hidden m-8 w-full">
      <FooterBackgroundGradient />
      <div className="hidden lg:flex h-[26rem] -mt-40 -mb-24 justify-center">
        <LogoHoverEffect className="z-50 max-w-5xl mx-auto" />
      </div>
      <div className="flex lg:hidden pt-10 pb-4 justify-center">
        <div className="w-full max-w-xs">
          <LogoHoverEffect className="z-40" />
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center gap-0 px-6 sm:px-10 lg:px-14 pt-24 pb-32 sm:pt-32 sm:pb-40 z-40 relative h-80 lg:h-auto -mt-[12px] mb-16">
        <div className="w-full max-w-7xl mx-auto">
          <div className="flex justify-center items-center text-base pt-10 border-t border-white/10">
            <p className="text-center text-white/50 mt-6">
              &copy; {new Date().getFullYear()} Advin Capital. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
