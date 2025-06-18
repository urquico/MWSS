import { router } from '@/lib/routes';
import { MantineProvider } from '@mantine/core';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';
import { Suspense } from 'react';
import LoaderPage from './components/ui/Loader';
// Create the client once outside the component
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider>
        <Suspense fallback={<LoaderPage />}>
          <RouterProvider router={router} future={{ v7_startTransition: true }} />
        </Suspense>
      </MantineProvider>
    </QueryClientProvider>
  );
}

export default App;
