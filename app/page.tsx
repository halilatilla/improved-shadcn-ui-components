import { CopyToClipboard } from "@/components/ui/copy-to-clipboard";
import { Toaster } from "@/components/ui/toaster";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="w-full max-w-2xl space-y-8">
        <h1 className="text-3xl font-bold text-center cursor-pointer">
          Copy to clipboard with tooltip & toast
        </h1>

        <div className="space-y-4 max-w-xs mx-auto">
          <div className="flex items-center justify-between p-4 rounded-lg bg-muted">
            <span className="text-sm">Custom text example</span>
            <CopyToClipboard text="This is a custom text" />
          </div>
        </div>
      </div>
      <Toaster />
    </main>
  );
}
