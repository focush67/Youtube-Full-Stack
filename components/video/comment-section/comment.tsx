"use client";

import dayjs from "@/vendor/dayjs";
import { Channel, Comment } from "@prisma/client";
import UserAvatar from "@/components/shared/user-avatar";

interface CommentProps {
  comment: Comment & { channel: Channel };
}

const Comment: React.FC<CommentProps> = ({ comment }) => {
  return (
    <div className="flex items-start gap-2" key={comment.id}>
      <UserAvatar imageSrc={comment.channel.imageSrc} />

      <div className="flex flex-col gap-1">
        <div className="flex gap-2 items-center text-sm">
          <p className="font-medium">@{comment.channel.handle}</p>
          <p className="font-light text-neutral-400">
            {dayjs(comment.createdAt).fromNow()}
          </p>
        </div>
        <p>{comment.text}</p>
      </div>
    </div>
  );
};

export default Comment;
