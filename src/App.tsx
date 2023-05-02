import React from "react"
import Navbar from "./components/layout/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from "./components/layout/Footer"
import Alert from "./components/layout/Alert"
import Home from "./pages/Home"
import About from "./pages/About"
import User from "./pages/User"
import NotFound from "./pages/NotFound"
import { UserContextProvider } from "./context/UserContext"
import { AlertContextProvider } from "./context/AlertContext"

function App() {
  return (
    <div className="flex flex-col justify-between h-screen">
      <UserContextProvider>
        <AlertContextProvider>
          <BrowserRouter>
            <Navbar />
            <main className="container mx-auto px-3 pb-12 flex-grow">
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <Alert />
                      <Home />
                    </>
                  }
                />
                <Route path="/about" element={<About />} />
                <Route path="/user/:id" element={<User />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </BrowserRouter>
        </AlertContextProvider>
      </UserContextProvider>
    </div>
  )
}

export default App
