import React from 'react'
import ReactDOM from 'react-dom/client'
import ViperGlide from './ViperGlide'

// Stub window.storage for local dev (Vercel uses real persistent storage via Claude artifact API)
if (!window.storage) {
  const _store = {};
  window.storage = {
    get: async (key) => _store[key] ? { key, value: _store[key] } : null,
    set: async (key, value) => { _store[key] = value; return { key, value }; },
    delete: async (key) => { delete _store[key]; return { key, deleted: true }; },
    list: async (prefix) => ({ keys: Object.keys(_store).filter(k => !prefix || k.startsWith(prefix)) }),
  };
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ViperGlide />
  </React.StrictMode>
)
