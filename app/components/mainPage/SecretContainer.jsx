import React from "react";
import Input from "../ui/Input";
import Button from "../ui/Button";

export default function SecretContainer({ value, onChange, onClick }) {
  const width = "w-3/4 md:w-3/4 lg:w-3/4 xl:w-2/4 mt-5";
  return (
    <div className="flex flex-col items-center justify-center mx-auto mt-10 w-full md:basis-1/2">
      <Input
        value={value}
        onChange={onChange}
        width={width}
        label="Your Secret"
        placeholder="Enter your secret"
        isRequired
        name={"secret"}
      />
      <Input
        width={width}
        type="textarea"
        label="Description"
        placeholder="Description..."
        isRequired
        islarge
        name={"description"}
      />
      <Input
        width={width}
        label="Message"
        placeholder="Message..."
        isRequired
        name={"message"}
      />
      <Button isMain type="submit" onClick={onClick}>
        Get Link
      </Button>
    </div>
  );
}
