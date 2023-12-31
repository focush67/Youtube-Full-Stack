"use client";

import {toast} from "react-hot-toast";
import { UploadVideoModalContext } from "@/contexts/UploadVideoModalContext";
import { useRouter } from "next/navigation";
import { useEffect, useContext, useMemo } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Button from "@/components/shared/Button";
import VideoUploadForm from "@/components/studio/upload/VideoUploadForm";
import VideoPreview from "@/components/studio/upload/VideoPreview";
import { v4 as uuid } from "uuid";
import { useState } from "react";
import UploadVideoModal from "@/components/shared/Modals/UploadVideoModal";
import axios from "axios";
import { useProtectedRoute } from "@/CustomHooks/useProtectedRoute";
export default function UploadPage() {
  const router = useRouter();

    useProtectedRoute();

  const [isLoading, setIsLoading] = useState(false);

  const uploadVideoModal = useContext(UploadVideoModalContext);
  useEffect(() => {
    uploadVideoModal?.onOpen();
  }, []);

  const videoId = useMemo(() => {
    const buffer = Buffer.alloc(12);
    return uuid({}, buffer).toString("hex");
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<FieldValues>({
    defaultValues: {
      title: "",
      description: "",
      thumbnailSrc: "",
      videoSrc: "",
    },
  });

  const thumbnailSrc: string = watch("thumnailSrc");
  const videoSrc: string = watch("videoSrc");

  const changeValue = (id: string, value: string) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };

  const onSubmit:SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    axios.post("/api/videos",data).then(() => {
        toast.success("Video Successfully Uploaded");
        router.push("/studio");
    }).catch(() => toast.error("Failed to publish video")).finally(() => setIsLoading(false));
  };

  return (
    <>
      { uploadVideoModal?.isOpen && <UploadVideoModal onUpload={(value) => changeValue("videoSrc", value)} />}

      <div className="flex flex-col px-8 pt-4">
        <div className="flex justify-between">
          <h1 className="text-2xl">Video Details</h1>
          <span className="flex gap-4">
            <Button type="secondary" onClick={() => router.back()}>
              Cancel
            </Button>
            <Button type="box" onClick={handleSubmit(onSubmit)}>
              Submit
            </Button>
          </span>
        </div>

        <div className="mt-8 flex flex-col md:flex-row gap-6 md:gap-2">
          <VideoUploadForm
            register={register}
            errors={errors}
            changeValue={changeValue}
            thumbnailSrc={thumbnailSrc}
            isLoading={isLoading}
          />
          <VideoPreview videoSrc={videoSrc} videoId={videoId} />
        </div>
      </div>
    </>
  );
}
