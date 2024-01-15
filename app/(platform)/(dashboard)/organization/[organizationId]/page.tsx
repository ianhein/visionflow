import { db } from "@/lib/db";
import { DeleteBoard } from "./board";
import { Form } from "./form";
const OrganizationIdPage = async () => {
  const boards = await db.board.findMany();

  return (
    <div className="flex flex-col space-y-4">
      <Form />
      <div className="space-y-2">
        {boards.map((board) => (
          <DeleteBoard key={board.id} title={board.title} id={board.id} />
        ))}
      </div>
    </div>
  );
};

export default OrganizationIdPage;
