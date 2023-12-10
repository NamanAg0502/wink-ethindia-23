import { petListData } from '@/constants/data';

import PetCard from './pet-card';

const PetList = () => {
  return (
    <div className="w-full py-10 px-12 col-span-4">
      <div className="grid grid-cols-4 gap-4">
        {petListData.map((pet, i) => (
          <PetCard item={pet} key={i} />
        ))}
      </div>
    </div>
  );
};

export default PetList;
