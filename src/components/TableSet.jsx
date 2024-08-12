import React from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const mockData = [
  {
    tableName: 'User Table',
    columns: ['User ID', 'Name', 'Email', 'Role'],
    rows: [
      ['1', 'John Doe', 'john@example.com', 'Admin'],
      ['2', 'Jane Smith', 'jane@example.com', 'User'],
      ['3', 'Alice Johnson', 'alice@example.com', 'User'],
    ],
  },
  {
    tableName: 'Order Table',
    columns: ['Order ID', 'User ID', 'Product', 'Amount'],
    rows: [
      ['101', '1', 'Laptop', '$1200'],
      ['102', '2', 'Smartphone', '$800'],
      ['103', '3', 'Headphones', '$150'],
    ],
  },
  {
    tableName: 'Product Table',
    columns: ['Product ID', 'Product Name', 'Price', 'Stock'],
    rows: [
      ['P001', 'Laptop', '$1200', '15'],
      ['P002', 'Smartphone', '$800', '30'],
      ['P003', 'Headphones', '$150', '50'],
    ],
  },
  {
    tableName: 'Product Table',
    columns: ['Product ID', 'Product Name', 'Price', 'Stock'],
    rows: [
      ['P001', 'Laptop', '$1200', '15'],
      ['P002', 'Smartphone', '$800', '30'],
      ['P003', 'Headphones', '$150', '50'],
    ],
  },
  {
    tableName: 'Product Table',
    columns: ['Product ID', 'Product Name', 'Price', 'Stock'],
    rows: [
      ['P001', 'Laptop', '$1200', '15'],
      ['P002', 'Smartphone', '$800', '30'],
      ['P003', 'Headphones', '$150', '50'],
    ],
  },
];

const TableSet = () => {
  return (
      <Box sx={{ padding: 2}}>
        {mockData.map((table, index) => (
          <Box key={index} sx={{ marginBottom: 4 }}>
            <Typography variant="h6" gutterBottom>
              {table.tableName}
            </Typography>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    {table.columns.map((column, colIndex) => (
                      <TableCell key={colIndex}>{column}</TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {table.rows.map((row, rowIndex) => (
                    <TableRow key={rowIndex}>
                      {row.map((cell, cellIndex) => (
                        <TableCell key={cellIndex}>{cell}</TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        ))}
    </Box>
  );
};

export default TableSet;
