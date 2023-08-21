import { writable } from 'svelte/store';
import { browser } from '$app/environment';

const RECENT_SEARCHES_KEY = 'RECENT_SEARCHES';
const RECENT_SEARCHES_LIMIT = 7;

/** @type {{items: Array<{ id: string; title: string; icon?: string | undefined; url: string; }>, total: number}} */
const initialState = browser && localStorage.getItem(RECENT_SEARCHES_KEY)
  ? JSON.parse(localStorage.getItem(RECENT_SEARCHES_KEY) ?? 'null')
  : { items: [], total: 0 };

function createRecentSearches() {
  const { subscribe, set, update } = writable(initialState);

  /** @param {{ items: { id: string; title: string; icon?: string | undefined; url: string; }[]; total: number; }} state */
  function updateLocalStorage(state) {
    if (browser) {
        localStorage.setItem(RECENT_SEARCHES_KEY, JSON.stringify(state));
    }
  }

  return {
    subscribe,
    addItem: (/** @type {{ id: string; title: string; icon?: string | undefined; url: string; }} */ newItem)  =>
      update((state) => {
        const index = state.items.findIndex((item) => item.id === newItem.id);

        if (index === -1) {
          if (state.items.length >= RECENT_SEARCHES_LIMIT) {
            state.items.pop();
            state.total -= 1;
          }

          state.items.unshift(newItem);
          state.total += 1;
          updateLocalStorage(state);
        }

        return state;
    }),
    removeItem: (/** @type {string} */ itemId) =>
      update((state) => {
        const index = state.items.findIndex((item) => item.id === itemId);

        if (index !== -1) {
          state.total -= 1;
          state.items.splice(index, 1);
          updateLocalStorage(state);
        }

        return state;
      }),
    clear: () => {
      const emptyState = { items: [], total: 0 };
      set(emptyState);
      updateLocalStorage(emptyState);
    }
  };
}

export const recentSearches = createRecentSearches();