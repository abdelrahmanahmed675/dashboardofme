import React from 'react';
import { createRoot } from 'react-dom/client'; 
import App from './App';
import { ProSidebarProvider } from 'react-pro-sidebar';




const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <ProSidebarProvider>
  <App />
</ProSidebarProvider>;
  </React.StrictMode>
);


