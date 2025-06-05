import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { api } from '@/api/axios-instance';
import { SuccessResponse } from '@/types/response-instance';

/**
 * Zustand store for managing authentication state.
 *
 * This store includes:
 * - `isLoggedIn`: A boolean indicating if the user is logged in
 * - `lastPath`: A string storing the last visited route (for redirection)
 * - `setLoggedIn`: Function to manually set login status
 * - `setLastPath`: Function to update the last visited path
 * - `logout`: Async function to call API and clear stored state
 *
 * Data is persisted using `localStorage` via Zustand's `persist` middleware.
 *
 * @example
 * const { isLoggedIn, setLoggedIn, logout } = useAuthStore();
 */
interface AuthState {
  /** Tracks if the user is authenticated */
  isLoggedIn: boolean;

  /** Last visited route path (used for redirects after login) */
  lastPath: string;

  /**
   * Sets the authentication state.
   * @param status - `true` if the user is logged in, otherwise `false`.
   */
  setLoggedIn: (status: boolean) => void;

  /**
   * Sets the last visited route.
   * @param path - The pathname string (e.g., "/dashboard").
   */
  setLastPath: (path: string) => void;

  /**
   * Performs logout by calling the API, clearing state, and clearing storage.
   * @throws Will throw an error if the API logout fails.
   */
  logout: () => Promise<void>;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      isLoggedIn: false,
      lastPath: '/finance',

      setLoggedIn: (status) => {
        set({ isLoggedIn: status });
      },

      setLastPath: (path) => {
        set({ lastPath: path });
      },

      logout: async () => {
        try {
            console.log('Logout!')
        //   const response = await api.post('/auth/logout');
        //   const data = response.data as SuccessResponse;

        //   if (![200, 201].includes(data.statusCode)) {
        //     throw new Error(data.message);
        //   }

          // Reset store and clear storage
          set({ isLoggedIn: false, lastPath: '/finance' });
          sessionStorage.clear(); // Optional: clear session data
          localStorage.clear();  // Clears all local storage (can be scoped if needed)
        } catch (err) {
          throw err;
        }
      },
    }),
    {
      name: 'auth-storage', // localStorage key for persisted data
    }
  )
);
