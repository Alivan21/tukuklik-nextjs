import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

function SortBrandCard() {
  const radios = [
    {
      id: "r1",
      value: "apple",
      label: "Apple",
    },
    {
      id: "r2",
      value: "samsung",
      label: "Samsung",
    },
    {
      id: "r3",
      value: "xiaomi",
      label: "Xiaomi",
    },
    {
      id: "r4",
      value: "huawei",
      label: "Huawei",
    },
    {
      id: "r5",
      value: "oppo",
      label: "Oppo",
    },
    {
      id: "r6",
      value: "vivo",
      label: "Vivo",
    },
  ];

  return (
    <div className="rounded-sm bg-gray-100 px-4 py-5">
      <h2 className="text-lg font-medium">By Brand</h2>
      <div className="mt-5">
        <RadioGroup className="flex flex-col gap-4" defaultValue="">
          {radios.map(radio => (
            <div className="flex items-center space-x-2" key={radio.id}>
              <RadioGroupItem id={radio.id} value={radio.value} />
              <Label className="font-normal text-gray-800" htmlFor={radio.id}>
                {radio.label}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>
    </div>
  );
}
export default SortBrandCard;
