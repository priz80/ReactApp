import { styled } from "styled-components";

const ListItem = styled.li`
  padding: 15px 20px;
  border-bottom: 1px solid #3d5a80;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:last-child {
    border-bottom: none;
  }

  &.increase {
    .list-group-item-label {
      color: #e09f3e;
      font-weight: bold;
    }
    .list-group-item-input {
      color: green;
      font-weight: bold;
    }

    .btn-cookie {
      color: green;
    }
  }

  &.like {
    .fa-star {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

const Label = styled.span`
  line-height: 35px;
  font-size: 20px;
  cursor: pointer;
  min-width: 550px;
`;

const Input = styled.input`
  line-height: 35px;
  font-size: 20px;
  text-align: center;
  border: 0;
`;

const Button = styled.button`
  width: 35px;
  height: 35px;
  margin: 3px;
  font-size: 17px;
  border: none;
  cursor: pointer;
`;

const CookieButton = styled(Button)`
  color: #e09f3e;
`;

const TrashButton = styled(Button)`
  color: #e5383b;
`;

const StarIcon = styled.i`
  width: 35px;
  height: 35px;
  text-align: center;
  line-height: 35px;
  font-size: 16px;
  color: #ffd700;
  transition: 0.3s all;
  transform: translateX(30px);
  opacity: 0;
`;

const ActionsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const EmployeesListItem = (props) => {
  const {
    name,
    salary,
    onDelete,
    onToggleProp,
    onSalaryChange,
    increase,
    onLike,
  } = props;

  return (
    <ListItem
      className={`${increase ? "increase " : ""}${onLike ? "like" : ""}`}
    >
      <Label
        className="list-group-item-label"
        onClick={onToggleProp}
        data-toggle="onLike"
      >
        {name}
      </Label>
      <Input
        className="list-group-item-input"
        value={salary + "$"}
        onChange={(e) => onSalaryChange(e.target.value.replace("$", ""))}
      />
      <ActionsContainer>
        <CookieButton
          type="button"
          className="btn-cookie btn-sm"
          onClick={onToggleProp}
          data-toggle="increase"
        >
          <i className="fas fa-cookie"></i>
        </CookieButton>
        <TrashButton
          type="button"
          className="btn-trash btn-sm"
          onClick={onDelete}
        >
          <i className="fas fa-trash"></i>
        </TrashButton>
        <StarIcon className="fas fa-star"></StarIcon>
      </ActionsContainer>
    </ListItem>
  );
};

export default EmployeesListItem;
