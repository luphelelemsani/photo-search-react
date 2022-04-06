import "./button.css";

const Button = ({ filterItem, menuItems }) => {
  // const [showSidebar, setShowSidebar] = React.useState(false);

  return (
    <>
      <div>
        <div className="btn-container">
          {menuItems.map((Val, id) => {
            return (
              <button
                className="topic-btn"
                onClick={() => filterItem(Val)}
                key={id}
              >
                {Val}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Button;
