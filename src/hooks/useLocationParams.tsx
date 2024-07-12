import { useLocation } from 'react-router-dom';

type LocationParams = {
  [key: string]: string;
};

export const useLocationParams = (): LocationParams => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const locationParams = Object.fromEntries(params.entries());

  return locationParams;
};
