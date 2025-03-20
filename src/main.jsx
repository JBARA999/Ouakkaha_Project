import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

<<<<<<< HEAD
createRoot(document.getElementById("root")).render(<BrowserRouter ><App /></BrowserRouter> );
=======
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      
      <App />
    </BrowserRouter>
  </StrictMode>
);
>>>>>>> 4bbc495ceb0da0139b8ea7bb09817b7f9bf89eaa
