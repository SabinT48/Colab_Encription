"use client";
import { useEncryption } from "../_hooks/useEncryption";
import ReverseButton from "./ReverseButton";

export default function Converter() {
  const {
    inputText,
    outputText,
    encryptionType,
    isEncryptMode,
    setInputText,
    setEncryptionType,
    handleSwapContent
  } = useEncryption();

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(e.target.value);
  };

  const handleEncryptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setEncryptionType(e.target.value);
  };

  return (
    <div className="flex flex-col relative z-20">
      <textarea
        key={`input-${isEncryptMode}`}
        value={inputText}
        onChange={handleInputChange}
        placeholder={isEncryptMode 
          ? "Enter text to encrypt..." 
          : "Enter text to decrypt..."}
        className="w-full h-[42vh] mt-6 px-9 focus:outline-none"
      />

      <div className="flex justify-center items-center">
        <hr className="w-full" />
        <ReverseButton 
          className={`z-10 border rounded-full bg-white ${!isEncryptMode ? 'rotate-180' : ''}`}
          onClick={handleSwapContent}
        />
        <hr className="w-full" />
      </div>

      <div className="w-full">
        <div className="flex justify-between mb-2">
          <div className="text-sm text-gray-500 ml-3">
            Mode: {isEncryptMode ? 'Encryption' : 'Decryption'}
          </div>
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
          key={`output-${isEncryptMode}`}
          value={outputText}
          readOnly
          className="w-full h-[40vh] px-9 focus:outline-none"
        />
      </div>
    </div>
  );
}
