let importAll = (requireContext) => requireContext.keys().forEach(requireContext)
try {
  // @ts-ignore
  importAll(require.context('../icons/', true, /\.svg$/))
} catch (error) {
}
