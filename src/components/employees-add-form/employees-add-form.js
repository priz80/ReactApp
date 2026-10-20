import { Component } from "react";
import "./employees-add-form.css";

class EmployeesAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      salary: "",
      nameError: "",
    };
  }

  onValueChange = (e) => {
    const { name, value } = e.target;
    let nameError = "";

    if (name === "name" && value.length > 0 && value.length < 3) {
      nameError = "Минимум 3 символа";
    }

    this.setState({
      [name]: value,
      nameError,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { name, salary, nameError } = this.state;
    if (!nameError && name.trim() && salary) {
      this.props.onAdd({ name: name.trim(), salary: Number(salary) });
      this.setState({ name: "", salary: "", nameError: "" });
    }
  };

  render() {
    const { name, salary, nameError } = this.state;
    return (
      <div className="app-add-form">
        <h3>Добавить нового сотрудника</h3>
        <form className="add-form d-flex" onSubmit={this.onSubmit}>
          <label for="username">Имя cотрудника:</label>
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="Имя"
            name="name"
            value={name}
            onChange={this.onValueChange}
            id="username"
          />
          {nameError && (
            <span style={{ color: "red", fontSize: "0.85rem" }}>
              {nameError}
            </span>
          )}
          <label for="salary">Заработная плата: </label>
          <input
            type="number"
            className="form-control new-post-label"
            placeholder="$$$"
            name="salary"
            value={salary}
            onChange={this.onValueChange}
            id="salary"
          />
          <button type="submit" className="btn btn-outline-light">
            Добавить
          </button>
        </form>
      </div>
    );
  }
}

export default EmployeesAddForm;