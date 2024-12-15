'use client';
import React, { createContext, useState, ReactNode } from 'react';

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
  name?: string | null;
}

export const PopoverContext = createContext<IPopoverContext | null>(null);

const initialvalues = {
  opened: false,
  component: null,
  id: null,
  onclose: () => {},
  closeOnHoverOutside: true,
  name: 'Chat',
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
