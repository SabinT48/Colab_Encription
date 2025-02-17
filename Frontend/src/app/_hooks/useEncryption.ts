import { useState, useEffect } from 'react';

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

function fakeSHA(text: string): string {
  let hash = 0;
  for (let i = 0; i < text.length; i++) {
    hash = (hash << 5) - hash + text.charCodeAt(i);
    hash |= 0;
  }
  return hash.toString(16);
}

function decryptCaesar(text: string, shift: number = 3): string {
  return caesarCipher(text, 26 - shift);
}

export function useEncryption() {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [encryptionType, setEncryptionType] = useState("caesar");
  const [isEncryptMode, setIsEncryptMode] = useState(true);

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

  function decryptText(text: string): string {
    switch (encryptionType) {
      case "caesar":
        return decryptCaesar(text);
      case "reverse":
        return reverseText(text);
      case "sha":
        return "Cannot decrypt SHA hash";
      case "none":
      default:
        return text;
    }
  }

  useEffect(() => {
    setOutputText(
      isEncryptMode 
        ? getEncryptedText(inputText)
        : decryptText(inputText)
    );
  }, [inputText, encryptionType, isEncryptMode]);

  const handleSwapContent = () => {
    if (encryptionType === "sha") {
      alert("Cannot decrypt SHA hash - it's a one-way function");
      return;
    }
    const currentOutput = outputText;
    setIsEncryptMode(!isEncryptMode);
    setTimeout(() => {
      setInputText(currentOutput);
    }, 0);
  };

  return {
    inputText,
    outputText,
    encryptionType,
    isEncryptMode,
    setInputText,
    setEncryptionType,
    handleSwapContent
  };
}
