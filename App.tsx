import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import StackRoutes from "./src/routes/stack.routes";
export default function App() {
  return (
    <>
      <ExpoStatusBar style="light" />
      <StackRoutes />
    </>
  );
}
