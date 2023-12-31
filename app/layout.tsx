import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/shared/Navigation/Navigation";
import CurrentUserProvider from "@/contexts/CurrentUserContext";
import getCurrentUser from "@/getCurrentUser";
import CurrentChannelProvider from "@/contexts/CurrentChannelContext";
import CreateChannelModalProvider from "@/contexts/CreateChannelContext";
import CreateChannelModal from "@/components/shared/Modals/CreateChannelModal";
import { Toaster } from "react-hot-toast";
import getCurrentChannel from "@/getCurrentChannel";
import UploadVideoModalProvider from "@/contexts/UploadVideoModalContext";
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
  const currentUser = await getCurrentUser();
  const currentChannel = await getCurrentChannel();
  return (
    <html lang="en">
      <body className={inter.className}>
        <CreateChannelModalProvider>
          <Toaster
            toastOptions={{
              position: "bottom-left",
            }}
          />
          <CurrentUserProvider user={currentUser}>
            <CreateChannelModal />
            <CurrentChannelProvider user={currentChannel}>
              <UploadVideoModalProvider>
                <Navigation />
                <div className="pt-16">{children}</div>
              </UploadVideoModalProvider>
            </CurrentChannelProvider>
          </CurrentUserProvider>
        </CreateChannelModalProvider>
      </body>
    </html>
  );
}
