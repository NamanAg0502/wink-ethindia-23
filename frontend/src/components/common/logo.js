import { PawPrint } from 'lucide-react';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-center justify-center gap-2">
        <span>
          <PawPrint color="green" />
        </span>
        <span className="text-lg">PixelPaw</span>
      </div>
    </Link>
  );
};

export default Logo;
