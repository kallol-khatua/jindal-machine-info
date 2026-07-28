import { Factory } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

export default function BrandLogo({ showText = true, size = 42 }) {
  return (
    <Link to="/" className="flex items-center gap-3">
      {/* Replace with your logo image later */}

      {/* <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-700 text-white shadow-md">
                <Factory size={size * 0.55} />
            </div> */}

      <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl shadow-md">
        <img
          src={logo}
          alt="Jindal Steel"
          className="h-full w-full object-contain"
        />
      </div>

      {showText && (
        <div className="leading-tight">
          <h1 className="text-lg font-bold text-slate-800">Jindal Steel</h1>

          <p className="text-xs text-slate-500">Pellet Plant • Barbil</p>
        </div>
      )}
    </Link>
  );
}
