export type Phantom<T, U extends string> = T & { [key in U]: never }

export type DateString = Phantom<string, "Date">
