interface MenuContent {
  Text: string;
}

const MenuItems: React.FC<MenuContent> = ({ Text }) => {
  const changePage = () => {
    console.log(Text);
  };
  return (
    <div className="ManuItems" onClick={changePage}>
      {Text}
    </div>
  );
};

export default MenuItems;
