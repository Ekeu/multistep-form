import { FC, useEffect } from 'react';

import { IFeature, SEARCH_API_ENDPOINT, ISearchResult } from '../../api';
import { useState } from 'react';
import Autocomplete, { IAutocompleteProps, IOption } from '../Autocomplete';
import { FieldError } from 'react-hook-form';

interface IAutoCompleteSectionProps
  extends Omit<IAutocompleteProps, 'options'> {
  error?: FieldError;
  children: React.ReactNode;
}

const Address: FC<IAutoCompleteSectionProps> = ({
  name,
  error,
  placeholder,
  children,
}) => {
  const [options, setOptions] = useState<IOption[]>([]);

  useEffect(() => {
    const options = localStorage.getItem('options');
    if (options) {
      setOptions(JSON.parse(options));
    }
  }, []);

  const fetchOptions = async (query: string) => {
    try {
      const response = await fetch(
        SEARCH_API_ENDPOINT.replace('{{query}}', query).concat('&limit=10')
      );
      const data: ISearchResult = await response.json();
      const res = data.features.map((feature: IFeature) => ({
        id: feature.properties.id,
        label: feature.properties.label,
      }));

      localStorage.setItem('options', JSON.stringify(res));
      setOptions([...res]);
    } catch (error) {
      setOptions([]);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    fetchOptions(e.target.value);
  };
  return (
    <div className='flex flex-col'>
      {children}
      <Autocomplete
        required
        name={name}
        options={options}
        color={error ? 'failure' : 'grey'}
        placeholder={error?.message || placeholder}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Address;
