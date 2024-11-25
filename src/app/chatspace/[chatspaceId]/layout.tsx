
import Sidebar from './sidebar';
import { Toolbar } from './toolbar';
import PopoverProvider from '@/components/providers/sidebarContext';

interface ChatspaceLayoutProps {
  children: React.ReactNode;
}

export default function ChatspaceLayout({ children }: ChatspaceLayoutProps) {
  return (
    <div className="h-full bg-[#1f1f1f] flex flex-col gap-[1px] flex-1">
      <Toolbar />
      <div className=" flex overflow-auto flex-1 h-full">
        <PopoverProvider>
          <Sidebar />
        </PopoverProvider>
        {children}
      </div>
    </div>
  );
}
