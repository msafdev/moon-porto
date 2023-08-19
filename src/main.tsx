import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// Libraries
import { Provider } from "jotai";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AnimatedRoutes from "./AnimatedRoutes.tsx";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route path="/*" element={<AnimatedRoutes />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
