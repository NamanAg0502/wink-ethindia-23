import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const NumberInputField = ({ item }) => {
  return (
    <div className="grid w-full items-center gap-2">
      <Label htmlFor={item.id}>{item.label}</Label>
      <Input
        placeholder={item.placeholder}
        aria-label={item.label}
        className="w-full"
        type="number"
        id={item.id}
        // onChange={(e) => handleInputChange(item.label, e.target.value)}
      />
    </div>
  );
};

export default NumberInputField;
