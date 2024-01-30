import { ComponentProps, FC } from 'react';
import classNames from 'classnames';

import defaultThele from '../theme/default';

type TButtonProps = ComponentProps<'button'>;

const Button: FC<TButtonProps> = ({ className, ...props }) => {
  const theme = defaultThele.configs.button;

  return <button className={classNames(theme.base, className)} {...props} />;
};

export default Button;
