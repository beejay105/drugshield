export function useAppLoading(delayMs = 250) {
  return {
    isLoading: false,
    delayMs,
  };
}
