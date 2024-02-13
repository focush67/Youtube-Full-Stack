import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/shared/Navigation/navigation";
import SidebarProvider from "@/contexts/sidebar-context";
import CreateChannelModalProvider from "@/contexts/create-channel-context";
import CreateChannelModal from "@/components/shared/Modals/create-channel";
import { Toaster } from "react-hot-toast";
import UploadVideoModalProvider from "@/contexts/upload-video-context";
import ReduxProvider from "@/utilities/store-providers";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Youtube",
  description: "Showify",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CreateChannelModalProvider>
          <Toaster
            toastOptions={{
              position: "bottom-left",
            }}
          />
          <ReduxProvider>
            <CreateChannelModal />

            <UploadVideoModalProvider>
              <SidebarProvider>
                <Navigation />
                <div className="pt-16">{children}</div>
              </SidebarProvider>
            </UploadVideoModalProvider>
          </ReduxProvider>
        </CreateChannelModalProvider>
      </body>
    </html>
  );
}
