"use client";

import { useAction } from "@/hooks/use-action";
import { FormSubmit } from "@/components/form/form-submit";
import { createBoard } from "@/actions/create-dashboard";
import { FormInput } from "@/components/form/form-input";

export const Form = () => {
  const { execute, fieldErrors } = useAction(createBoard, {
    onSuccess: (data) => {
      console.log("success", data);
    },
    onError: (error) => {
      console.log("error", error);
    },
  });
  const onSubmit = (formData: FormData) => {
    const title = formData.get("title") as string;
    console.log("title", title);
    execute({ title });
  };
  return (
    <form action={onSubmit}>
      <div className="flex flex-col space-y-2">
        <FormInput label="board title" errors={fieldErrors} id="title" />
      </div>
      <FormSubmit>Save</FormSubmit>
    </form>
  );
};
