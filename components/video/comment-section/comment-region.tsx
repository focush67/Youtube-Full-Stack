"use client";

import { Channel, Comment as CommentType } from "@prisma/client";
import CommentInput from "./comment-input";
import Comment from "./comment";

interface CommentRegionProps {
  comments: (CommentType & { channel: Channel })[];
  videoId: string;
}
const CommentRegion: React.FC<CommentRegionProps> = ({ comments, videoId }) => {
  return (
    <div className="flex flex-col gap-4 w-full mb-4">
      <p>{comments.length} Comments</p>
      <CommentInput videoId={videoId} />
      <div className="flex flex-col gap-4 mt-4">
        {comments.map((comment) => {
          return (
            <>
              <Comment key={comment.id} comment={comment} />
              <br className="bg-red-500" />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default CommentRegion;
