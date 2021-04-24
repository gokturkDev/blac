import BlocBase from "./blocBase";

export type ValueType<T extends BlocBase<any>> = T extends BlocBase<infer U>
  ? U
  : never;

export type BlocClass<T> = new (...args: never[]) => T;

export type BlocHookData<T extends BlocBase<any>> = [
  value: ValueType<T>,
  instance: T,
  stream: {
    // stream: BehaviorSubject<T>;
    error: any;
    complete: boolean;
  }
];
