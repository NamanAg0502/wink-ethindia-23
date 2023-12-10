import { ModeToggle } from './mode-toggle';
import Logo from './logo';
import { navbarMenu } from '@/constants/data';
import { Button } from '../ui/button';
import Link from 'next/link';
import UserNavigation from './user-nav';

const Navbar = () => {
  return (
    <div className="h-16 px-4 border-b">
      <div className="flex justify-between items-center h-full">
        <div>
          <Logo />
        </div>
        <div>
          {navbarMenu.map((navItem) => (
            <Link href={navItem.link} key={navItem.id}>
              <Button variant="ghost" className="hover:text-green-500">
                {navItem.label}
              </Button>
            </Link>
          ))}
        </div>
        <div className="flex justify-center items-center gap-2">
          <ModeToggle />
          <UserNavigation />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
