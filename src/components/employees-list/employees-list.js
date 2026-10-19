import { styled } from "styled-components";
import EmployeesListItem from "../employees-list-item/employees-list-item";

const List = styled.ul`
  margin-top: 30px;
  background-color: #3d5a80;
  border-radius: 4px;
  box-shadow: 15px 15px 30px rgba(0, 0, 0, 0.15);
  color: #fff;
  list-style: none;
  padding: 0;
`;

const EmployeesList = ({ data, onDelete, onToggleProp, onSalaryChange }) => {
  const elements = data.map((item) => {
    return (
      <EmployeesListItem
        key={item.id}
        onDelete={() => onDelete(item.id)}
        onToggleProp={(e) =>
          onToggleProp(item.id, e.currentTarget.getAttribute("data-toggle"))
        }
        onSalaryChange={(newSalary) => onSalaryChange(item.id, newSalary)}
        {...item}
      />
    );
  });

  return <List>{elements}</List>;
};

export default EmployeesList;
