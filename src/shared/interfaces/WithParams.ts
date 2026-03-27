export interface WithParams<T extends object> {
  params: Promise<T>
}
