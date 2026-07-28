import { Building2, MapPin, Hash, Copy, Check } from "lucide-react";

import { useState } from "react";

export default function MachineHeader({ machine }) {
  const [copied, setCopied] = useState(false);

  const machineUrl = `${window.location.origin}/machine/${machine._id}`;

  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(machineUrl)}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(machineUrl);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error(error);
    }
  };

  // const handlePrint = () => {
  //   window.print();
  // };

  return (
    <div className="bg-white rounded-2xl shadow border overflow-hidden">
      {/* Top */}

      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          {/* Left */}

          <div className="flex-1">
            <p className="uppercase tracking-widest text-blue-100 text-sm font-medium">
              Machine Details
            </p>

            <h1 className="text-4xl font-bold mt-2">{machine.name}</h1>

            <p className="mt-3 text-blue-100">
              Scan the QR Code anytime to access this machine information.
            </p>

            <div className="flex flex-wrap gap-3 mt-6">
              <div className="flex items-center gap-2 bg-white/20 rounded-full px-4 py-2">
                <Building2 size={18} />

                <span>{machine.plantId?.name}</span>
              </div>

              <div className="flex items-center gap-2 bg-white/20 rounded-full px-4 py-2">
                <MapPin size={18} />

                <span>{machine.areaId?.name}</span>
              </div>

              <div className="flex items-center gap-2 bg-white/20 rounded-full px-4 py-2">
                <Hash size={18} />

                <span>{machine.tagNumber}</span>
              </div>
            </div>
          </div>

          {/* QR */}

          <div className="flex flex-col items-center">
            <div className="bg-white rounded-xl p-4 shadow-lg">
              <img src={qrUrl} alt="Machine QR" className="w-44 h-44" />
            </div>

            <p className="text-blue-100 text-sm mt-3">Scan to open</p>
          </div>
        </div>
      </div>

      {/* Bottom */}

      <div className="flex flex-col md:flex-row justify-between items-center gap-4 p-6">
        <div>
          <h2 className="text-lg font-semibold">{machine.name}</h2>

          <p className="text-gray-500">Tag Number : {machine.tagNumber}</p>
        </div>

        <div className="flex gap-3">
          <button
            onClick={handleCopy}
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg border hover:bg-gray-100 transition"
          >
            {copied ? (
              <Check size={18} className="text-green-600" />
            ) : (
              <Copy size={18} />
            )}

            {copied ? "Copied" : "Copy Link"}
          </button>

          {/* <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            <Printer size={18} />
            Print
          </button> */}
        </div>
      </div>
    </div>
  );
}
