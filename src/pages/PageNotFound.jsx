import React from "react"
import { useNavigate } from "react-router-dom"

const PageNotFound = () => {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center px-4">
      <h1 className="text-9xl font-extrabold text-red-500 animate-bounce">404</h1>
      <h2 className="mt-4 text-3xl font-semibold text-gray-700">Page Not Found</h2>
      <p className="mt-2 text-gray-500 max-w-md">
        Oops! The page you’re looking for doesn’t exist or has been moved.
      </p>
      <button
        onClick={() => navigate("/")}
        className="mt-6 px-6 py-3 text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-all duration-200 shadow-md"
      >
        Go Home
      </button>
    </div>
  )
}

export default PageNotFound
