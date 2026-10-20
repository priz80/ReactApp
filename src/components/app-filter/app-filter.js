import "./app-filter.css";

const AppFilter = (props) => {
  const buttonsData = [
    { name: "all", label: "Все сотрудники" },
    { name: "rise", label: "На повышение" },
    { name: "MoreThen1000", label: "З/П больше 1000$" },
    { name: "ButtonReset", label: "RESET" },
  ];

  const buttons = buttonsData.map(({ name, label }) => {
    const active = name !== "ButtonReset" && props.filter === name;
    const clazz = active ? "btn-light" : "btn-outline-light";
    return (
      <button
        type="button"
        className={`btn ${clazz}`}
        key={name}
        onClick={() => {
          if (name === "ButtonReset") {
            window.location.reload();
          } else {
            props.onFilterSelect(name);
          }
        }}
      >
        {label}
      </button>
    );
  });

  return <div className="btn-group">{buttons}</div>;
};

export default AppFilter;
