import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

const SearchInputField = () => {
  return (
    <div className="w-full">
      <Input
        iconStart={true}
        placeholder="Search"
        icon={<Search className="mr-2 h-4 w-4" />}
      />
    </div>
  );
};

export default SearchInputField;
