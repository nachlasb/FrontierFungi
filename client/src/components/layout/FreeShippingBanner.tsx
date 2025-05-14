import { FREE_SHIPPING_THRESHOLD } from "@/lib/constants";

export default function FreeShippingBanner() {
  return (
    <div className="bg-fungi-green text-white text-center py-2 px-4 fixed w-full z-50">
      <p className="text-sm font-montserrat">
        Free shipping on all orders over ${FREE_SHIPPING_THRESHOLD} 🍄
      </p>
    </div>
  );
}
