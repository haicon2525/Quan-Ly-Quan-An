import { Button } from "@/components/ui/button";
import ClientComponent from "./ClientComponent";

export default function Home() {
  return (
    <div className="flex flex-wrap items-center gap-2 md:flex-row">
      <Button variant="outline">Button</Button>
      <ClientComponent></ClientComponent>
    </div>
  );
}
