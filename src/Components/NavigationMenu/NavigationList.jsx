import NavigationItem from "./NavigationItem";

const NavigationList = ({ menu }) => {
  return (
    <ol className="pl-2 w-full">
      {menu &&
        menu.map((menuItem, idx) => (
          <NavigationItem menuItem={menuItem} key={idx} />
        ))}
    </ol>
  );
};

export default NavigationList;
