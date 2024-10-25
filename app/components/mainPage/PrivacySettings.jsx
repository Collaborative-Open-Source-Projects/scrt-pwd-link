"use client";
import { useState } from "react";
import CheckBox from "../ui/CheckBox";
import Dropmenu from "../ui/Dropmenu";
import Input from "../ui/Input";
import Button from "../ui/Button";

export default function PrivacySettings({ onExpireChange }) {
  const [isUnlimited, setIsUnlimited] = useState(false);
  const [expiry, setExpiry] = useState("");
  const [expiryType, setExpiryType] = useState("Days"); 

  const handleExpireChange = (e) => {
    const newExpiry = e.target.value;
    setExpiry(newExpiry);
    onExpireChange({expiry: newExpiry, expiryType});
  }

  const handleChanges = (newExpiryType) => {
    setExpiryType(newExpiryType);
    onExpireChange({expiry, expiryType: newExpiryType});
  }

  return (
    <div className="flex flex-col items-center md:items-start gap-3 w-full md:basis-1/2">
      <h2 className="text-3xl font-bold">Privacy Settings</h2>
      <div className="flex items-center gap-1  sm:gap-2 lg:w-3/5 md:w-4/5 w-11/12 min-[450px]:w-8/12">
        <p className="font-bold">Passphrasse:</p>
        <Input
          width="flex-1 max-w-3/4"
          placeholder="Enter Passphrase"
          name={"passphrase"}
        />
      </div>
      <p className="font-bold text-gray-500 text-start ps-4">
        *It will encrypt the password using this as a key*
      </p>
      <div className="flex items-center gap-2 justify-between sm:justify-start md:w-full lg:w-3/5  sm:w-4/6 w-11/12  min-[450px]:w-9/12   ">
        <p className="font-bold">Expire After:</p>
        <Input
          type="number"
          width="w-[50px]"
          placeholder="7"
          min={"1"}
          max={"30"}
          name={"expiry"}
          value={expiry}
          onChange={handleExpireChange}
        />
        <p>:</p>
        <Dropmenu
          options={["Hours", "Days", "Weeks", "Months", "Years"]}
          selectedVaue={expiryType}
          value={expiryType}
          onSelect={(e) => handleChanges(e)}
          name={"expiryType"}
          width="w-2/4"
        />
      </div>
      <div className="flex items-center gap-2 pe-2 ">
        <p className="font-bold">Delete After:</p>
        <Input
          isDisabled={isUnlimited}
          type="number"
          name={"viewsInput"}
          width="w-[50px]"
          placeholder="7"
          min={"1"}
          max={"100"}
        />
        <p className="font-bold me-5">Views</p>
        <CheckBox
          name="views"
          label="Unlimited"
          onSelect={(option) => setIsUnlimited(option)}
          isChecked={isUnlimited}
        />
      </div>
      <p className="font-bold text-gray-500 text-start ps-4">
        *Please enter value between 1 - 100 view*
      </p>
      <CheckBox name="decryption" label="Decryption Key" />
      <Button type="submit">Save Settings AS Default</Button>
    </div>
  );
}
