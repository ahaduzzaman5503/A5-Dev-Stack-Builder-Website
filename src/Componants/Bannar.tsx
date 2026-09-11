import bannarImage from "../assets/banner-stack.png";
export default function Bannar() {
  return (
    <>
      <div className="hero bg-white my-20 container mx-auto">
        <div className="hero-content flex-col lg:flex-row-reverse lg:gap-80">
          <div>
            <img
              alt="Tailwind CSS hero component"
              src={bannarImage}
              className="max-w-sm"
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-black">Build Your Ideal</h1>
            <h1 className="text-4xl font-bold bg-linear-to-r from-red-500 to-green-700 bg-clip-text text-transparent">
              Development Stack
            </h1>
            <p className="py-6 text-black">
              Explore frontend, backend, database, and tooling options,{" "}
              <br></br>
              compare them side by side, and put together <br></br> the stack
              that fits your next project.
            </p>
            <div className="flex gap-5">
              <button className="btn btn-primary bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl">
                Explore Technologies
              </button>
              <button className="btn btn-active bg-white text-black rounded-2xl">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
