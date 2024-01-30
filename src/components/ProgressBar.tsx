import { FC } from 'react';
import RPB from '@ramonak/react-progress-bar';

interface ProgressBarProps {
  completed?: number;
}

const ProgressBar: FC<ProgressBarProps> = ({ completed = 0 }) => {
  return (
    <RPB
      height={'4px'}
      bgColor={'#4D50F4'}
      className={'w-60'}
      completed={completed}
      borderRadius={'3px'}
      baseBgColor={'#CACBFC'}
      isLabelVisible={false}
    />
  );
};

export default ProgressBar;
