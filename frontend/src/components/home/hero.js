import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import { PawPrint } from 'lucide-react';

const Hero = () => {
  return (
    <div className="max-h-[100vh - 64px] w-full px-4 py-5">
      <div className="h-[70vh] relative">
        <div className="relative h-full w-full">
          <Image
            src="/images/pets.svg"
            fill={true}
            objectFit="cover"
            className={cn(
              'transition-all aspect-square dark:bg-black rounded-lg opacity-70'
            )}
          />
        </div>
        <div className="absolute top-3/4 left-1/2 -translate-x-1/2">
          <Button variant="outline" className="px-10 py-6">
            <PawPrint className="w-8 h-8 mr-2 text-green-500" />
            <span className="text-lg">I want to adopt a Pet</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
