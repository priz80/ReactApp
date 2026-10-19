import EmployeesListItem from "../employees-list-item/employees-list-item";

import "./employees-list.css";

const EmployeesList = ({ data, onDelete }) => {
  const elements = data.map((item) => {
    return (
      <EmployeesListItem
        key={item.id}                    // ← item.id вместо id
        onDelete={() => onDelete(item.id)}  // ← item.id вместо id
        {...item}
      />
    );
  });

  return <ul className="app-list list-group">{elements}</ul>;
};

export default EmployeesList;