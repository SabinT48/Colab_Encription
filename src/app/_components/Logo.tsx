import logo from '../_icons/lock.png'
import Image from 'next/image'

export default function Logo() {
  return (
    <div className='flex items-center space-x-1 px-4'>
      <Image src={logo} width={25} height={25} alt='lock_icon' className='mb-1' />
      <h1 className="text-2xl font-bold text-black tracking-wide">LockByte</h1>
    </div>
  );
}
