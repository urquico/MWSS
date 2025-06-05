import React from 'react';
import { Group, Button, TextInput } from '@mantine/core';
import { IconSearch, IconDownload, IconX } from '@tabler/icons-react';
import { FilterToggleIcon } from '@/components/icons/IconFilter';
import { ToolbarProps } from '../types/table-toolbar-props';


export function TableToolbar({
    onGlobalFilterChange,
    onExport,
    onResetFilters,
    features,
    globalFilter = '',
    exportFilename = 'exported-data',
    isColumnFilterActive = false,
    onToggleColumnFilter,
}: ToolbarProps) {
    if (!features.filtering?.global && !features.export) return null;

    return (
        <Group mb="md" justify="space-between" px={15}>
            {features.filtering?.global && (
                <TextInput
                    leftSection={<IconSearch size={16} />}
                    placeholder="Global search..."
                    value={globalFilter}
                    onChange={(e) => onGlobalFilterChange?.(e.currentTarget.value)}
                    style={{ flex: 1 }}
                />
            )}

            <Group>
                <Button
                    onClick={onResetFilters}
                    leftSection={<IconX size={16} />}
                    disabled={!globalFilter}
                >
                    Reset Filters
                </Button>

                {features.export && (
                    <Button
                        onClick={onExport}
                        leftSection={<IconDownload size={16} />}
                        variant="outline"
                        color="gray"
                    >
                        Export
                    </Button>
                )}

                {features.filtering && (
                    <FilterToggleIcon
                        isActive={!!isColumnFilterActive}
                        onToggle={onToggleColumnFilter ?? (() => { })}
                    />
                )}

            </Group>
        </Group>
    );
}