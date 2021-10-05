import { useEffect } from "react";

import ScrollTop from "./components/ScrollTop";
import FirstContent from "./components/FirstContent";
import SecondContent from "./components/SecondContent";
import ThirdContent from "./components/ThirdContent";

const App = () => {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, []);

  return (
    <>
      <ScrollTop />
      <FirstContent />
      <SecondContent />
      <ThirdContent />
    </>
  );
};

export default App;
