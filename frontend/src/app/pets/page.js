import Navbar from '@/components/common/navbar';
import PetFilter from '@/components/pets/pet-filter';
import PetList from '@/components/pets/pet-list';

const PetsPage = () => {
  return (
    <div className="w-full flex flex-col">
      <Navbar />
      <div className="h-screen">
        <div className="bg-background h-full">
          <div className="grid lg:grid-cols-5 h-full">
            <PetFilter />
            <PetList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetsPage;
