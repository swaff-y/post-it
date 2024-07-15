import { UseMutationResult } from '@tanstack/react-query';
import { Callback } from './Eventing';

export interface ModelAttributes<T> {
  get<K extends keyof T>(key: K): T[K];
  set(value: T): void;
  getAll(): T;
}

interface Sync<T> {
  fetch(id: string): void;
}

interface Events {
  on(eventName: string, callback: Callback): void;
  trigger(eventName: string): void;
}

export interface HasLinkKey {
  id?: string;
}

export class Model<T extends HasLinkKey> {
  constructor(
    private deleteMutation: UseMutationResult<any, Error, string, unknown>,
    private attributes: ModelAttributes<T>,
    private events: Events
  ) {}

  on = this.events.on;
  trigger = this.events.trigger;
  get = this.attributes.get;

  set(update: T): void {
    this.attributes.set(update);
    this.events.trigger('change');
  }

  delete({
    onSuccess,
    onSettled,
    onError,
  }: {
    onSuccess?: () => void;
    onSettled?: () => void;
    onError?: (error: Error) => void;
  }): void {
    const id = this.get('id');

    if (typeof id !== 'string' || !id) {
      throw new Error('Cannot delete without an id');
    }

    this.trigger('delete');
    return this.deleteMutation.mutate(id, { onSuccess, onSettled, onError });
  }

  // fetch(): void {
  //   const id = this.get('id');

  //   if (typeof id !== 'string') {
  //     throw new Error('Cannot fetch without an id');
  //   }
  // }
}
