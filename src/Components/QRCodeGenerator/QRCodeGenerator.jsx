import { useState } from "react";
import GoHome from "../Utility/GoHome";
import QRCode from "react-qr-code";

const QRCodeGenerator = () => {
  const [input, setInput] = useState("");
  const [qrValue, setQRValue] = useState("");

  const handleQRInput = (e) => {
    setInput(e.target.value);
  };

  const handleQRCode = (qrInputVal) => {
    setQRValue(qrInputVal);
    setInput("");
  };

  const handleEnterPress = (e) => {
    if (e.key === "Enter") handleQRCode(input);
  };

  return (
    <>
      <div>
        <div className="flex flex-col justify-center items-center gap-10">
          <h1 className="p-5 text-5xl">QR Code Generator</h1>
          <input
            className="bg-white p-3 border-4 border-lime-600 rounded-full outline-none w-96 text-2xl text-center"
            name="qrCode"
            placeholder="Enter your text Here..."
            value={input}
            onChange={(e) => handleQRInput(e)}
            onKeyUp={handleEnterPress}
          />
          {qrValue && <QRCode value={qrValue} />}
          <button
            className="bg-lime-600 shadow-slate-950 shadow-xl p-4 rounded-full w-96 font-semibold text-white text-2xl"
            onClick={() => handleQRCode(input)}
          >
            Generate
          </button>
        </div>
      </div>
      <GoHome />
    </>
  );
};

export default QRCodeGenerator;
