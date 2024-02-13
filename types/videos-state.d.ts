import { Video } from "@prisma/client";

export interface MediaState {
  videos: Video[] | [];
}
