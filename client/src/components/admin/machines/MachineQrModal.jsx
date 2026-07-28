import { X, Download, Printer } from "lucide-react";

export default function MachineQrModal({
  open,

  machine,

  onClose,
}) {
  if (!open || !machine) {
    return null;
  }

  // console.log(machine);
  // console.log(machine?._id);

  const handlePrint = () => {
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(
      `${import.meta.env.VITE_CLIENT_URL}/machine/${machine._id}`,
    )}`;

    const printWindow = window.open("", "_blank");

    printWindow.document.write(`
<!DOCTYPE html>
<html>

<head>

<title>${machine.name}</title>

<style>

body{

    margin:0;
    padding:30px;
    font-family:Arial,Helvetica,sans-serif;

    display:flex;
    justify-content:center;
    align-items:center;

}

.label{

    width:420px;

    border:2px solid #000;

    border-radius:10px;

    padding:20px;

    text-align:center;

}

h2{

    margin:0 0 20px;

}

img{

    width:250px;

    height:250px;

    display:block;

    margin:0 auto 20px;

}

table{

    width:100%;

    border-collapse:collapse;

}

td{

    border:1px solid #ccc;

    padding:8px;

}

td:first-child{

    width:120px;

    font-weight:bold;

}

</style>

</head>

<body>

<div class="label">

    <h2>${machine.name}</h2>

    <img
        id="qrImage"
        src="${qrUrl}"
    />

    <table>

        <tr>

            <td>Plant</td>

            <td>${machine.plantId?.name ?? "-"}</td>

        </tr>

        <tr>

            <td>Area</td>

            <td>${machine.areaId?.name ?? "-"}</td>

        </tr>

        <tr>

            <td>Tag Number</td>

            <td>${machine.tagNumber}</td>

        </tr>

    </table>

</div>

<script>

const img = document.getElementById("qrImage");

function printNow(){

    setTimeout(function(){

        window.focus();

        window.print();

    },300);

}

img.onload = printNow;

// if image fails
img.onerror = function(){

    alert("Unable to load QR Code.");

};

</script>

</body>

</html>
`);

    printWindow.document.close();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md">
        {/* Header */}

        <div className="flex justify-between items-center border-b p-5">
          <div>
            <h2 className="text-xl font-bold">Machine QR Code</h2>

            <p className="text-gray-500 text-sm mt-1">
              Scan this QR to view machine details.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100"
          >
            <X size={22} />
          </button>
        </div>

        {/* Body */}

        <div className="p-6 flex flex-col items-center">
          <h3 className="font-semibold text-lg">{machine.name}</h3>
          <p className="text-gray-500 mb-5">{machine.machineCode}</p>
          {/* {machine.qrCodeUrl ? (
            <img
              src={machine.qrCodeUrl}
              alt="QR Code"
              className="w-64 h-64 object-contain border rounded-xl"
            />
          ) : (
            <div className="w-64 h-64 border rounded-xl flex items-center justify-center text-gray-400">
              QR Not Generated
            </div>
          )} */}
          <img
            src={`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(
              `${import.meta.env.VITE_CLIENT_URL}/machine/${machine._id}`,
            )}`}
            alt="QR Code"
            className="w-64 h-64 object-contain border rounded-xl"
          />
        </div>

        {/* Footer */}

        <div className="border-t p-5 flex justify-end gap-3">
          {machine.qrCodeUrl && (
            <a
              href={machine.qrCodeUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white"
            >
              <Download size={18} />
              Download
            </a>
          )}

          {/* {machine.qrCodeUrl && (
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white"
            >
              <Printer size={18} />
              Print
            </button>
          )} */}

          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white"
          >
            <Printer size={18} />
            Print
          </button>

          <button onClick={onClose} className="px-4 py-2 rounded-lg border">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
