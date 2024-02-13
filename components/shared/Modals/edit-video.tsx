"use client";

import { Video } from "@prisma/client";
import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { MdCheck, MdClose } from "react-icons/md";

interface EditModalProps {
  onClose: () => void;
  video: Video;
}

const EditModal = ({ onClose, video }: EditModalProps) => {
  const [title, setTitle] = useState(video.title);
  const [description, setDescription] = useState(video.description);

  const handleTitleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription(e.target.value);
  };

  const handleSubmit = async () => {
    // You can handle form submission here
    // For simplicity, just log the values for now
    console.log("Title:", title);
    console.log("Description:", description);
    try {
      await axios.put(`/api/videos/${video.id}`, {
        title,
        description,
      });

      toast.success("Edited video");
    } catch (error: any) {
      toast.error("Error occured while editing");
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 ">
      <div className="bg-blackish p-4 rounded-lg">
        <div className="flex justify-end">
          <button
            className="text-zinc-500 hover:text-gray-800"
            onClick={onClose}
          >
            <MdClose />
          </button>
        </div>
        <div className="w-[85vw]">
          <h2 className="text-lg font-semibold mb-4 text-zinc-500">
            Edit Video
          </h2>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-zinc-500"
            >
              Title
            </label>
            <textarea
              id="title"
              name="title"
              value={title}
              onChange={handleTitleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full h-10 resize-vertical text-zinc-500 bg-blackish"
            ></textarea>
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-zinc-500"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={description}
              onChange={handleDescriptionChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full h-32 resize-vertical text-zinc-500 bg-blackish"
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              className="flex items-center bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600"
              onClick={handleSubmit}
            >
              <MdCheck className="mr-2" />
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
