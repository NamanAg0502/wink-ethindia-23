'use client';

import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { ImagePlus } from 'lucide-react';
import { Button } from '../ui/button';
import usePetCareSystem from '@/hooks/contract-hook';
import { useState } from 'react';
import { Textarea } from '../ui/textarea';

const PetForm = () => {
  const { account, addPet } = usePetCareSystem();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    species: '',
    breed: '',
    age: '',
    location: '',
    gender: '', // Default to male
    medicationHistory: '',
    behaviourAssessment: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data (you may add additional validation logic here)

    // Call the addPet function from the contract hook
    await addPet(
      formData.species,
      formData.breed,
      formData.medicationHistory,
      formData.behaviourAssessment,
      'imageUrl', // You can replace this with an actual image URL or use a separate function to upload the image to IPFS or similar
      formData.description
    );

    // Clear the form after submission
    setFormData({
      name: '',
      description: '',
      species: '',
      breed: '',
      age: '',
      location: '',
      gender: '',
      medicationHistory: '',
      behaviourAssessment: '',
    });
  };

  const handleInputChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  return (
    <div className="max-w-7xl mx-auto my-12">
      <div className="text-3xl font-medium mb-12">Create Pet Profile</div>
      <div className="">
        <form
          className="grid grid-cols-2 gap-10 w-full"
          onSubmit={handleSubmit}
        >
          <div className="border-2 border-dashed rounded-lg h-[400px] w-2/3 flex justify-center items-center cursor-pointer">
            <div className="flex flex-col gap-2 justify-center items-center">
              <ImagePlus className="w-8 h-8 font-extralight" />
              <span className="font-thin text-sm">Upload Pet Images</span>
            </div>
          </div>
          <div className="flex flex-wrap justify-between gap-y-4 w-full">
            <div className="grid w-full items-center gap-2">
              <Label>Pet Name</Label>
              <Input
                placeholder="Your pet name..."
                labelPlacement="outside"
                radius="sm"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
              />
            </div>
            <div className="grid w-full items-center gap-2">
              <Label>Pet Description</Label>
              <Textarea
                placeholder="Your pet name..."
                labelPlacement="outside"
                radius="sm"
                value={formData.description}
                onChange={(e) =>
                  handleInputChange('description', e.target.value)
                }
              />
            </div>
            <div className="flex justify-between w-full space-x-4">
              <div className="grid w-full items-center gap-2">
                <Label>Pet Species</Label>
                <Input
                  placeholder="Your pet species..."
                  labelPlacement="outside"
                  radius="sm"
                  value={formData.species}
                  onChange={(e) => handleInputChange('species', e.target.value)}
                />
              </div>
              <div className="grid w-full items-center gap-2">
                <Label>Pet Breed</Label>
                <Input
                  placeholder="Your pet breed..."
                  labelPlacement="outside"
                  radius="sm"
                  value={formData.breed}
                  onChange={(e) => handleInputChange('breed', e.target.value)}
                />
              </div>
            </div>
            <div className="flex justify-between w-full space-x-4">
              <div className="grid w-full items-center gap-2">
                <Label>Pet Age</Label>
                <Input
                  placeholder="Your pet age..."
                  labelPlacement="outside"
                  radius="sm"
                  value={formData.age}
                  onChange={(e) => handleInputChange('age', e.target.value)}
                />
              </div>
              <div className="grid w-full items-center gap-2">
                <Label>Pet Gender</Label>
                <Input
                  placeholder="Your pet gender..."
                  labelPlacement="outside"
                  radius="sm"
                  value={formData.gender}
                  onChange={(e) => handleInputChange('gender', e.target.value)}
                />
              </div>
            </div>
            <div className="grid w-full items-center gap-2">
              <Label htmlFor="medical">Pet Medical History</Label>
              <Input
                placeholder="Your pet medical history..."
                type="file"
                id="medical"
                value={formData.medicationHistory}
                onChange={(e) =>
                  handleInputChange('medicationHistory', e.target.value)
                }
              />
            </div>
            <div className="grid w-full items-center gap-2">
              <Label>Pet Behaviour Assessment</Label>
              <Input
                placeholder="Your pet behaviour..."
                type="file"
                value={formData.behaviourAssessment}
                onChange={(e) =>
                  handleInputChange('behaviourAssessment', e.target.value)
                }
              />
            </div>
            <div className="flex justify-end mt-4 w-full gap-2">
              <Button>Save</Button>
              <Button type="submit">Upload Profile</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PetForm;
