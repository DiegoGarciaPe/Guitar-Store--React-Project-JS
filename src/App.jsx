import Header from "./components/Header";
import Guitar from "./components/Guitar";
import Footer from "./components/Footer";
import { useState } from "react";
import { db } from "./data/db";

function App() {
  const [data, setData] = useState(db);

  return (
    <>
      <Header />
      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>
        <div className="row mt-5">
          {data.map((guitar) => (
            <Guitar guitar={guitar} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
