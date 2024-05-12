import { renderHook } from "@testing-library/react";
import { useGetAllPostsQuery } from "../../../services/posts";
import TestWrapper from "../../wrapper/test-wrapper";

it("renders hook", () => {
  renderHook(
    () => {
      useGetAllPostsQuery();
    },
    { wrapper: TestWrapper }
  );
});
