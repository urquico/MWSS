import React, { useState } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  flexRender,
} from '@tanstack/react-table';
import {
  Table,
  Box,
  Button,
  TextInput,
  Group,
  Pagination,
  ScrollArea,
  Menu,
  Loader,
  Center, Text,
  Paper
} from '@mantine/core';
import { IconDownload, IconSearch } from '@tabler/icons-react';

import { fuzzyFilter, defaultGlobalFilterFn, handleExportData } from './utils/fuzzy-filter';
import { AdvancedTableProps } from './types/table-types';
import { FilterToggleIcon } from '@/components/icons/IconFilter';


function AdvancedTable<TData extends Record<string, any>>({
  data,
  columns,
  enableGlobalFilter = true,
  enableColumnFilters = true,
  enableExport = true,
  showFooter = false,
  renderRowActionMenuItems,
  renderRowActionButton,
  menuTargetProps,
  actionBtnText,
  enableFuzzySearch = false,
  showColumnSearch = {},
  exportFilename = 'exported-data',
  isLoading = false,
  loadingText = 'Loading data...',
}: AdvancedTableProps<TData>) {
  const [globalFilter, setGlobalFilter] = useState('');
  const [filterActive, setFilterActive] = useState(true);

  const table = useReactTable({
    data,
    columns,
    state: {
      globalFilter,
    },
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: enableFuzzySearch ? fuzzyFilter : defaultGlobalFilterFn,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    debugTable: false,
  });
  // Place here, before return:
  const page = table.getState().pagination.pageIndex + 1;
  const limit = table.getState().pagination.pageSize;
  const total = table.getFilteredRowModel().rows.length;
  const message = `Showing ${limit * (page - 1) + 1} – ${Math.min(total, limit * page)} of ${total}`;

  return (
    <Box >
      <Group mb="md" justify="space-between" px={15}>
        {enableGlobalFilter && (
          <TextInput
            leftSection={<IconSearch size={16} />}
            placeholder="Global search..."
            value={globalFilter}
            onChange={(e) => setGlobalFilter(e.currentTarget.value)}
            style={{ flex: 1 }}
          />

        )}
        <Button
          onClick={() => {
            setGlobalFilter('');
            table.resetColumnFilters();
          }}
          disabled={!globalFilter && !table.getState().columnFilters.length}
        >
          Reset Filters
        </Button>
        {enableExport && (
          <Button
            onClick={() => handleExportData(data, exportFilename)}
            leftSection={<IconDownload />}
            variant="outline" color="gray"
          >
            Export
          </Button>
        )}
        <FilterToggleIcon
          isActive={filterActive}
          onToggle={() => setFilterActive(!filterActive)}
        />
      </Group>

      <ScrollArea m={10} className='rounded-lg shadow-sm ' >
        {isLoading ? (
          <Center style={{ height: 300 }}>
            <Loader size="xl" />
            <Box ml="md">{loadingText}</Box>
          </Center>
        ) : (

          <Table highlightOnHover withTableBorder  >
            <Table.Thead className='bg-[#98B8F9] text-white' >

              {table.getHeaderGroups().map((headerGroup) => (

                <Table.Tr key={headerGroup.id}>
                  {renderRowActionMenuItems && <th>Action</th>}

                  {headerGroup.headers.map((header) => (
                    <Table.Th key={header.id} colSpan={header.colSpan}>
                      {!header.isPlaceholder && (
                        <Box>
                          <Group justify="space-between">
                            <span>
                              {flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                            </span>
                            {header.column.getCanSort() && (
                              <Button
                                variant="subtle"
                                onClick={header.column.getToggleSortingHandler()}
                                className='text-white'
                              >
                                {header.column.getIsSorted() === 'asc'
                                  ? '↑'
                                  : header.column.getIsSorted() === 'desc'
                                    ? '↓'
                                    : '↕'}
                              </Button>
                            )}
                          </Group>
                          {enableColumnFilters && filterActive && (showColumnSearch[header.column.id] ?? true) && (
                            <TextInput
                              placeholder={`Search ${String(header.column.id)}`}
                              value={
                                (header.column.getFilterValue() as string) ?? ''
                              }
                              onChange={(e) =>
                                header.column.setFilterValue(e.currentTarget.value)
                              }
                              mt={4}
                            />
                          )}
                        </Box>
                      )}
                    </Table.Th>
                  ))}
                </Table.Tr>
              ))}
            </Table.Thead>

            <Table.Tbody>
              {table.getRowModel().rows.map((row) => (

                <Table.Tr key={row.id}>
                  {renderRowActionMenuItems && (
                    <Table.Td className='flex justify-center'>
                      <Menu>
                        <Menu.Target>
                          {renderRowActionButton ? (
                            renderRowActionButton(row.original)
                          ) : (
                            <Button variant="outline" color="gray" {...menuTargetProps}>
                              {actionBtnText || 'Actions'}

                            </Button>
                          )}
                        </Menu.Target>
                        <Menu.Dropdown>
                          {renderRowActionMenuItems(row.original)}
                        </Menu.Dropdown>
                      </Menu>
                    </Table.Td>
                  )}
                  {row.getVisibleCells().map((cell) => (
                    <Table.Td key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </Table.Td>
                  ))}


                </Table.Tr>
              ))}
            </Table.Tbody>

            {showFooter && (
              <Table.Tfoot >
                {table.getFooterGroups().map((footerGroup) => (
                  <Table.Tr key={footerGroup.id} >
                    {footerGroup.headers.map((header) => (
                      <Table.Th key={header.id}>
                        {flexRender(
                          header.column.columnDef.footer,
                          header.getContext()
                        )}
                      </Table.Th>
                    ))}
                  </Table.Tr>
                ))}
              </Table.Tfoot>
            )}

          </Table>
        )}
      </ScrollArea>
      <Group justify="space-between" mt="md" p={10}>
        {!isLoading && (
          <>
            <Text size="sm" color="dimmed">
              {message}
            </Text>
            <Pagination
              color='#98B8F9'
              total={table.getPageCount()}
              value={page}
              onChange={(page) => table.setPageIndex(page - 1)}
            />
          </>
        )}
      </Group>
    </Box>
  );
}

export default AdvancedTable;