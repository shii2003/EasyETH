import SendersWindow from "@/components/HomePage/SendersWindow";
import SendToWindow from "@/components/HomePage/SendToWindow";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-9 items-center justify-center">
      <SendToWindow />
      <SendersWindow />
    </div>

  );
}
