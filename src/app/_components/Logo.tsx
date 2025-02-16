import logo from '../icons/lock.png'
import Image from 'next/image'

export default function Logo() {
  return (
    <div className='flex items-center space-x-1 px-4'>
      <Image src={logo} width={30} height={30} alt='lock_icon' />
      <h1 className="text-2xl font-bold text-black tracking-wide">LockByte</h1>
    </div>
  );
}
