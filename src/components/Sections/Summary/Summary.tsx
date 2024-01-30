import { ComponentProps, FC } from 'react';
import { useFormContext } from 'react-hook-form';
import SummaryCard from './SummaryCard';
import { FORM_NAMES_MAP } from '../../../constants';

type TSummaryProps = ComponentProps<'div'>;

const Summary: FC<TSummaryProps> = ({ children }) => {
  const { watch } = useFormContext();

  const watchAllFields = watch();

  return (
    <div className='flex flex-col'>
      {children}
      <div className='grid grid-cols-1 gap-2'>
        {Object.entries(watchAllFields).map(([key, value]) => {
          return (
            <SummaryCard
              id={key}
              key={key}
              value={value}
              label={FORM_NAMES_MAP[key]}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Summary;
