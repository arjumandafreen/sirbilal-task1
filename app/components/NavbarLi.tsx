import { NavbarLiProp } from '@/types/types';
import Link from 'next/link';

const NavbarLi: React.FC<NavbarLiProp> = ({ name, href }) => {
  return (
    <li className='text-white bg-transparent hover:bg-yellow-400 rounded hover:text-gray-800 p-2'>
      <Link href={href}> {name} </Link>
    </li>
  );
}

export default NavbarLi; 
