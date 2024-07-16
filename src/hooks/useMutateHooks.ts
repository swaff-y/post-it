import { Params } from '@/api/LexiconAPI';
import { useLexicon } from '@/context/lexicon';
import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from '@tanstack/react-query';

export const useMutateHooks = (): [
  UseMutationResult<any, Error, string, unknown>,
  UseMutationResult<any, Error, Params, unknown>
] => {
  const { deleteLink, createLink } = useLexicon();
  const queryClient = useQueryClient();
  const queryKey = ['links'];

  const deleteMutation = useMutation({
    mutationFn: deleteLink,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKey });
    },
  });

  const createMutation = useMutation({
    mutationFn: createLink,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKey });
    },
  });

  return [deleteMutation, createMutation];
};
