import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(1, 'Pair name is required'),
  interval: z.string().min(1, 'Interval is required'),
});

type FormData = z.infer<typeof schema>;

const PairForm: React.FC<{ onSubmit: SubmitHandler<FormData> }> = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block">Pair Name</label>
        <input {...register('name')} className="w-full border px-2 py-1" />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>
      <div>
        <label className="block">Interval</label>
        <input {...register('interval')} className="w-full border px-2 py-1" />
        {errors.interval && <p className="text-red-500">{errors.interval.message}</p>}
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">Submit</button>
    </form>
  );
};

export default PairForm;
