interface Props {
  brands: string[];
  selected: string;
  onChange: (value: string) => void;
}

export default function BrandFilter({
  brands,
  selected,
  onChange,
}: Props) {
  return (
    <div>
      <h3 className="font-semibold text-slate-900 mb-4">Brands</h3>

      <div className="space-y-2">
        {brands.map((brand) => (
          <button
            key={brand}
            onClick={() => onChange(brand)}
            className={`w-full text-left px-4 py-2 rounded-lg border transition-all ${
              selected === brand
                ? "bg-[#e63946] text-white border-[#e63946]"
                : "border-slate-200 hover:border-[#e63946]"
            }`}
          >
            {brand}
          </button>
        ))}
      </div>
    </div>
  );
}