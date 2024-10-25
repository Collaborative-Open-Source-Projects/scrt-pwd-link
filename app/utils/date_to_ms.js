export function date_to_ms(expiry, expiryType) {
  
  const conversionFactors = {
    Hours: 60 * 60 * 1000,  
    Days: 24 * 60 * 60 * 1000, 
    Weeks: 7 * 24 * 60 * 60 * 1000,
    Months: 30 * 24 * 60 * 60 * 1000, 
    Years: 365 * 24 * 60 * 60 * 1000 
  };

  const factor = conversionFactors[expiryType];

  if (factor) {
    return expiry * factor;
  } else {
    throw new Error("Invalid expiry type");
  }
}
