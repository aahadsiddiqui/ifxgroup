// Minimal localStorage polyfill for SSR
// This must run before any other code that might access localStorage

// Create the mock object
const localStorageMock = {
  getItem: function () {
    return null;
  },
  setItem: function () {
    // No-op on server
  },
  removeItem: function () {
    // No-op on server
  },
  clear: function () {
    // No-op on server
  },
  length: 0,
  key: function () {
    return null;
  },
};

// Set up localStorage on global object for server-side
if (typeof window === 'undefined' && typeof global !== 'undefined') {
  try {
    if (typeof (global as unknown as { localStorage: unknown }).localStorage === 'undefined') {
      Object.defineProperty(global, 'localStorage', {
        value: localStorageMock,
        writable: true,
        configurable: true,
        enumerable: false,
      });
    }
  } catch {
    // Fallback if defineProperty fails
    (global as unknown as { localStorage: typeof localStorageMock }).localStorage = localStorageMock;
  }
}

// Export for webpack replacement
export default localStorageMock;

