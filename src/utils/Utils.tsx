export class Utils {
  static toTitleCase(str: string): string {
    return str
      .toLowerCase()
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  static toISODate(date: string): string {
    return new Date(date).toISOString().split('T')[0];
  }

  static createParamsFromString<T extends Record<string, any>>(
    queryString: string
  ): T {
    const pairs = queryString.substring(1).split('&');

    const queryObject = pairs.reduce((acc, pair) => {
      const [key, value] = pair.split('=');
      acc[key] = value;
      return acc;
    }, {} as Record<string, string>);

    return queryObject as T;
  }

  static getSelectionFromFilterOptions(
    filterKey: string,
    filterOptions: any[]
  ) {
    return (
      filterOptions.find((option) => option.id === filterKey) ||
      filterOptions[0]
    );
  }
}
