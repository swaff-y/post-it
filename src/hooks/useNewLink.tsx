import { Link, LinkProps } from "@/models/Link";
import { useMutateHooks } from "./useMutateHooks";

export const useNewLink = (): (params: any) => Link => {
  const [deleteMutation, createMutation, updateMutation] = useMutateHooks();
  

  const buildLink = (params: LinkProps): Link => {
    return Link.buildLink(params, deleteMutation, createMutation, updateMutation);  
  }

  return buildLink
};