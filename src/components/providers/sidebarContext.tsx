"use client"
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Popover } from '../ui/popover';

export interface IPopoverContext {
  setPopoverState: React.Dispatch<React.SetStateAction<IPopoverState>>;
  popoverState: IPopoverState;
  close: () => void;
  size?: number;
}

interface IPopoverState {
  opened: boolean;
  component: null | ReactNode | JSX.Element;
  id?: null | string | number;
  onClose?: () => void;
  size?: number | string;
    closeOnHoverOutside?: boolean;
    name?: string | null
}

export const PopoverContext = createContext<IPopoverContext | null>(null);

const initialvalues = {
  opened: false,
  component: null,
  id: null,
  onclose: () => {},
  closeOnHoverOutside: true,name: "Chat"
};

function PopoverProvider({ children }: { children: ReactNode }) {
  const [popoverState, setPopoverState] =
    useState<IPopoverState>(initialvalues);
  const close = () => {
    setPopoverState(initialvalues);
  };

  return (
    <PopoverContext.Provider
      value={{
        setPopoverState,
        close,
        popoverState,
      }}
    >
      {children}
    </PopoverContext.Provider>
  );
}

export default PopoverProvider;

// type PopoverSidebarContextType = [string, React.Dispatch<React.SetStateAction<string>>];
// const PopoverSidebarContext = createContext<PopoverSidebarContextType | undefined>(undefined);

// const PopoverProvider: React.FC = ({ children }) => {
//   const [value, setValue] = useState('Initial Chat Value');

//   return (
//     <PopoverSidebarContext.Provider value={[value, setValue]}>
//       {children}
//     </PopoverSidebarContext.Provider>
//   );
// };

// export default PopoverProvider;
