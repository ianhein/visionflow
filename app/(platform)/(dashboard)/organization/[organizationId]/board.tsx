import { deleteBoard } from "@/actions/delete-board";
import { Button } from "@/components/ui/button";
import { FormDelete } from "./form-delete";

interface DeleteBoardProps {
  title: string;
  id: string;
}

export const DeleteBoard = ({ title, id }: DeleteBoardProps) => {
  const deleteBoardWithId = deleteBoard.bind(null, id);
  return (
    <form className="flex items-center gap-x-2" action={deleteBoardWithId}>
      <p>Board name:</p> {title}
      <FormDelete />
    </form>
  );
};
