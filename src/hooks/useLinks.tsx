import { useMutation, useQuery } from '@tanstack/react-query';
import { useLexicon } from '../context/lexicon';
import { Link } from '../models/Link';
import { UseQueryResponse } from './types';
import { useQueryClient } from '@tanstack/react-query';

export const useLinks = (): UseQueryResponse => {
  const { fetchLinks, deleteLink, createLink } = useLexicon();
  const queryClient = useQueryClient();
  const result = useQuery({
    queryKey: ['links'],
    queryFn: () => fetchLinks(),
  });

  const deleteMutation = useMutation({
    mutationFn: deleteLink,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['links'] })
    },
  });

  const saveMutation = useMutation({
    mutationFn: createLink,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['links'] })
    },
  });

  const { data, isError, isLoading, isSuccess } = result;
  const linksArr = data?.links;
  const links = Link.buildLinkCollection({ 
    data: linksArr,
    deleteMutation,
    saveMutation
  });

  return {
    data: links,
    isError,
    isLoading,
    isSuccess,
  };
};
