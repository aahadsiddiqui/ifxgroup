export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    // Set up localStorage polyfill at the very start
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

    if (typeof (global as unknown as { localStorage: unknown }).localStorage === 'undefined') {
      try {
        Object.defineProperty(global, 'localStorage', {
          value: localStorageMock,
          writable: true,
          configurable: true,
          enumerable: false,
        });
      } catch {
        (global as unknown as { localStorage: typeof localStorageMock }).localStorage = localStorageMock;
      }
    }
  }
}

