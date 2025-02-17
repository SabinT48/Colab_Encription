'use client'
import { useState } from "react";

function caesarCipher(text: string, shift: number = 3): string {
  return text
    .split("")
    .map((char) => {
      const code = char.charCodeAt(0);
      if (code >= 65 && code <= 90) {
        return String.fromCharCode(((code - 65 + shift) % 26) + 65);
      }
      if (code >= 97 && code <= 122) {
        return String.fromCharCode(((code - 97 + shift) % 26) + 97);
      }
      return char;
    })
    .join("");
}

function reverseText(text: string): string {
  return text.split("").reverse().join("");
}

// Imitated SHA-like hash function (for demonstration only)
function fakeSHA(text: string): string {
  let hash = 0;
  for (let i = 0; i < text.length; i++) {
    hash = (hash << 5) - hash + text.charCodeAt(i);
    hash |= 0; // Convert to 32-bit integer
  }
  // Convert to hex string
  return hash.toString(16);
}

export default function Converter() {
  const [inputText, setInputText] = useState("");
  const [encryptionType, setEncryptionType] = useState("caesar");

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(e.target.value);
  };

  const handleEncryptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setEncryptionType(e.target.value);
  };

  function getEncryptedText(text: string): string {
    switch (encryptionType) {
      case "caesar":
        return caesarCipher(text);
      case "reverse":
        return reverseText(text);
      case "sha":
        return fakeSHA(text);
      case "none":
      default:
        return text;
    }
  }

  const encryptedText = getEncryptedText(inputText);

  return (
    <div className="flex flex-col relative z-20">
      <textarea
        value={inputText}
        onChange={handleInputChange}
        placeholder="Start typing here or paste any text you want to encrypt..."
        className="w-full h-[42vh] mt-6 px-9 focus:outline-none"
      />
      <hr className="mb-4" />
      <div className="w-full">
        <div className="flex justify-end mb-2">
          <select
            value={encryptionType}
            onChange={handleEncryptionChange}
            className="z-10 bg-white border w-fit rounded px-2 py-1 text-sm mr-3"
          >
            <option value="none">None</option>
            <option value="caesar">Caesar Cipher</option>
            <option value="reverse">Reverse</option>
            <option value="sha">SHA-256</option>
          </select>
        </div>
        <textarea
          value={encryptedText}
          readOnly
          className="w-full h-[40vh] px-9 focus:outline-none"
        />
      </div>
    </div>
  );
}