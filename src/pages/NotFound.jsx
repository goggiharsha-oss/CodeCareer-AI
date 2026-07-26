function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-950 text-white">

      <h1 className="text-8xl font-bold">
        404
      </h1>

      <h2 className="text-3xl mt-4">
        Page Not Found
      </h2>

      <p className="mt-3 text-gray-400">
        Sorry, this career path does not exist.
      </p>

      <a
        href="/"
        className="mt-6 px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700"
      >
        Go Back Home
      </a>

    </div>
  );
}

export default NotFound;