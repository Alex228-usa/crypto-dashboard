import React from 'react';

type Pair = {
  id: string;
  name: string;
  interval: string;
};

const PairsTable: React.FC<{ pairs: Pair[]; onEdit: (id: string) => void; onDelete: (id: string) => void }> = ({ pairs, onEdit, onDelete }) => {
  return (
    <table className="min-w-full border-collapse">
      <thead>
        <tr>
          <th className="border px-4 py-2">ID</th>
          <th className="border px-4 py-2">Pair</th>
          <th className="border px-4 py-2">Interval</th>
          <th className="border px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {pairs.map((pair) => (
          <tr key={pair.id}>
            <td className="border px-4 py-2">{pair.id}</td>
            <td className="border px-4 py-2">{pair.name}</td>
            <td className="border px-4 py-2">{pair.interval}</td>
            <td className="border px-4 py-2">
              <button className="text-blue-500 mr-2" onClick={() => onEdit(pair.id)}>Edit</button>
              <button className="text-red-500" onClick={() => onDelete(pair.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PairsTable;
