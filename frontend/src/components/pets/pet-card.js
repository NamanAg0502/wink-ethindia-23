'use client';

import Image from 'next/image';
import { Card, CardContent, CardHeader } from '../ui/card';
import { Separator } from '@radix-ui/react-menu';
import { Badge } from '../ui/badge';
import Carousel from '../widgets/carousel';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import { Button } from '../ui/button';

const PetCard = ({ item }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="flex flex-col h-[400px]">
          <CardHeader className="relative w-full p-0 h-[250px] overflow-hidden">
            <Carousel items={item.links} fill={true} />
          </CardHeader>
          <CardContent className="mt-4">
            <div className="w-full flex flex-col justify-start items-start gap-3">
              <h1 className="font-medium">{item.name}</h1>
              <div className="flex flex-wrap gap-2">
                <Badge>{item.gender}</Badge>
                <Badge>{item.age}</Badge>
                <Badge>{item.breed}</Badge>
              </div>
            </div>
            <Separator />
          </CardContent>
        </Card>
      </DialogTrigger>
      <DialogContent className="">
        <DialogHeader>
          <DialogTitle>{item.name}</DialogTitle>
          <DialogDescription>{item.description}</DialogDescription>
        </DialogHeader>
        <div className="relative w-full p-0 h-[250px] overflow-hidden">
          <Carousel items={item.links} fill={true} />
        </div>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4"></div>
          <div className="grid grid-cols-4 items-center gap-4"></div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default PetCard;
