import { Textarea } from '@/components/ui/textarea';
import { Label } from '@radix-ui/react-dropdown-menu';

const TextAreaInputField = ({ item }) => {
  return (
    <div className="grid w-full items-center gap-2">
      <Label htmlFor={item.id} className="text-sm font-medium">
        {item.label}
      </Label>
      <Textarea
        placeholder={item.placeholder}
        aria-label={item.label}
        className="w-full"
        rows={4}
        id={item.id}
        // onChange={(e) => handleInputChange(item.label, e.target.value)}
      />
    </div>
  );
};

export default TextAreaInputField;
