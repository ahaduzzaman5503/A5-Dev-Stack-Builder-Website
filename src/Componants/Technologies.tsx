import { use, useState } from "react";
import { Itecnology } from "./Types/TecnologyTypes";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface tecnologyProps {
  tecnologyPromise: Promise<Itecnology[]>;
}

export default function Technologies({ tecnologyPromise }: tecnologyProps) {
  const tecnologys = use(tecnologyPromise);

  const [yourStack, setYourStack] = useState<Itecnology[]>([]);

  const badgeStyles: Record<string, string> = {
    Popular: "bg-blue-50 text-blue-500 border border-blue-100",
    Versatile: "bg-green-50 text-green-500 border border-green-100",
    Fast: "bg-orange-50 text-orange-500 border border-orange-100",
    "Full Stack": "bg-purple-50 text-purple-500 border border-purple-100",
    Standard: "bg-green-50 text-green-500 border border-green-100",
    "Top SQL": "bg-blue-50 text-blue-500 border border-blue-100",
    Cache: "bg-red-50 text-red-500 border border-red-100",
    Ubiquitous: "bg-yellow-50 text-yellow-600 border border-yellow-100",
    Essential: "bg-blue-50 text-blue-500 border border-blue-100",
  };

  return (
    <>
      <div className="container mx-auto">
        <div>
          <h1 className="text-4xl font-bold text-black">
            Explore The <span>Technologies</span>
          </h1>

          <p className="py-6 text-black">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 my-5 gap-2">
          <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {tecnologys.map((technology) => {
              const isAdded = yourStack.some(
                (item) => item.name === technology.name,
              );

              return (
                <div
                  key={technology.name}
                  className="block rounded-md border border-gray-300 p-2 shadow-sm sm:p-6"
                >
                  <div className="text-black">
                    <div className="flex items-center justify-between">
                      <img
                        className="w-12"
                        src={technology.icon}
                        alt={technology.name}
                      />

                      <button
                        className={`rounded-2xl px-3 py-1 text-xs ${
                          badgeStyles[technology.badge] ||
                          "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {technology.badge}
                      </button>
                    </div>

                    <div>
                      <h1 className="text-xl font-bold mb-2">
                        {technology.name}
                      </h1>

                      <p>{technology.description}</p>
                    </div>
                    <div className="mt-3 flex justify-around items-center gap-8">
                      <div className="bg-gray-200 p-1 rounded-md text-xs">
                        {technology.category}
                      </div>

                      <div className="text-xs">{technology.difficulty}</div>

                      <div className="text-xs">⭐ {technology.rating}</div>
                    </div>

                    <div className="mt-4">
                      <button
                        disabled={isAdded}
                        onClick={() => {
                          if (isAdded) {
                            toast.warning(
                              `${technology.name} is already in your stack!`,
                            );
                            return;
                          }

                          setYourStack([...yourStack, technology]);

                          toast.success("Card added successfully!");
                        }}
                        className={`w-full rounded-md py-2 font-semibold ${
                          isAdded
                            ? "bg-red-500 text-white disabled:bg-red-500 disabled:text-white disabled:opacity-100 cursor-not-allowed"
                            : "bg-gray-800 text-white hover:bg-gray-700"
                        }`}
                      >
                        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="lg:col-span-3">
            <div className="rounded-md border border-gray-200 p-5 shadow-sm text-black">
              <h1 className="text-lg font-semibold">Your Stack</h1>
              <p className="text-sm text-gray-400">
                {yourStack.length}{" "}
                {yourStack.length === 1 ? "Technology" : "Technologies"}{" "}
                Selected
              </p>
              <div className="mt-4 space-y-2">
                {yourStack.length === 0 ? (
                  <p className="text-sm text-gray-400">Your Stack is Empty</p>
                ) : (
                  yourStack.map((technology) => (
                    <div
                      key={technology.name}
                      className="flex items-center justify-between rounded-lg border border-gray-200 p-3"
                    >
                      <div className="flex items-center gap-3">
                        <img
                          className="w-10 h-10 object-contain"
                          src={technology.icon}
                          alt={technology.name}
                        />
                        <div>
                          <h2 className="text-sm font-semibold">
                            {technology.name}
                          </h2>
                          <p className="text-[10px] text-gray-400">
                            {technology.category}
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() =>
                          setYourStack((currentStack) =>
                            currentStack.filter(
                              (item) => item.name !== technology.name,
                            ),
                          )
                        }
                        className="text-xl text-gray-400 hover:text-red-500"
                      >
                        <button className="btn btn-active btn-error">X</button>
                      </button>
                    </div>
                  ))
                )}
              </div>

              {yourStack.length > 0 && (
                <button
                  onClick={() => setYourStack([])}
                  className="mt-12 w-full rounded-md border border-red-300 py-2 text-sm font-semibold text-red-500 hover:bg-red-50"
                >
                  Remove All
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <ToastContainer />
    </>
  );
}
