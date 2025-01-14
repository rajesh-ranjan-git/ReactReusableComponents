import { useNavigate } from "react-router-dom";
import ModuleButton from "./Utility/ModuleButton";
import modulePaths from "./Utility/ModulePaths";

const Home = () => {
  const navigate = useNavigate();

  const handler = (path) => {
    navigate(path);
  };

  return (
    <div className="flex flex-wrap justify-center items-center gap-10 p-10 min-h-screen">
      {modulePaths &&
        modulePaths.map((path) => (
          <ModuleButton
            key={path.label}
            label={path.label}
            handler={() => handler(`${path.path}`)}
          />
        ))}
    </div>
  );
};

export default Home;
