import { Button } from "@/components/ui/button";

function App() {
  return (
    <div className="flex h-full w-full flex-col place-content-center place-items-center gap-4 p-8 text-center">
      <p className="text-4xl font-bold underline">
        Tailwind is working if this is styled
      </p>
      <Button variant="outline">
        shadcn-ui is working if you can see this button
      </Button>
      <div>
        preload script is working if you can see the version numbers below:
      </div>
      <div>
        Chrome (v{window.versions.chrome()}), Node.js (v
        {window.versions.node()}
        ), and Electron (v{window.versions.electron()})
      </div>
    </div>
  );
}

export default App;
