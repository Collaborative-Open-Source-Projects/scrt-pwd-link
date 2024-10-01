export default function Input({ width = "w-3/4", islarge = false }) {
  return (
    <div className={`${width}`}>
      <label className="block text-gray-700 text-sm font-bold mb-1 text-start ps-1 ">
        Secret
      </label>
      <input
        className={`${
          islarge ? "h-28" : "w-3/4"
        } w-full shadow-xl appearance-none border rounded-lg  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
      />
    </div>
  );
}
