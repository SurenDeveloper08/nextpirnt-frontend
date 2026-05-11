interface Props {
  colors: string[];
  selected: string;
  onChange: (value: string) => void;
}

export default function ColorFilter({
  colors,
  selected,
  onChange,
}: Props) {
  return (
    <div>
      <h3 className="font-semibold text-slate-900 mb-4">Colors</h3>

      <div className="flex flex-wrap gap-2">
        {colors.map((color) => (
          <button
            key={color}
            onClick={() => onChange(color)}
            className={`px-4 py-2 rounded-full border text-sm transition-all ${
              selected === color
                ? "bg-[#e63946] text-white border-[#e63946]"
                : "border-slate-200 hover:border-[#e63946]"
            }`}
          >
            {color}
          </button>
        ))}
      </div>
    </div>
  );
}