import { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import './App.css';
import { routes } from './routes';
import { NigeriaProvider } from './context/context';

function App() {
  return (
    <BrowserRouter>
        <NigeriaProvider>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {routes.map((route, idx) => (
              <Route path={route.path} element={route.element} key={idx} />
            ))}
          </Routes>
        </Suspense>
        </NigeriaProvider>
    </BrowserRouter>
  );
}

export default App;
