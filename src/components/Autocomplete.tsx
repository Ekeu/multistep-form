import { Combobox, Transition } from '@headlessui/react';
import { ChangeEvent, FC, Fragment, useEffect, useState } from 'react';

import defaultTheme from '../theme/default';
import { useFormContext } from 'react-hook-form';
import classNames from 'classnames';
import { usePopper } from 'react-popper';

export interface IOption {
  id: string;
  label: string;
}

export interface IAutocompleteProps {
  name: string;
  required?: boolean;
  placeholder: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  options: Array<IOption>;
  color?: 'grey' | 'failure';
}

const Autocomplete: FC<IAutocompleteProps> = ({
  name,
  color = 'grey',
  required = false,
  placeholder,
  onChange,
  options = [],
}) => {
  const [selected, setSelected] = useState<IOption | null>(null);

  const [referenceElement, setReferenceElement] =
    useState<HTMLDivElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLUListElement | null>(
    null
  );

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [
      {
        name: 'flip',
        options: {
          fallbackPlacements: ['top'],
        },
      },
      {
        name: 'preventOverflow',
        options: {
          boundary: 'clippingParents',
        },
      },
      {
        name: 'offset',
        options: {
          offset: [0, 8],
        },
      },
    ],
  });

  const theme = defaultTheme.configs.autocomplete;

  const { register, setValue } = useFormContext();

  const { ref, ...rest } = register(name, {
    required,
    onChange,
  });

  useEffect(() => {
    const selected = localStorage.getItem('selected');
    if (selected) {
      const option = JSON.parse(selected);
      setSelected(option);
      setValue(name, option.label);
    }
  }, [name, setValue]);

  const handleSelect = (option: IOption) => {
    localStorage.setItem('selected', JSON.stringify(option));
    setSelected(option);
  };

  return (
    <div className='w-full'>
      <Combobox value={selected} onChange={handleSelect} nullable>
        <div className='relative'>
          <div
            className={classNames(theme.base, theme.colors[color])}
            ref={setReferenceElement}
          >
            <Combobox.Input
              className={classNames(
                theme.input.base,
                theme.input.colors[color]
              )}
              placeholder={placeholder}
              displayValue={(option: IOption) => option?.label}
              ref={ref}
              {...rest}
            />
          </div>
          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Combobox.Options
              style={styles.popper}
              {...attributes.popper}
              ref={setPopperElement}
              className={classNames(theme.options, 'scrollbar-hide')}
            >
              {options.length === 0 ? (
                <div className='relative cursor-default select-none py-2 px-2 text-neutral-700'>
                  Nothing found.
                </div>
              ) : (
                options.map((option) => {
                  return (
                    <Combobox.Option
                      key={option.id}
                      className={({ active }) =>
                        classNames(
                          'relative rounded-10 cursor-default select-none p-2 mb-1',
                          active
                            ? 'bg-finfrog-blue-100 text-finfrog-grey-200'
                            : 'text-finfrog-grey-200'
                        )
                      }
                      value={option}
                    >
                      {({ selected }) => (
                        <>
                          <span
                            className={classNames(
                              'truncate flex items-center',
                              selected
                                ? 'bg-finfrog-blue-100 text-finfrog-blue-300'
                                : 'font-normal'
                            )}
                          >
                            {option.label}
                          </span>
                        </>
                      )}
                    </Combobox.Option>
                  );
                })
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default Autocomplete;
