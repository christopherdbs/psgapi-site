import { React } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Pages } from "./pages";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { AuthProvider } from "./hooks/useAuth";
import { ProtectedRoute } from "./components/ProtectedRoute";

const PagesRoutes = [
  { path: "/", page: Pages.Home },
  { path: "/documentation", page: Pages.Documentation },
  { path: "/about", page: Pages.About },
  { path: "/account", page: Pages.Account },
  { path: "/register", page: Pages.Register },
  { path: "/login", page: Pages.Login },
  { path: "*", page: Pages.NotFoundPage },
];

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="h-screen">
          <Header />
          <main className="pt-16">
            <Routes>
              {PagesRoutes.map((route, i) => {
                if (route.path === "/account") {
                  return (
                    <Route
                      path={route.path + "/*"}
                      key={i}
                      element={<ProtectedRoute page={route.page} />}
                    />
                  );
                }
                return (
                  <Route
                    path={route.path}
                    key={i}
                    element={<route.page />}
                  ></Route>
                );
              })}
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}
