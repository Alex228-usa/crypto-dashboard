import React, { useState } from 'react';
import PairsTable from '@/app/components/PairsTable';
import PairForm from '@/app/components/PairForm';

const PairsPage: React.FC = () => {
  const [pairs, setPairs] = useState([{ id: '1', name: 'BTC/USD', interval: '1m' }]);

  const handleAddPair = (data: { name: string; interval: string }) => {
    setPairs([...pairs, { id: `${pairs.length + 1}`, ...data }]);
  };

  const handleEditPair = (id: string) => {
    // Logic to edit a pair
  };

  const handleDeletePair = (id: string) => {
    setPairs(pairs.filter((pair) => pair.id !== id));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Manage Pairs</h1>
      <PairForm onSubmit={handleAddPair} />
      <PairsTable pairs={pairs} onEdit={handleEditPair} onDelete={handleDeletePair} />
    </div>
  );
};

export default PairsPage;
