import { useState } from "react";
import NavigationList from "./NavigationList";
import { FaPlus, FaMinus } from "react-icons/fa";

const NavigationItem = ({ menuItem }) => {
  const [showChild, setShowChild] = useState(false);

  const handleShowChild = () => {
    setShowChild(!showChild);
  };

  return (
    <li className="my-4 pl-4 w-full">
      <div
        onClick={handleShowChild}
        className="flex justify-between items-center gap-2 cursor-pointer"
      >
        {menuItem.label}
        {menuItem &&
          menuItem.children &&
          (showChild ? <FaMinus /> : <FaPlus />)}
      </div>
      {menuItem && menuItem.children && showChild && (
        <NavigationList menu={menuItem.children} />
      )}
    </li>
  );
};

export default NavigationItem;
