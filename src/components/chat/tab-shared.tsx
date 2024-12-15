'use client';
import { Button } from '../ui/button';
import React, { useState } from 'react';
import { FaFile } from 'react-icons/fa';
import { CiGlobe } from 'react-icons/ci';
import { HiUpload } from 'react-icons/hi';
import { MdHistory } from 'react-icons/md';
import { AppTable } from '../table';
import { IoChevronDown } from 'react-icons/io5';
import { IoLinkOutline } from 'react-icons/io5';
import { GoAlert } from 'react-icons/go';
import { X } from 'lucide-react';
export const TabShared = () => {
  const [activeStates, setActiveStates] = useState('files');
  const [selected, setSelected] = useState<number>(0);

  // Update the selected state
  const handleStateChange = (state: any) => {
    setSelected(Object.values(state).filter((value) => value === true).length);
  };

  const styles = {
    defaultBtn:
      ' hover:-text-white  hover:border-silver-sonic hover:bg-black-olive2 h-fit py-1.5 px-3  border border-gray-granite rounded-full text-sm',
    activeBtn:
      'border-purple-darkperiwinkle text-purple-periwinkle bg-gray-slate',
  };

  return (
    <div className=" flex flex-col  w-full flex-1 relative">
      {selected !== 0 ? (
        <div className="  flex justify-between items-center w-full h-[60px]  pb-1 px-4">
          <div className="bg-black-charleston border-gray-granite rounded-md border h-[48px] w-full px-3 py-2">
            {selected === 1 ? (
              <div className="flex justify-between items-center h-full">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1 items-center px-2 group  cursor-pointer">
                    <img src="/file.svg" className="h-4 w-4" />
                    <span className="text-black-grayish mr-0.5 text-sm font-medium group-hover:text-purple-teams">
                      Open
                    </span>
                    <IoChevronDown
                      size={20}
                      className="group-hover:text-purple-teams text-black-grayish"
                    />
                  </div>
                  <div className="flex gap-1 items-center px-2 group  cursor-pointer">
                    <IoLinkOutline
                      size={20}
                      className="group-hover:text-purple-teams text-black-grayish"
                    />
                    <span className="text-black-grayish mr-0.5 text-sm font-medium group-hover:text-purple-teams">
                      Copy link
                    </span>
                  </div>
                </div>
                <Button className="flex gap-2 items-center border group border-gray-granite rounded-full mr-[12px] text-sm px-2 bg-accent/5 h-8 hover:text-purple-teams hover:border-0 hover:bg-transparent">
                  <X
                    size={20}
                    className="group-hover:text-purple-teams text-black-grayish"
                  />
                  {selected} selected
                </Button>
              </div>
            ) : (
              <div className="flex justify-between items-center h-full">
                <div className="flex gap-2 items-center px-4 group  cursor-pointer">
                  <GoAlert size={16} className="text-red-600" />
                  <span className="text-gray-light mr-0.5 text-sm font-medium group-hover:text-purple-teams">
                    No menu options for this selection
                  </span>
                </div>
                <Button className="flex gap-2 items-center border group border-gray-granite rounded-full mr-[12px] text-sm px-2 bg-accent/5 h-8 hover:text-purple-teams hover:border-0 hover:bg-transparent  text-gray-light">
                  <X
                    size={20}
                    className="group-hover:text-purple-teams text-gray-light"
                  />
                  {selected} selected
                </Button>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="  flex justify-between items-center w-full border-b-[1.5px] h-[60px]  border-b-gray-granite pb-1">
          <div className="flex gap-2 w-full px-4">
            <Button
              onClick={() => setActiveStates('recent')}
              className={`${activeStates === 'recent' ? styles.activeBtn : 'bg-transparent'} ${styles.defaultBtn} group gap-2`}
            >
              <MdHistory
                className={`${activeStates === 'recent' ? 'text-purple-teams' : 'text-black-grayish'} group-hover:text-purple-teams text-black-grayish`}
              />
              Recent
            </Button>
            <Button
              onClick={() => setActiveStates('files')}
              className={`${activeStates === 'files' ? styles.activeBtn : 'bg-transparent'} ${styles.defaultBtn} group gap-2`}
            >
              <FaFile
                className={`${activeStates === 'files' ? 'text-purple-teams' : 'text-black-grayish'} group-hover:text-purple-teams text-black-grayish`}
              />
              Files
            </Button>
            <Button
              onClick={() => setActiveStates('links')}
              className={`${activeStates === 'links' ? styles.activeBtn : 'bg-transparent'} ${styles.defaultBtn} group gap-2`}
            >
              <CiGlobe
                className={`${activeStates === 'links' ? 'text-purple-teams' : 'text-black-grayish'} group-hover:text-purple-teams text-black-grayish`}
              />
              Links
            </Button>
          </div>
          {activeStates !== 'links' && (
            <Button className="flex gap-2 items-center border border-gray-granite rounded-none mr-[12px] text-sm w-[96px] bg-accent/5 h-8">
              <HiUpload size={20} />
              Upload
            </Button>
          )}
        </div>
      )}

      <div className='flex w-full h-full overflow-auto'>

      <div className="bg-black-charleston  flex px-5 h-fit w-full ">
        <AppTable onStateChange={handleStateChange} />
      </div>
      </div>

    </div>
  );
};
