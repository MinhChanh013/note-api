import { ClassConstructor } from 'class-transformer';
export declare function snakeCaseKeys<T>(type: ClassConstructor<T>, data: T | T[], excludeExtraneous?: boolean): Record<string, any>;
export declare function camelCaseKeys<T>(type: ClassConstructor<T>, data: T | T[]): T;
