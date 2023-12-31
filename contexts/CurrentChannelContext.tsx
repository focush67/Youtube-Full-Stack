"use client";
import { Channel } from "@prisma/client";
import { createContext } from "react";

export const CurrentChannelContext = createContext<Channel | null>(null);

interface CurrentChannelProviderProps {
  user: Channel | null;
}

const CurrentChannelProvider: React.FC<
  React.PropsWithChildren<CurrentChannelProviderProps>
> = ({ user, children }) => {
  return (
    <CurrentChannelContext.Provider value={user}>
      {children}
    </CurrentChannelContext.Provider>
  );
};

export default CurrentChannelProvider;