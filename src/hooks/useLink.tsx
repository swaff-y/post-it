import { useQuery} from '@tanstack/react-query';
import { useLexicon } from '../context/lexicon';
import { Link } from '../models/Link';
import { UseQueryResponse } from './types';
import { useMutateHooks } from './useMutateHooks';

type UseLinkProps = {
  id: string;
};

export const useLink = ({
  id,
}: UseLinkProps): UseQueryResponse => {
  const { fetchLink } = useLexicon();
  const [deleteMutation, createMutation] = useMutateHooks();

  const result = useQuery({
    queryKey: ['link', id],
    queryFn: () => fetchLink(id),
  });
  const { data, isError, isLoading, isSuccess } = result;

  return {
    data: Link.buildLink(data?.[0], deleteMutation, createMutation),
    isError,
    isLoading,
    isSuccess,
  };
};
