import { IThemeConfig } from './config';

const theme: IThemeConfig = {
  configs: {
    input: {
      base: 'block w-full border-0 ring-1 ring-inset rounded-10 shadow-sm p-4 font-inter font-medium text-base tracking-tight focus:ring-2 focus:ring-inset',
      colors: {
        grey: 'ring-finfrog-grey-100 text-finfrog-grey-200 placeholder:text-finfrog-grey-100 focus:ring-finfrog-blue-300',
        failure:
          'ring-red-100 text-red-500 placeholder:text-red-400 focus:ring-red-400',
      },
    },
    button: {
      base: 'flex justify-center rounded-10 py-4 px-8 font-inter font-bold text-base tracking-tight cursor-pointer focus:outline-none disabled:cursor-not-allowed bg-finfrog-blue-300 text-white disabled:bg-finfrog-blue-100 disabled:text-finfrog-blue-200',
    },
    autocomplete: {
      base: 'relative flex w-full cursor-default overflow-hidden rounded-10 shadow-sm ring-1 focus-within:ring-2 focus-within:ring-inset bg-white text-left focus-within:outline-none p-2',
      colors: {
        grey: 'ring-finfrog-grey-100 focus-within:ring-finfrog-blue-300',
        failure: 'ring-red-100 focus-within:ring-red-400',
      },
      options:
        'max-h-60 w-full overflow-auto rounded-10 bg-white p-1 text-sm shadow-lg focus:outline-none z-20',
      input: {
        base: 'w-full border-none p-2 font-inter font-medium text-base focus:ring-0',
        colors: {
          grey: 'text-finfrog-grey-200 placeholder:text-finfrog-grey-100',
          failure: 'text-red-500 placeholder:text-red-400',
        },
      },
    },
  },
};

export default theme;
