interface Props {
  categories: string[];
  selected: string;
  onChange: (value: string) => void;
}

export default function CategoryFilter({
  categories,
  selected,
  onChange,
}: Props) {
  return (
    <div>
      <h3 className="font-semibold text-slate-900 mb-4">Categories</h3>

      <div className="space-y-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onChange(category)}
            className={`w-full text-left px-4 py-2 rounded-lg border transition-all ${
              selected === category
                ? "bg-slate-900 text-white border-slate-900"
                : "border-slate-200 hover:border-slate-900"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}