import Main from "./components/Main";

function App() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-gray-900 to gray-600 py-10">
      <h1 className="text-center text-3xl sm:text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100">
        Game of thrones
      </h1>

      <Main />
    </div>
  );
}

export default App;
