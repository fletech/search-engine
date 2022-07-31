export function DefaultProvider(children, context, states) {
  return <context.Provider value={states}>{children}</context.Provider>;
}
