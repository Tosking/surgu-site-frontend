import React from "react";
import Table from "../../ui/Table/Table";
import TableHeader from "../../ui/Table/TableHeader";
import TableBody from "../../ui/Table/TableBody";
import TableRow from "../../ui/Table/TableRow";

const InformationTable = ({ data }) => {
  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200">
      <Table className="min-w-full divide-y divide-gray-200">
        <TableHeader className="bg-[#F5F7FA]">
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Должность
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            ФИО
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Телефон
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Внутренний номер
          </th>
        </TableHeader>
        <TableBody className="bg-white divide-y divide-gray-200">
          {data.map((row, index) => (
            <TableRow key={index} row={row} isEven={index % 2 === 0} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default InformationTable;
