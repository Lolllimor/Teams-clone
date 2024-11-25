import { LuPinOff } from 'react-icons/lu';
import { CiUnread } from 'react-icons/ci';
import { GiRabbit } from 'react-icons/gi';
import { GoWorkflow } from 'react-icons/go';
import { MdGroupAdd, MdMoreHoriz } from 'react-icons/md';
import { RiAddBoxFill } from 'react-icons/ri';
import { BsGraphUpArrow, BsPersonFillAdd } from 'react-icons/bs';
import { IoChatbubbleEllipses, IoSettingsSharp } from 'react-icons/io5';
import {
  FaBell,
  FaPeopleGroup,
  FaCheckDouble,
  FaClock,
  FaBellSlash,
  FaGlasses,
  FaCircle,
  FaCircleCheck,
} from 'react-icons/fa6';
import { ChevronRight, CircleHelp, Monitor, Settings, Smartphone } from 'lucide-react';
import { FaMinusCircle, FaRegTimesCircle } from 'react-icons/fa';

export const sidebarData = [
  { icon: GiRabbit, label: 'Rab Connect' },
  { icon: FaBell, label: 'Activity' },
  { icon: IoChatbubbleEllipses, label: 'Chat' },
  { icon: FaPeopleGroup, label: 'Teams' },
  { icon: FaCheckDouble, label: 'Planner' },
  { icon: FaClock, label: 'Shifts' },
  { icon: MdMoreHoriz },
  { icon: RiAddBoxFill, label: 'Apps' },
];

export const dropdownData = [
  { icon: CiUnread, label: 'Mark as unread' },
  { icon: LuPinOff, label: 'Unpin' },
  { icon: FaBellSlash, label: 'Mute' },
  { icon: BsPersonFillAdd, label: 'Notify when available' },
  { icon: CiUnread, label: 'Manage apps' },
  { icon: GoWorkflow, label: 'Workflows' },
];

export const TeamDropdown = [
  { icon: IoSettingsSharp, label: 'Your teams and channels' },
  { icon: MdGroupAdd, label: 'Pending invites' },
  { icon: BsGraphUpArrow, label: 'Analytics' },
];

export const DropdownEllipsis = [
  { icon: Settings, label: 'Settings' },
  { icon: CircleHelp, label: 'Help' , extraIcon:ChevronRight },
];
export const DropdownEllipsis2 = [
  { icon: Monitor, label: 'Download the desktop app' },
  { icon: Smartphone, label: 'Download the mobile app' },
];

export const ToolbarStatus = [
  { icon: FaCircleCheck, label: 'Available', color: 'text-[#3db238]' },
  { icon: FaCircle, label: 'Busy', color: 'text-[#d13438]' },
  { icon: FaMinusCircle, label: 'Do not disturb', color: 'text-[#d13438]' },
  { icon: FaClock, label: 'Be right back', color: 'text-[#eaa300]' },
  { icon: FaClock, label: 'Appear away', color: 'text-[#eaa300]' },
  { icon: FaRegTimesCircle, label: 'Appear offline', color: 'text-[#999999]' },
];