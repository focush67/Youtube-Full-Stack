"use client";
import React, { useState } from "react";
import UserAvatar, { UserAvatarSize } from "../UserAvatar";
import Button from "../Button";
import { FieldValues, useForm } from "react-hook-form";
import Input from "../Input";

const CreateChannelModal = () => {
  const [isLoading, setIsLoading] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      handle: "",
      imageSrc: "",
    },
  });
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col bg-zinc-800 w-3/5 max-w-sxl rounded-xl justify-center z-50">
      <h1 className="text-xl p-3 border-b border-neutral-700">
        How you&apos;ll appear
      </h1>
      <div className="flex flex-col items-center py-3 gap-4">
        <UserAvatar size={UserAvatarSize.lg} imageSrc={null} />
        <Button type={"primary"}>Upload Picture</Button>
        <Input
          id="name"
          label="name"
          disabled={isLoading}
          register={register}
          errors={errors}
          pattern={{
            value: /^[a-zA-Z0-9]*$/,
            message: "Invalid name format",
          }}
          required
          className="w-3/4"
        />

        <Input
          id="handle"
          label="Handle"
          disabled={isLoading}
          register={register}
          errors={errors}
          pattern={{
            value: /^[a-z0-9_-]{3,16}$/,
            message: "Invalid handle format",
          }}
          required
          className="w-3/4"
        />
      </div>
      <div className="p-3 border-t border-neutral-700 flex justify-end gap-3">
        <Button type="secondary">Cancel</Button>
        <Button type="primary">Create Channel</Button>
      </div>
    </div>
  );
};

export default CreateChannelModal;
