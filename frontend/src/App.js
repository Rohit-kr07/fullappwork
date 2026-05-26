import { BrowserRouter, Routes, Route  } from "react-router-dom";
import LandingPage from "./LandingPage";
import Signup from "./Signup";
import ProfilePage from "./ProfilePage";
import Signin from "./Signin";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profilePage" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
  
}
export default App;
