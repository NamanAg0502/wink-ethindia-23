'use client';

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
} from '@/components/ui/command';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { categories } from '@/constants/data';
import { useState } from 'react';

const SelectInputField = ({ item, form }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');

  const categories = item.items;

  return (
    <Select>
      <div className="flex flex-col items-start justify-center gap-2">
        <Label>{item.label}</Label>
        <SelectTrigger>
          <SelectValue
            className=""
            placeholder={
              value
                ? categories.find(
                    (category) => category.label.toLowerCase === value
                  )?.label
                : item.placeholder
            }
          />
        </SelectTrigger>
      </div>
      <SelectContent>
        <Command>
          <CommandInput
            placeholder="Search category..."
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <CommandEmpty>No language found.</CommandEmpty>
          <CommandGroup>
            {categories.map((category) => (
              <SelectItem
                key={category.value}
                value={category.label}
                className="cursor-pointer"
                onSelect={(currentValue) => {
                  console.log(currentValue);
                  setValue(currentValue === value ? '' : currentValue);
                  setOpen(false);
                }}
              >
                {category.label}
              </SelectItem>
            ))}
          </CommandGroup>
        </Command>
      </SelectContent>
    </Select>
  );
};

export default SelectInputField;
