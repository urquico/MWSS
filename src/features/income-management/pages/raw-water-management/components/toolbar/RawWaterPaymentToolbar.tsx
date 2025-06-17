import React, { useEffect, useMemo, useState } from 'react';
import { Box, Group, TextInput, NumberInput } from '@mantine/core';
import { DatePickerInput, DatesRangeValue } from '@mantine/dates';

interface PaymentRecord {
    soaControlNumber: string;
    soaAmount: number;
    orDate: string;
    lessee: string;
    orNo: string;
    paymentMade: number;
    balanceDue: number;
}

interface RawWaterPaymentToolbarProps {
    originalData: PaymentRecord[];
    onFilteredData: (filtered: PaymentRecord[]) => void;
}

export const RawWaterPaymentToolbar: React.FC<RawWaterPaymentToolbarProps> = ({ originalData, onFilteredData }) => {
    const [lessee, setLessee] = useState('');
    const [dateRange, setDateRange] = useState<DatesRangeValue>([null, null]);
    const [totalPayments, setTotalPayments] = useState<number | null>(null);
    const [totalBalanceDue, setTotalBalanceDue] = useState<number | null>(null);

    // Check if any filter is active
    const hasActiveFilters = useMemo(() => {
        return lessee.trim() !== '' || dateRange[0] !== null || dateRange[1] !== null;
    }, [lessee, dateRange]);

    const filteredData = useMemo(() => {
        // Always show all data initially
        if (!hasActiveFilters) {
            return originalData;
        }

        return originalData.filter((item) => {
            const matchesLessee = lessee
                ? item.lessee.toLowerCase().includes(lessee.toLowerCase())
                : true;

            const date = new Date(item.orDate);
            const hasDateFilter = dateRange[0] || dateRange[1];
            const withinRange = !hasDateFilter || (
                (!dateRange[0] || date >= new Date(dateRange[0])) &&
                (!dateRange[1] || date <= new Date(dateRange[1]))
            );

            return matchesLessee && withinRange;
        });
    }, [lessee, dateRange, originalData, hasActiveFilters]);

    useEffect(() => {
        // Always pass data to parent (filtered or unfiltered)
        onFilteredData(filteredData);

        // Only calculate totals if filters are active
        if (hasActiveFilters) {
            const payments = filteredData.reduce((sum, item) => sum + item.paymentMade, 0);
            const balance = filteredData.reduce((sum, item) => sum + item.balanceDue, 0);
            setTotalPayments(payments);
            setTotalBalanceDue(balance);
        } else {
            setTotalPayments(null);
            setTotalBalanceDue(null);
        }
    }, [filteredData, hasActiveFilters, onFilteredData]);

    const handleDateRangeChange = (value: DatesRangeValue) => {
        setDateRange(value);
    };

    return (
        <Box className="w-full space-y-2" p={15}>
            <Group grow align="end" mb="md">
                <TextInput
                    label="Lessee Name"
                    placeholder="Enter lessee name"
                    value={lessee}
                    onChange={(e) => setLessee(e.currentTarget.value)}
                />

                <DatePickerInput
                    type="range"
                    label="Date Range"
                    placeholder="Select date range"
                    value={dateRange}
                    onChange={handleDateRangeChange}
                    allowSingleDateInRange
                />
            </Group>

            <Group grow >
                <NumberInput
                    label="Total Payments"
                    value={hasActiveFilters ? totalPayments ?? 0 : ''}
                    disabled
                    hideControls
                    placeholder={hasActiveFilters ? 'Calculating...' : 'Enter Lesse Name / Date Range'}
                    prefix={hasActiveFilters ? '₱ ' : ''}
                    thousandSeparator=","
                    styles={{
                        input: {
                            fontWeight: 700,
                            color: '#000',
                        },
                    }}
                />
                <NumberInput
                    label="Balance Due"
                    value={hasActiveFilters ? totalBalanceDue ?? 0 : ''}
                    disabled
                    hideControls
                    placeholder={hasActiveFilters ? 'Calculating...' : 'Enter Lesse Name / Date Range'}
                    prefix={hasActiveFilters ? '₱ ' : ''}
                    thousandSeparator=","
                    styles={{
                        input: {
                            fontWeight: 700,
                            color: '#000',
                        },
                    }}
                />
            </Group>
        </Box>
    );
};

