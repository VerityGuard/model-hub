import { writable } from 'svelte/store';
import { browser } from '$app/environment';

const FAVORITE_SEARCHES_KEY = 'FAVORITE_SEARCHES';

/** @type {{items: Array<{ id: string; title: string; icon?: string | undefined; url: string; }>, total: number}} */
const initialState = browser && localStorage.getItem(FAVORITE_SEARCHES_KEY)
  ? JSON.parse(localStorage.getItem(FAVORITE_SEARCHES_KEY) ?? 'null')
  : { items: [], total: 0 };

function createFavoriteSearches() {
  const { subscribe, set, update } = writable(initialState);

  /** @param {{ items: { id: string; title: string; icon?: string | undefined; url: string; }[]; total: number; }} state */
  function updateLocalStorage(state) {
    if (browser) {
        localStorage.setItem(FAVORITE_SEARCHES_KEY, JSON.stringify(state));
    }
  }

  return {
    subscribe,
    addItem: (/** @type {{ id: string; title: string; icon?: string | undefined; url: string; }} */ newItem)  =>
      update((state) => {
        const index = state.items.findIndex((item) => item.id === newItem.id);

        if (index === -1) {
          state.items.push(newItem);
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
    },
  };
}

export const favoriteSearches = createFavoriteSearches();