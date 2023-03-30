import { NavigateToTaskAddButton } from "features";
import { TasksSummary } from "entities/task";

export const TasksSummaryWidget = () => {
  return <TasksSummary actionItem={<NavigateToTaskAddButton />} />;
};
