import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { Button } from '../ui/button';
import { BsInfoSquare } from 'react-icons/bs';

export const TeamsDrawer = () => {
  return (
    <Drawer direction='right' >
      <DrawerTrigger>
        <BsInfoSquare
          size={14}
          className="text-gray-light h-3 hover:text-purple-slateBlue cursor-pointer"
        />
      </DrawerTrigger>
      <DrawerContent className='max-w-[319px] h-full bg-transparent flex flex-col'>
        <DrawerHeader>
          <DrawerTitle>Are you absolutely sure?</DrawerTitle>
          <DrawerDescription>This action cannot be undone.</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <Button>Submit</Button>
          <DrawerClose>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
