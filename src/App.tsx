import { Suspense } from "react";
import Bannar from "./Componants/Bannar";
import Nevber from "./Componants/Nevber";
import { Itecnology } from "./Componants/Types/TecnologyTypes";
import Technologies from "./Componants/Technologies";

const tecnologyFetch = async (): Promise<Itecnology[]> => {
  const res = await fetch("/public/tech_stack_data.json");
  const data = await res.json();
  return data;
};

function App() {
  const tecnologyPromise = tecnologyFetch();
  return (
    <>
      <Nevber></Nevber>
      <Bannar></Bannar>
      <Suspense
        fallback={
          <span className="loading loading-spinner text-secondary"></span>
        }
      >
        <Technologies tecnologyPromise={tecnologyPromise}></Technologies>
      </Suspense>
    </>
  );
}

export default App;
