export interface IThemeConfig extends Record<string, unknown> {
  configs: {
    input: {
      base: string;
      colors: {
        grey: string;
        failure: string;
      };
    };
    button: {
      base: string;
    };
    autocomplete: {
      base: string;
      options: string;
      colors: {
        grey: string;
        failure: string;
      };
      input: {
        base: string;
        colors: {
          grey: string;
          failure: string;
        };
      };
    };
  };
}
