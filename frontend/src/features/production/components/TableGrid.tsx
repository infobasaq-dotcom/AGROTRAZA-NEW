import TableCard from "./TableCard";

import { tables } from "../data/tables";

export default function TableGrid() {
  return (
    <div className="grid grid-cols-4 gap-6">

      {tables.map((table) => (

        <TableCard
          key={table.id}
          table={table}
        />

      ))}

    </div>
  );
}