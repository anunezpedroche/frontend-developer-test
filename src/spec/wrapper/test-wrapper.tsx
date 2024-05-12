import { Provider } from "react-redux";
import { store } from "../../stores";

interface TestWrapperProps {
  children: React.ReactNode;
}

export default function TestWrapper({ children }: TestWrapperProps) {
  return <Provider store={store}>{children}</Provider>;
}
