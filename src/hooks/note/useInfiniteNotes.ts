import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { fetchNotes } from "@/apis/note/fetchNotes";
import { TeamIdNotesGet200Response } from "@/types/types";

export const useInfiniteNotes = (goalId: number) => {
  const { ref: inViewRef, inView } = useInView();

  const query = useInfiniteQuery<
    TeamIdNotesGet200Response,
    Error,
    TeamIdNotesGet200Response["notes"]
  >({
    queryKey: ["notes", goalId],
    queryFn: ({ pageParam }) =>
      fetchNotes({ pageParam: pageParam as number | undefined, goalId }),
    getNextPageParam: (lastPage) => lastPage.nextCursor,
    initialPageParam: undefined,
    enabled: !!goalId,
    select: ({ pages }) => pages.flatMap(({ notes }) => notes),
  });

  useEffect(() => {
    // 스크롤 감지 블럭이 화면에 들어오고 다음페이지가 존재하는 경우에 데이터 더 가져오기
    if (inView && query.hasNextPage) {
      query.fetchNextPage();
    }
  }, [inView, query.hasNextPage]);

  return { ...query, inViewRef };
};
