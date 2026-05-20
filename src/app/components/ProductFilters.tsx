interface Props {
  brands: string[];
  categories: string[];
  colors: string[];

  selectedBrand: string;
  selectedCategory: string;
  selectedColor: string;

  setBrand: (value: string) => void;
  setCategory: (value: string) => void;
  setColor: (value: string) => void;
}

export default function ProductFilters({
  brands,
  categories,
  colors,
  selectedBrand,
  selectedCategory,
  selectedColor,
  setBrand,
  setCategory,
  setColor,
}: Props) {
  const resetFilters = () => {
    setBrand("");
    setCategory("");
    setColor("");
  };

  return (
    <aside className="bg-white border border-slate-200 rounded-3xl p-5 lg:p-6 space-y-8">

      {/* HEADER */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-slate-900">
          Filters
        </h2>

        <button
          onClick={resetFilters}
          className="text-sm font-semibold text-[#e63946]"
        >
          Reset
        </button>
      </div>

      {/* BRANDS */}
      <div>
        <h3 className="font-semibold text-slate-900 mb-3">
          Brands
        </h3>

        <div className="space-y-2">
          {brands.map((brand) => (
            <button
              key={brand}
              onClick={() => setBrand(brand)}
              className={`w-full text-left px-4 py-3 rounded-xl border transition-all ${selectedBrand === brand
                  ? "bg-[#e63946] text-white border-[#e63946]"
                  : "border-slate-200 hover:border-[#e63946]"
                }`}
            >
              {brand}
            </button>
          ))}
        </div>
      </div>

      {/* CATEGORIES */}
      <div>
        <h3 className="font-semibold text-slate-900 mb-3">
          Categories
        </h3>

        <div className="space-y-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`w-full text-left px-4 py-3 rounded-xl border transition-all ${selectedCategory === cat
                  ? "bg-slate-900 text-white border-slate-900"
                  : "border-slate-200 hover:border-slate-900"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* COLORS */}
      <div>
        <h3 className="font-semibold text-slate-900 mb-3">
          Colors
        </h3>

        <div className="flex flex-wrap gap-2">
          {colors.map((color) => (
            <button
              key={color}
              onClick={() => setColor(color)}
              className={`px-4 py-2 rounded-full border text-sm transition-all ${selectedColor === color
                  ? "bg-[#e63946] text-white border-[#e63946]"
                  : "border-slate-200 hover:border-[#e63946]"
                }`}
            >
              {color}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}