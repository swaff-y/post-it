import { UseMutationResult } from '@tanstack/react-query';
import { Attributes } from './baseModels/Attributes';
import { Collection } from './baseModels/Collection';
import { Eventing } from './baseModels/Eventing';
import { Model } from './baseModels/Model';

export interface LinkProps {
  id?: string;
  url: string;
  description: string;
  keywords: string[];
}

type LinkBuildProps = {
  data: any;
  deleteMutation: UseMutationResult<any, Error, string, unknown>;
};

export class Link extends Model<LinkProps> {
  /** A link consists of:
   * - id: string - the unique identifier for the link
   * - url: string - the url for the link
   * - description: string - a description of the link
   * - keywords: string[] - an array of keywords for the link
   */
  static buildLink(attrs: LinkProps, deleteMutation: UseMutationResult<any, Error, string, unknown>): Link {
    return new Link(deleteMutation, new Attributes<LinkProps>(attrs), new Eventing());
  }

  static buildLinkCollection({
    data,
    deleteMutation,
  }: LinkBuildProps): Collection<Link, LinkProps> {
    return new Collection<Link, LinkProps>(data, (json: LinkProps) =>
      Link.buildLink(json, deleteMutation)
    );
  }

  get id(): string {
    return this.get('id')!;
  }

  get url(): string {
    return this.get('url')!;
  }

  get description(): string {
    return this.get('description')!;
  }

  get keywords(): string[] {
    return this.get('keywords')!;
  }
}
