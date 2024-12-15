import React from 'react';
import { IoPeople } from 'react-icons/io5';
import { IoAddCircle } from 'react-icons/io5';
import { Button } from './ui/button';

export const AddMemberIcon = () => {
  return (
    <Button className="w-8 relative h-8 border border-gray-granite bg-accent/5 hover:bg-black-olive2 hover:border-silver-sonic rounded-full flex justify-center items-center">
      <IoPeople className="  text-white  hover:text-white size-5" />
      <div className="w-[12px] h-[12px] rounded-full absolute bottom-1 right-1.5 bg-black-loading  flex justify-center items-center">
        <IoAddCircle className="w-[11px] h-[11px] text-white" />
      </div>
    </Button>
  );
};
