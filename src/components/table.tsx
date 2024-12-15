'use client';

import React, { ReactNode, useEffect, useState } from 'react';
import { CiFileOn } from 'react-icons/ci';

import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  VisibilityState,
} from '@tanstack/react-table';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';
import { Checkbox } from '@/components/ui/checkbox';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { MdMoreHoriz } from 'react-icons/md';
import { Shared } from '../../type';
import { tableData } from './data';

// const data: Shared[] = [
//   {
//     id: '1',
//     name: 'https://xticket.afex.dev/api/tasks/7/staff_update_status',
//     sharedOn: '5 July 2024',
//     sentBy: 'Smart Ekene',
//   },
//   {
//     id: '2',
//     name: 'https://xticket.afex.dev/api/tasks/7/staff_update_status',
//     sharedOn: '5 July 2024',
//     sentBy: 'Smart Ekene',
//   },
//   {
//     id: '3',
//     name: 'https://xticket.afex.dev/api/tasks/7/staff_update_status',
//     sharedOn: '5 July 2024',
//     sentBy: 'Smart Ekene',
//   },
//   {
//     id: '4',
//     name: 'https://xticket.afex.dev/api/tasks/7/staff_update_status',
//     sharedOn: '5 July 2024',
//     sentBy: 'Smart Ekene',
//   },
//   {
//     id: '5',
//     name: 'Morin Rodiat',
//     sharedOn: '5 July 2024',
//     sentBy: 'Smart Ekene',
//   },
//   {
//     id: '6',
//     name: 'https://xticket.afex.dev/api/tasks/7/staff_update_status',
//     sharedOn: '5 July 2024',
//     sentBy: 'Smart Ekene',
//   },
// ];

export function AppTable<TData, TValue>({
  onStateChange,
}: {
  onStateChange: any
}) {
  const [selected, setSelected] = useState<string[]>([]);


  const columns: ColumnDef<Shared>[] = [
    {
      id: 'select',
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && 'indeterminate')
          }
          onCheckedChange={(value) => {
            table.toggleAllPageRowsSelected(!!value);
          }}
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          className="group-hover:flex hidden cursor-pointer data-[state=checked]:flex"
          checked={row.getIsSelected()}
          onCheckedChange={(value) => {
            row.toggleSelected(!!value);
            setSelected((prevSelected) =>
              prevSelected.includes(String(row.original.id))
                ? prevSelected.filter((id) => id !== String(row.original.id))
                : [...prevSelected, String(row.original.id)]
            );
          }}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: 'none',
      header: () => <CiFileOn size={16} color="#fff" />,
      cell: () => {
        return (
          <div className=" w-8 h-8 bg-white  shrink-0">
            <img src="/img.png" className="w-full h-full" />
          </div>
        );
      },
    },
    {
      accessorKey: 'name',
      header: 'Name',
      cell: ({ row }) => <p className="text-white">{row.original.name}</p>,
    },
    {
      id: 'actions',
      cell: ({ row }) => {
        return (
          <DropdownMenu>
            <DropdownMenuTrigger
              className={`${selected.includes(row.original.id) && 'opacity-100'} opacity-0 group-hover:opacity-100 `}
            >
              <MdMoreHoriz className="hover:text-purple-teams" size={20} />
            </DropdownMenuTrigger>
            <DropdownMenuContent></DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
    { accessorKey: 'sharedOn', header: 'Shared on' },
    { accessorKey: 'sentBy', header: 'Sent by' },
  ];
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data: tableData,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    getRowId: (row) => row.id,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  useEffect(() => {
    onStateChange(rowSelection)
  }, [rowSelection]);

  console.log(rowSelection);
  return (
    <Table>
      <TableHeader>
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id} className="border-[#0f0f0f]">
            {headerGroup.headers.map((header) => {
              return (
                <TableHead
                  key={header.id}
                  className="text-black-grayish font-semibold"
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </TableHead>
              );
            })}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody>
        {table.getRowModel().rows?.length ? (
          table.getRowModel().rows.map((row) => (
            <TableRow
              className="border-[#0f0f0f] group data-[state=selected]:bg-black-loading"
              key={row.id}
              data-state={row.getIsSelected() && 'selected'}
            >
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id} className="text-black-grayish text-nowrap">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={columns.length} className="h-24 text-center">
              {' '}
              No results.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
