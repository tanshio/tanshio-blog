export type Phantom<T, U extends string> = T & { [key in U]: never }

export type DateISO8601 = Phantom<string, 'ISO8601'>
export const strToISO8601 = (v: string) => v as DateISO8601
export const dateToISO8601 = (d: Date) => strToISO8601(d.toISOString())
