'use client'
import { useState } from "react";

function caesarCipher(text: string, shift: number = 3): string {
  return text
    .split("")
    .map((char) => {
      const code = char.charCodeAt(0);
      if (code >= 65 && code <= 90) {
        // Uppercase letters
        return String.fromCharCode(((code - 65 + shift) % 26) + 65);
      }
      if (code >= 97 && code <= 122) {
        // Lowercase letters
        return String.fromCharCode(((code - 97 + shift) % 26) + 97);
      }
      // Non alphabetical characters remain unchanged
      return char;
    })
    .join("");
}

export default function Converter() {
  const [inputText, setInputText] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(e.target.value);
  };

  // Compute encrypted text live based on the inputText
  const encryptedText = caesarCipher(inputText);

  return (
    <div className="flex flex-col h-full">
      <textarea
        value={inputText}
        onChange={handleInputChange}
        placeholder="Start typing here or paste any text you want to encrypt..."
        className="w-full h-[42vh] p-2 mb-4 focus:outline-none"
      />
      <hr />
      <textarea
        value={encryptedText}
        readOnly
        className="w-full h-[42vh] p-2 focus:outline-none"
      />
    </div>
  );
}