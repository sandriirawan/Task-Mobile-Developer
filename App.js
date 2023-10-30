import { StatusBar } from "expo-status-bar";
import Login from "./screens/Login";
import Navigator from "./screens/Navigator";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Navigator />
      {/* <Login /> */}
    </>
  );
}
