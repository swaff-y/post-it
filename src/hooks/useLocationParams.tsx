import { usePathname, useSearchParams } from "next/navigation";


type LocationParams = {
  [key: string]: string;
};

export const useLocationParams = (): LocationParams => {
  // const location = usePathname();
  const searchParams = useSearchParams();
  // const search = location.match(/\?(.*)/)?.[1] || '';
  const params = {
    filter: searchParams.get('filter') || '',
    value: searchParams.get('value') || ''
  };
  // const locationParams = Object.fromEntries(params.entries());

  return params;
};
