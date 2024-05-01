import { NAV_LINKS } from '@/constants'
import Link from 'next/link';
import Image from 'next/image';
import Button from './Button';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between mx-auto max-w-[1440px] px-6 lg:px-20 3xl:px-0 relative z-30 py-5">
      <Link href='/'>
        <Image src='hilink-logo.svg' width={74} height={29} alt='logo' />
      </Link>


      <ul className='hidden h-full gap-12 lg:flex'>
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className='text-[16px] font-[400] text-gray-500 flex items-center justify-center pb-1.5 transition-all hover:font-bold'>
            {link.label}
          </Link>
        ))}
      </ul>

      <div className='lg:flexCenter hidden'>
          <Button
          type='button'
          title='Login'
          icon='user.svg'
          variant="btn_dark_green"
          />
      </div>

          <Image src='menu.svg' alt='menu' width={32} height={32} className='inline-block cursor-pointer lg:hidden'/>

    </nav>
  )
}

