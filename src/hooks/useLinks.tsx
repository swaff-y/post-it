import { useQuery } from '@tanstack/react-query';
import { useLexicon } from '../context/lexicon';
import { Link } from '../models/Link';
import { UseQueryResponse } from './types';

export const useLinks = (): UseQueryResponse => {
  const { fetchLinks } = useLexicon();
  const result = useQuery({
    queryKey: ['links'],
    queryFn: () => fetchLinks(),
  });
  const { data, isError, isLoading, isSuccess } = result;
  const linksArr = data?.links;
  const links = Link.buildLinkCollection({ data: linksArr });

  return {
    data: links,
    isError,
    isLoading,
    isSuccess,
  };
};
