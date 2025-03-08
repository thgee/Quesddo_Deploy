import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import TodoList from "@/components/organisms/todo-list/TodoList";
import { useGoalDetailContext } from "@/contexts/GoalDetailContext";
import { useInfiniteTodo } from "@/hooks/todo/useInfiniteTodo";

import Section from "../component/Section";

interface GoalDoneListProps {
  handleToggleTodo: (todoId: number, isDone: boolean) => void;
  setSelectedTodoId: (todoId: number | null) => void;
  onOpenDeletePopup: () => void;
}

export default function GoalDoneList({
  handleToggleTodo,
  setSelectedTodoId,
  onOpenDeletePopup,
}: GoalDoneListProps) {
  const { goalId } = useGoalDetailContext();
  const { data, fetchNextPage, hasNextPage } = useInfiniteTodo({
    goalId,
    filter: "done",
    size: 20,
  });
  const { todos, totalCount } = data;
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && hasNextPage) fetchNextPage();
  }, [inView]);

  return (
    <Section className="flex-1 bg-slate-200 hover:shadow">
      <div className="mb-[16px] flex justify-between">
        <p className="text-lg font-bold">done</p>
      </div>
      <div className="h-[168px] overflow-x-hidden overflow-y-auto pr-4 md:h-[512px]">
        {totalCount ? (
          <>
            <TodoList
              data={todos}
              handleToggleTodo={handleToggleTodo}
              setSelectedTodoId={setSelectedTodoId}
              onOpenDeletePopup={onOpenDeletePopup}
            />
            <div ref={ref}></div>
          </>
        ) : (
          <div className="flex h-full items-center justify-center text-sm font-normal text-slate-500">
            다 한 일이 아직 없어요
          </div>
        )}
      </div>
    </Section>
  );
}
