import React from "react";
import TableCell from "./TableCell";
const TableRow = ({ row, isEven }) => (
  <tr>
    <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
      {row.position}
    </TableCell>
    <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
      {row.name}
    </TableCell>
    <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
      {row.phone}
    </TableCell>
    <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
      {row.extension}
    </TableCell>
  </tr>
);

export default TableRow;
