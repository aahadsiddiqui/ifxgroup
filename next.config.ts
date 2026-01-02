import type { NextConfig } from "next";

// CRITICAL: Set up localStorage polyfill at the very start, before ANY imports
// This must run synchronously when this file is loaded
(function setupLocalStoragePolyfill() {
  if (typeof window === 'undefined' && typeof global !== 'undefined') {
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

    // Force set localStorage on global - overwrite if it exists
    try {
      Object.defineProperty(global, 'localStorage', {
        value: localStorageMock,
        writable: true,
        configurable: true,
        enumerable: false,
      });
    } catch {
      // If defineProperty fails, directly assign (less safe but works)
      (global as unknown as { localStorage: typeof localStorageMock }).localStorage = localStorageMock;
    }
  }
})();

const nextConfig: NextConfig = {
  experimental: {
  },
  // Suppress dev overlay errors related to localStorage
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
  // Disable some dev features that might use localStorage
  reactStrictMode: true,
};

export default nextConfig;
