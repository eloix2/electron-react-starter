import { Button } from "@/components/ui/button";

function App() {
  return (
    <div className="flex h-full w-full flex-col place-content-center place-items-center gap-4 p-8 text-center">
      <p className="text-4xl font-bold underline">Text styled with tailwind</p>
      <Button variant="outline">Button from shadcn</Button>
    </div>
  );
}

export default App;
