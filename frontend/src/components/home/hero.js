import Image from 'next/image';
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card';

const Hero = () => {
  return (
    <div className="max-h-[100vh - 64px] w-full px-4">
      <div className="flex justify-center items-center gap-10">
        <div className="relative h-full">
          <Image
            src="/images/pets.svg"
            height={700}
            width={700}
            className="bg-white"
          />
        </div>
        <div className="grid grid-rows-2 gap-6 w-1/3">
          <Card className="cursor-pointer">
            <CardHeader>
              <CardTitle>I want to adopt a pet</CardTitle>
              <CardDescription>
                Search the available pets listed on PixelPaw
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>I need to rehome my pet</CardTitle>
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
