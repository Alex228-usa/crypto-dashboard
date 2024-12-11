// src/components/EditPairModal.tsx
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

interface EditPairModalProps {
  isOpen: boolean;
  onClose: () => void;
  pair: Pair | null;
  onSubmit: (data: EditPairFormValues) => void;
}

const schema = z.object({
  interval: z.number().min(1, 'Interval must be at least 1 minute'),
});

type EditPairFormValues = z.infer<typeof schema>;

const EditPairModal: React.FC<EditPairModalProps> = ({ isOpen, onClose, pair, onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EditPairFormValues>({
    resolver: zodResolver(schema),
    defaultValues: { interval: pair?.interval || 1 },
  });

  if (!isOpen) return null;

  const handleFormSubmit: SubmitHandler<EditPairFormValues> = (data) => {
    onSubmit(data);
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Edit Pair: {pair?.name}</h2>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <div>
            <label>Interval (minutes)</label>
            <input {...register('interval')} type="number" />
            {errors.interval && <p>{errors.interval.message}</p>}
          </div>
          <button type="submit">Save</button>
          <button type="button" onClick={onClose}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditPairModal;
