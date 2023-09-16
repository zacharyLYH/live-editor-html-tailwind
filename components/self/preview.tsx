"use client";

import { UserCircle2 } from "lucide-react";
import useCodeStore from "@/data-store/code-store";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import useToggleFullScreen from "@/data-store/full-screen-store";
import { useRef } from "react";
import { captureIframe } from "@/lib/static-screenshot";

interface EditorProps {
    className?: string;
}

const Preview: React.FC<EditorProps> = ({ className }) => {
    const { code } = useCodeStore();
    const { fullScreen, toggleFullScreen } = useToggleFullScreen();
    const iframeRef = useRef<HTMLIFrameElement>(null);

    const completedCode = `<!doctype html>
        <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <script src="https://cdn.tailwindcss.com"></script>
        </head>
        <body class="bg-white">
          ${code}
        </body>
        </html>`;
    return (
        <div
            className={cn(
                "flex flex-col h-full rounded-lg",
                fullScreen ? "col-span-3" : className
            )}
        >
            <div className="flex flex-row space-x-2">
                <Button
                    onClick={toggleFullScreen}
                    className="bg-purple-500 text-white"
                >
                    {fullScreen ? "Minimize" : "Full Screen"}
                </Button>
                <Button
                    className="bg-green-500 "
                    onClick={() => captureIframe(iframeRef)}
                >
                    Capture Iframe
                </Button>
            </div>
            <div className="flex items-center justify-between bg-gray-300 rounded-t-lg px-4 py-2">
                <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex text-center justify-center bg-white px-3 py-1.5 rounded-full text-gray-400 text-muted-foreground">
                    <span>https://tailspin.com</span>
                </div>
                <UserCircle2 className="h-7 w-7" />
            </div>
            <iframe
                ref={iframeRef}
                title="Preview"
                srcDoc={completedCode}
                width="100%"
                height="100%"
                allowFullScreen
                className="border-t border-gray-300 flex-grow rounded-b-lg"
            />
        </div>
    );
};

export default Preview;