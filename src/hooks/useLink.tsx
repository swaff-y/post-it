import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useLexicon } from '../context/lexicon';
import { Link } from '../models/Link';
import { UseQueryResponse } from './types';

type UseLinkProps = {
  id: string;
};

export const useLink = ({
  id,
}: UseLinkProps): UseQueryResponse => {
  const { fetchLink, deleteLink } = useLexicon();
  const queryClient = useQueryClient();
  const result = useQuery({
    queryKey: ['link', id],
    queryFn: () => fetchLink(id),
  });
  const { data, isError, isLoading, isSuccess } = result;

  const deleteMutation = useMutation({
    mutationFn: deleteLink,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['links'] })
    },
  });

  return {
    data: Link.buildLink(data?.[0], deleteMutation),
    isError,
    isLoading,
    isSuccess,
  };
};
