import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function FileInputField({ item }) {
  return (
    <div className="grid w-full items-center gap-1.5">
      <Label htmlFor="picture">{item.label}</Label>
      <Input id="picture" type="file" />
    </div>
  );
}
