"use client";

import { UploadVideoModalContext } from "@/contexts/upload-video-context";
import { useRouter } from "next/navigation";
import { MdClose, MdUpload } from "react-icons/md";
import { useContext } from "react";
import MediaUpload from "../media-upload";
import IconButton from "../icon-button";
import Button from "../button";

interface UploadVideoModalProps {
  onUpload: (value: string) => void;
}

const UploadVideoModal: React.FC<UploadVideoModalProps> = ({ onUpload }) => {
  const router = useRouter();
  const uploadVideoModal = useContext(UploadVideoModalContext);

  const handleUpload = (value: string) => {
    uploadVideoModal?.onClose();
    onUpload(value);
  };

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-start bg-zinc-800 w-5/6 h-5/6 rounded-xl z-50">
      <div className="p-3 border-b border-neutral-700 flex justify-between">
        <h1 className="text-xl">Upload</h1>
        <MdClose
          className="h-6 w-6 cursor-pointer"
          onClick={() => {
            uploadVideoModal?.onClose();
            router.back();
          }}
        />
      </div>

      <div className="flex flex-col gap-4 justify-center items-center h-full">
        <MediaUpload onChange={handleUpload}>
          <IconButton className="bg-stone-900">
            <MdUpload className="h-20 w-20 m-8 text-neutral-400" />
          </IconButton>
        </MediaUpload>

        <div className="flex flex-col items-center">
          <p>Select files</p>
          <p className="text-sm text-neutral-400">
            Videos are private until published
          </p>
        </div>
        <MediaUpload onChange={handleUpload}>
          <Button type="box">Select Field</Button>
        </MediaUpload>
      </div>
    </div>
  );
};

export default UploadVideoModal;
