import React, { useState } from 'react';

const PhoneNumberInput = () => {
    const [value, setValue] = useState("")
    // Function to format the phone number
    const formatPhoneNumberNew = (value) => {
        // Remove all non-digit characters
        const cleaned = value.replace(/\D/g, '');

        // Check if the cleaned number has more than 10 digits and limit to 10
        if (cleaned.length > 10) {
            return cleaned.slice(0, 10);
        }

        // Format the number
        if (cleaned.length <= 3) {
            return cleaned;
        }
        if (cleaned.length <= 6) {
            return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}`;
        }
        return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6, 10)}`;
    };

    return (
        <input
            id="phone"
            value={value}
            onChange={e => setValue(formatPhoneNumberNew(e.target.value))}
        />
    )
}

export default PhoneNumberInput;