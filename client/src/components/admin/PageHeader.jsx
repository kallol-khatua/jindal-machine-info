import { Plus } from "lucide-react";

export default function PageHeader({
  title,
  subtitle,
  buttonText,
  onButtonClick,
}) {
  return (
    <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">{title}</h1>

        <p className="mt-1 text-slate-500">{subtitle}</p>
      </div>

      <button
        onClick={onButtonClick}
        className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-white transition hover:bg-blue-700"
      >
        <Plus size={18} />

        {buttonText}
      </button>
    </div>
  );
}
