import Square from "./components/square";

function App() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="grid grid-cols-3 gap-3">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => {
          return <Square key={item} />;
        })}
      </div>
    </div>
  );
}

export default App;
