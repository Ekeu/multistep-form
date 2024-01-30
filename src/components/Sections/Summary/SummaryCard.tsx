import { FC } from 'react';

interface ISummaryCardProps {
  id: string;
  label: string;
  value: string;
}

const formatAddress = (address: string) => {
  const match = address.match(/(.*) (\d{5}) (.*)/);
  if (match) {
    return (
      <span>
        {match[1]} <br />
        {match[2]} <br />
        {match[3]}
      </span>
    );
  }
  return '';
};

const SummaryCard: FC<ISummaryCardProps> = ({ id, label, value }) => {
  return (
    <div className='rounded-10 bg-white py-3 px-4 shadow-md font-inter'>
      <p className='text-sm font-medium tracking-tight text-finfrog-grey-100'>
        {label}
      </p>
      <p className='text-base font-medium text-finfrog-grey-200'>
        {id === 'address' ? formatAddress(value) : value}
      </p>
    </div>
  );
};

export default SummaryCard;
