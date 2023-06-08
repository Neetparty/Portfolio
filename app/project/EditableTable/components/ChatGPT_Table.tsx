'use client'

import React, { useState } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, Input, Button, Text, useBreakpointValue } from '@chakra-ui/react';

type TableData = string[][];

export const GptEditableTable = () => {
    const [tableData, setTableData] = useState<TableData>([
        ['John', 'Doe', 'john@example.com'],
        ['Jane', 'Smith', 'jane@example.com'],
        ['Bob', 'Johnson', 'bob@example.com'],
    ]);
    const [editMode, setEditMode] = useState<boolean>(false);
    const [selectedCell, setSelectedCell] = useState<{ row: number; column: number }>({
        row: -1,
        column: -1,
    });

    const handleCellChange = (
        rowIndex: number,
        columnIndex: number,
        value: string
    ) => {
        const updatedData = [...tableData];
        updatedData[rowIndex][columnIndex] = value;
        setTableData(updatedData);
    };

    const handleEditClick = (rowIndex: number, columnIndex: number) => {
        setEditMode(true);
        setSelectedCell({ row: rowIndex, column: columnIndex })
    };

    const handleSaveClick = () => {
        setEditMode(false);
        setSelectedCell({ row: -1, column: -1 });
    };

    const displayEditButton = useBreakpointValue({ base: true, md: !editMode });

    return (
        <Table variant="striped" colorScheme="teal">
            <Thead>
                <Tr>
                    <Th>Column 1</Th>
                    <Th>Column 2</Th>
                    <Th>Column 3</Th>
                </Tr>
            </Thead>
            <Tbody>
                {tableData.map((row, rowIndex) => (
                    <Tr key={rowIndex}>
                        {row.map((cell, columnIndex) => (
                            <Td key={columnIndex}>
                                {editMode && selectedCell?.row === rowIndex && selectedCell?.column === columnIndex ? (
                                    <Input
                                        value={cell}
                                        onChange={(e) =>
                                            handleCellChange(rowIndex, columnIndex, e.target.value)
                                        }
                                    />
                                ) : (
                                    <Text>{cell}</Text>
                                )}
                            </Td>
                        ))}
                        {displayEditButton && (
                            <Td>
                                {!editMode || (selectedCell?.row !== rowIndex || selectedCell?.column !== row.length) ? (
                                    <Button onClick={() => handleEditClick(rowIndex, row.length)}>
                                        Edit
                                    </Button>
                                ) : (
                                    <Button onClick={handleSaveClick}>Save</Button>
                                )}
                            </Td>
                        )}
                    </Tr>
                ))}
            </Tbody>
        </Table>
    );
};
