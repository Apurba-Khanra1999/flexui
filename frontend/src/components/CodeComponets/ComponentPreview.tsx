import { LiveEditor, LiveError, LivePreview, LiveProvider } from "react-live";
import "tailwindcss/tailwind.css";
export default function ComponentPreview({ code }: { code: string }) {
  console.log(code);
  return (
    <LiveProvider code={code} >
      <div className="grid grid-cols-2 gap-4">
        <LiveEditor className="font-mono" />
        <LivePreview />
        <LiveError />
      </div>
    </LiveProvider>
  );
}
