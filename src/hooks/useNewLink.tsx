import { useLexicon } from "@/context/lexicon";
import { Link, LinkProps } from "@/models/Link";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useNewLink = (): (params: any) => Link => {
  const { createLink, deleteLink } = useLexicon();
  const queryClient = useQueryClient();
  
  const saveMutation = useMutation({
    mutationFn: createLink,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['links'] })
    },
  });

  const deleteMutation = useMutation({
    mutationFn: deleteLink,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['links'] })
    },
  });

  const buildLink = (params: LinkProps): Link => {
    return Link.buildLink(params, deleteMutation, saveMutation);  
  }

  return buildLink
};