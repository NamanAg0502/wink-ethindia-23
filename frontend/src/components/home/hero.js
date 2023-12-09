import Image from 'next/image';
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { cn } from '@/lib/utils';

const Hero = () => {
  return (
    <div className="max-h-[100vh - 64px] w-full px-4 py-5">
      <div className="flex justify-center items-center gap-10">
        <div className="relative h-full">
          <Image
            src="/images/pets.svg"
            height={700}
            width={700}
            className={cn('transition-all aspect-square bg-white rounded-lg')}
          />
        </div>
        <div className="grid grid-rows-2 gap-6 w-1/3">
          <Card className="cursor-pointer hover:scale-105 ease-in-out duration-200">
            <CardHeader className="flex justify-start items-start">
              <div></div>
              <CardTitle className="text-green-500">
                I want to adopt a pet
              </CardTitle>
              <CardDescription>
                Search the available pets listed on PixelPaw
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="cursor-pointer hover:scale-105 ease-in-out duration-200">
            <CardHeader className="flex justify-start items-start">
              <CardTitle className="text-green-500">
                I need to rehome my pet
              </CardTitle>
              <CardDescription>
                Start the process. It's free to list your pet on PixelPaw
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Hero;
