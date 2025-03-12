import Header from "./component/Header";
import Music from "./component/Music";
import Invitation from "./component/Invitation";
import Countdown from "./component/Countdown";

import AppRoutes from "./routes";


export default function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <Header />
      <Music />
      <Invitation />
      <Countdown />
      <AppRoutes />
    </div>
  );
}
