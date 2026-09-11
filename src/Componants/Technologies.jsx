import { useEffect, useState } from "react";

export default function Technologies() {
  const [technologies, setTechnologies] = useState([]);

  useEffect(() => {
    fetch("/tech_stack_data.json")
      .then((response) => response.json())
      .then((data) => {
        setTechnologies(data);
      });
  }, []);

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
            {technologies.map((technology) => (
              <div
                key={technology.name}
                className="block rounded-md border border-gray-300 p-2 shadow-sm sm:p-6"
              >
                <div className="text-black">
                  <div className="flex items-center justify-between ">
                    <img
                      className="w-12"
                      src={technology.icon}
                      alt={technology.name}
                    />

                    <button className="btn bg-gray-200 border-none text-black rounded-2xl btn-primary">
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

                  <div>
                    <button
                      className="btn w-full my-4 bg-black text-white rounded-2xl btn-primary"
                      type="button"
                    >
                      Add to Stack
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-3">
            <div className="block rounded-md border border-gray-300 p-4 shadow-sm sm:p-6 text-black">
              <h1>Your Stack</h1>
              <p>no technologies selected yet</p>
              <div className=" rounded-md border border-gray-300 p-4 shadow-sm sm:p-6 text-black">
                <p>Your Stack is empty</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
