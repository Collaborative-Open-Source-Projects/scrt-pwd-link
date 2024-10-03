export default function Headtext({ h1, h2 }) {
  return (
    <div className="my-10 w-3/4 mx-auto">
      <h1 className="text-2xl sm:text-3xl  font-bold">{h1}</h1>
      <h2 className="text-xl sm:text-2xl mt-2 text-teal-700 font-bold">{h2}</h2>
    </div>
  );
}
