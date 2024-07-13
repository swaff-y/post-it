import { Eventing } from './Eventing';

export class Collection<T, K> {
  private models: T[] = [];
  events: Eventing = new Eventing();

  constructor(private data: any, public deserialize: (json: K) => T) {
    if (data === undefined) return;

    this.models = this.data.map((value: K) => this.deserialize(value));
  }

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  fetch(): void {
    this.models.push(this.deserialize(this.data));
    this.trigger('change');
  }

  getIndex(index: number) {
    return this.models?.[index];
  }

  getAll(): T[] {
    return this.models;
  }

  getByKey(key: string, value: string): T | undefined {
    return this.models.find((model: any) => model[key] === value);
  }
}
