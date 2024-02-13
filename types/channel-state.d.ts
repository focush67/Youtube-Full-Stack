import { Channel } from "@prisma/client";

export interface ChannelState {
  currentChannel: Channel | null;
  loading: boolean;
  error: any;
}
