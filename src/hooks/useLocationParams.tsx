type LocationParams = {
  [key: string]: string;
};

export const useLocationParams = (): LocationParams => {
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const locationParams = Object.fromEntries(params.entries());

  return locationParams;
};
