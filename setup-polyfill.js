// This file sets up localStorage polyfill before Next.js starts
// Run this before starting Next.js: node setup-polyfill.js && next dev

if (typeof window === 'undefined' && typeof global !== 'undefined') {
  const localStorageMock = {
    getItem: function(key) {
      return null;
    },
    setItem: function(key, value) {
      // No-op on server
    },
    removeItem: function(key) {
      // No-op on server
    },
    clear: function() {
      // No-op on server
    },
    length: 0,
    key: function(index) {
      return null;
    },
  };

  // Force set localStorage on global
  try {
    Object.defineProperty(global, 'localStorage', {
      value: localStorageMock,
      writable: true,
      configurable: true,
      enumerable: false,
    });
  } catch (e) {
    global.localStorage = localStorageMock;
  }
  
  console.log('localStorage polyfill set up successfully');
}

