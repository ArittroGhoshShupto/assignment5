import { Suspense, useEffect, useState } from "react";
import Banner from "./Components/Banner";
import Nav from "./Components/Nav";
import Technologies from "./Components/tech/technologies";
import Footer from "./Components/footer";
import type { ITech } from "./types/tech";

function App() {

  const [techPromise, setTechPromise] =
    useState<Promise<ITech[]> | null>(null);

  useEffect(() => {

    const techFetch = async (): Promise<ITech[]> => {

      const res = await fetch("./data.json");

      if (!res.ok) {
        throw new Error("Failed to load technology data.");
      }

      const data = await res.json();

      return data;
    };

    setTechPromise(techFetch());

  }, []);

  return (
    <>
      <Nav />

      <Banner />

      {techPromise ? (
        <Suspense
          fallback={
            <h2 className="text-center font-bold text-2xl my-10">
              Loading Technologies...
            </h2>
          }
        >
          <Technologies techPromise={techPromise} />
        </Suspense>
      ) : (
        <h2 className="text-center font-bold text-2xl my-10">
          Loading Technologies...
        </h2>
      )}

      <Footer />
    </>
  );
}

export default App;