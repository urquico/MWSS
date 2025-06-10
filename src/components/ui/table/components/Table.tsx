import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  flexRender,
} from '@tanstack/react-table';

import {
  Box,
  Button,
  TextInput,
  Group,
  Pagination,
  ScrollArea,
  Menu,
  Loader,
  Center,
  Text,
  Table,
  ActionIcon,
  Flex
} from '@mantine/core';
import { fuzzyFilter, defaultGlobalFilterFn, handleExportData } from '../utils/fuzzy-filter';
import { AdvancedTableProps } from '../types/table-props';
import { TableToolbar } from './TableToolbar';
import { useState } from 'react';
import { IconDots } from '@tabler/icons-react';



function DataTable<TData extends Record<string, any>>({
  data,
  columns,
  features = {},
  loading = {},
  className,
  style,
}: AdvancedTableProps<TData>) {
  const [globalFilter, setGlobalFilter] = useState('');
  const [showColumnFilters, setShowColumnFilters] = useState(false);

  const table = useReactTable({
    data,
    columns,
    state: {
      globalFilter,
    },
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: features.filtering?.fuzzy ? fuzzyFilter : defaultGlobalFilterFn,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    debugTable: false,
    enableFilters: true,
  });

  const page = table.getState().pagination.pageIndex + 1;
  const limit = table.getState().pagination.pageSize;
  const total = table.getFilteredRowModel().rows.length;
  const message = `Showing ${limit * (page - 1) + 1} – ${Math.min(total, limit * page)} of ${total}`;

  const handleExport = () => {
    const filename = typeof features.export === 'object' ? features.export.filename : 'exported-data';
    handleExportData(data, filename || 'exported-data');
  };

  if (loading?.isLoading) {
    return (
      <Center style={{ height: 300 }}>
        <Loader size="xl" />
        <Box ml="md">{loading.text || 'Loading data...'}</Box>
      </Center>
    );
  }

  return (
    <Box className={className} style={style}>
      <TableToolbar
        onGlobalFilterChange={setGlobalFilter}
        onExport={handleExport}
        onResetFilters={() => {
          setGlobalFilter('');
          table.resetColumnFilters();
        }}
        features={features}
        globalFilter={globalFilter}
        exportFilename={typeof features.export === 'object' ? features.export.filename : undefined}
        isColumnFilterActive={showColumnFilters}
        onToggleColumnFilter={() => setShowColumnFilters((prev) => !prev)}
      />

      <ScrollArea m={10} className='rounded-lg shadow-sm'>


        <Table highlightOnHover withTableBorder>
          <Table.Thead className='text-white bg-skyBlue'>
            {table.getHeaderGroups().map((headerGroup) => (
              <Table.Tr key={headerGroup.id}>
                {features.rowActions && <Table.Th className='text-center'>Action</Table.Th>}
                {headerGroup.headers.map((header) => (
                  <Table.Th key={header.id} colSpan={header.colSpan} >
                    {!header.isPlaceholder && (
                      <Flex direction="column" gap={4}>
                        <Group justify="space-between" align="center" wrap="nowrap">
                          <Text fw={700} size="sm">
                            {flexRender(header.column.columnDef.header, header.getContext())}
                          </Text>
                          {features.sorting && header.column.getCanSort() && (
                            <Button
                              variant="subtle"
                              size="xs"
                              px={6}
                              onClick={header.column.getToggleSortingHandler()}
                              className="text-white"
                            >
                              {header.column.getIsSorted() === 'asc'
                                ? '↑'
                                : header.column.getIsSorted() === 'desc'
                                  ? '↓'
                                  : '↕'}
                            </Button>
                          )}
                        </Group>

                        {showColumnFilters && (
                          <TextInput
                            placeholder={`Search ${String(header.column.columnDef.header)}`}
                            value={(header.column.getFilterValue() as string) ?? ''}
                            onChange={(e) => header.column.setFilterValue(e.currentTarget.value)}
                            size="xs"
                          />
                        )}
                      </Flex>

                    )}
                  </Table.Th>
                ))}
              </Table.Tr>
            ))}
          </Table.Thead>

          <Table.Tbody>
            {table.getRowModel().rows.length === 0 ? (
              <Table.Tr>
                <Table.Td
                  colSpan={
                    (features.rowActions ? columns.length + 1 : columns.length) || 1
                  }
                  className="text-center text-gray-400"
                >
                  No available data
                </Table.Td>
              </Table.Tr>
            ) : (
              table.getRowModel().rows.map((row) => (
                <Table.Tr key={row.id}>
                  {features.rowActions && (
                    <Table.Td className='flex justify-center'>
                      {typeof features.rowActions === 'object' ? (
                        features.rowActions.renderMenu ? (
                          <Menu>
                            <Menu.Target>
                              {features.rowActions.renderButton ? (
                                features.rowActions.renderButton(row.original)
                              ) : (
                                <ActionIcon variant="transparent" aria-label="action">
                                  <IconDots className='text-slate-800' />
                                </ActionIcon>
                              )}
                            </Menu.Target>
                            <Menu.Dropdown>
                              {features.rowActions.renderMenu(row.original)}
                            </Menu.Dropdown>
                          </Menu>
                        ) : features.rowActions.renderButton ? (
                          features.rowActions.renderButton(row.original)
                        ) : (
                          <Button variant="outline" color="gray">Actions</Button>
                        )
                      ) : features.rowActions === true ? (
                        <Button variant="outline" color="gray">Actions</Button>
                      ) : null}
                    </Table.Td>
                  )}
                  {row.getVisibleCells().map((cell) => (
                    <Table.Td key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </Table.Td>
                  ))}
                </Table.Tr>
              ))
            )}
          </Table.Tbody>

        </Table>
      </ScrollArea>

      {features.pagination && (
        <Group justify="space-between" mt="md" p={10}>
          <Text size="sm" color="dimmed">
            {message}
          </Text>
          <Pagination
            color='#98B8F9'
            total={table.getPageCount()}
            value={page}
            onChange={(page) => table.setPageIndex(page - 1)}
          />
        </Group>
      )}
    </Box>
  );
}

export default DataTable;