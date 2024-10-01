/* this reusable component for input , it takes 5 props
 1- width className defined by tailwind , you can use it to set width , width for different screen sizes
 2- islarge if you want to set height to 28 for large input
 3- label for input
 4- placeholder
 5- onChange method that takes event as parameter
 6- is Required
 7- type of input
 8- isDisabled to disable input
*/
export default function Input({
  width = "w-3/4",
  islarge = false,
  label,
  placeholder,
  onChange,
  isRequired = false,
  type = "text",
  isDisabled = false,
}) {
  return (
    <div className={`${width}`}>
      <label className="block text-gray-700 text-sm font-bold mb-1 text-start ps-1 ">
        {label}
      </label>
      <input
        type={type}
        disabled={isDisabled}
        required={isRequired}
        onChange={(e) => onChange(e)}
        placeholder={placeholder}
        className={`${
          islarge ? "h-28" : "w-3/4"
        } w-full shadow-xl appearance-none border rounded-lg  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
      />
    </div>
  );
}
