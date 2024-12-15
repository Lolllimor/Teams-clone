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
import {
  ChevronRight,
  CircleHelp,
  Monitor,
  Settings,
  Smartphone,
} from 'lucide-react';
import { FaMinusCircle, FaRegTimesCircle } from 'react-icons/fa';
import { Shared } from '../../type';

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
  { icon: CircleHelp, label: 'Help', extraIcon: ChevronRight },
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

export const chat = [
  {
    name: 'John Doe',
    date: '12/10/23 15:06',
    message:
      "I'll suggest you document these ideas; everything about it - the prons and cons of it",
  },
  {
    date: '13/02/24 12:57',
    message:
      'I need a search param on the notification endpoint and prosper said he should paginate the one on hrms; so i am guessing same goes for ticketing',
  },
  {
    date: '13/02/24 13:57',
    message:
      'I need a search param on the notification endpoint and prosper said he should paginate the one on hrms; so i am guessing same goes for ticketing',
    },
    {
      date: '13/02/24 13:59',
      message: "It isn't working still",
    },
    {
    date: '13/02/24 14:57',
    message:
      'I need a search param on the notification endpoint and prosper said he should paginate the one on hrms; so i am guessing same goes for ticketing',
  },

  {
    name: 'John Doe',
    date: '13/02/24 14:59',
    message: "It isn't working still ?",
  },
];

export const tableData: Shared[] = [
  {
    id: '1',
    name: 'https://xticket.afex.dev/api/tasks/7/staff_update_status',
    sharedOn: '5 July 2024',
    sentBy: 'Smart Ekene',
  },
  {
    id: '2',
    name: 'https://xticket.afex.dev/api/tasks/7/staff_update_status',
    sharedOn: '5 July 2024',
    sentBy: 'Smart Ekene',
  },
  {
    id: '3',
    name: 'https://xticket.afex.dev/api/tasks/7/staff_update_status',
    sharedOn: '5 July 2024',
    sentBy: 'Smart Ekene',
  },
  {
    id: '4',
    name: 'https://xticket.afex.dev/api/tasks/7/staff_update_status',
    sharedOn: '5 July 2024',
    sentBy: 'Smart Ekene',
  },
  {
    id: '5',
    name: 'Morin Rodiat',
    sharedOn: '5 July 2024',
    sentBy: 'Smart Ekene',
  },
  {
    id: '6',
    name: 'https://xticket.afex.dev/api/tasks/7/staff_update_status',
    sharedOn: '5 July 2024',
    sentBy: 'Smart Ekene',
  },
  {
    id: '7',
    name: 'https://xticket.afex.dev/api/tasks/7/staff_update_status',
    sharedOn: '5 July 2024',
    sentBy: 'Smart Ekene',
  },
  {
    id: '8',
    name: 'https://xticket.afex.dev/api/tasks/7/staff_update_status',
    sharedOn: '5 July 2024',
    sentBy: 'Smart Ekene',
  },
  {
    id: '9',
    name: 'https://xticket.afex.dev/api/tasks/7/staff_update_status',
    sharedOn: '5 July 2024',
    sentBy: 'Morin Rodiat Ololade',
  },
];