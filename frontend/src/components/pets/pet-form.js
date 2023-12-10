'use client';

import { useForm } from 'react-hook-form';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { DatePickerField } from '../widgets/inputs/date-picker';
import { FileInputField } from '../widgets/inputs/image-input';
import NumberInputField from '../widgets/inputs/number-input';
import SelectInputField from '../widgets/inputs/select-input';
import TextInputField from '../widgets/inputs/text-input';
import TextAreaInputField from '../widgets/inputs/textarea-input';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { ImagePlus, UploadCloud } from 'lucide-react';
import { Form } from '../ui/form';
import { Button } from '../ui/button';

const petFields = [
  {
    id: 1,
    label: 'Name',
    type: 'text',
    value: '',
    placeholder: 'Your pet name...',
  },
  {
    id: 2,
    label: 'Description',
    type: 'textarea',
    value: '',
    placeholder: 'Message...',
  },
  {
    id: 3,
    label: 'Species',
    type: 'text',
    value: '',
    placeholder: 'Pet species...',
  },
  {
    id: 4,
    label: 'Breed',
    type: 'text',
    value: '',
    placeholder: 'Your pet breed...',
  },
  {
    id: 5,
    label: 'Age',
    type: 'number',
    value: '',
    placeholder: 'Your pet age...',
  },
  {
    id: 6,
    label: 'Location',
    type: 'text',
    value: '',
    placeholder: 'How near are you...',
  },
  {
    id: 7,
    value: 'male',
    label: 'Gender',
    type: 'select',
    items: [
      {
        id: 1,
        label: 'Male',
        value: 'male',
      },
      {
        id: 2,
        label: 'Female',
        value: 'female',
      },
      {
        id: 3,
        label: 'Not Applicable',
        value: 'not applicable',
      },
    ],
  },
  {
    id: 8,
    label: 'Medication History',
    type: 'file',
    value: '',
    placeholder: 'Add pet medical history...',
  },
  {
    id: 9,
    label: 'Behaviour Assessment',
    type: 'file',
    value: '',
    placeholder: 'Add pet behaviour assessment...',
  },
];

const PetForm = () => {
  const formSchema = z.object({
    username: z.string().min(2, {
      message: 'Username must be at least 2 characters.',
    }),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
    },
  });
  const renderInputFields = (item) => {
    switch (item.type) {
      case 'text':
        return <TextInputField item={item} form={form} />;
      case 'select':
        return <SelectInputField item={item} form={form} />;
      case 'textarea':
        return <TextAreaInputField item={item} form={form} />;
      case 'number':
        return <NumberInputField item={item} form={form} />;
      case 'date':
        return <DatePickerField item={item} form={form} />;
      case 'file':
        return <FileInputField item={item} form={form} />;
      default:
        return (
          <div className="grid w-full items-center gap-1">
            <Label htmlFor={item.id} className="text-sm font-medium">
              {item.label}
            </Label>
            <Input
              placeholder={item.placeholder}
              aria-label={item.label}
              className="w-full"
              id={item.id}
            />
          </div>
        );
    }
  };

  return (
    <div className="max-w-7xl mx-auto my-12">
      <div className="text-3xl font-medium mb-12">Create Pet Profile</div>
      <div className="grid grid-cols-2 gap-10 w-full">
        <Form>
          <div className="border-2 border-dashed rounded-lg h-[400px] w-2/3 flex justify-center items-center cursor-pointer">
            <div className="flex flex-col gap-2 justify-center items-center">
              <ImagePlus className="w-8 h-8 font-extralight" />
              <span className="font-thin text-sm">Upload Pet Images</span>
            </div>
          </div>
          <div className="flex flex-wrap justify-between gap-y-4 w-full">
            {petFields.map((field) => (
              <div
                className={`${
                  field.id === 1 ||
                  field.id === 2 ||
                  field.id === 9 ||
                  field.id === 8 ||
                  field.id === 10
                    ? 'w-full'
                    : 'w-[48%]'
                }`}
                key={field.id}
              >
                {renderInputFields(field)}
              </div>
            ))}
            <div className="flex justify-end mt-4 w-full gap-2">
              <Button>Save</Button>
              <Button>Upload Profile</Button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default PetForm;
