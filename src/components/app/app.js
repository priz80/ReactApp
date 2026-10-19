import { Component } from "react";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import "./app.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: "Igor", salary: 300000, increase: false, id: 1 },
        { name: "Alex", salary: 80000, increase: true, id: 2 },
        { name: "Serg", salary: 150000, increase: false, id: 3 },
      ],
    };
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter((item) => item.id !== id),
      };
    });
  };

  addItem = ({ name, salary }) => {          // ← НОВЫЙ МЕТОД
    const newId = Math.max(...this.state.data.map((item) => item.id), 0) + 1;
    this.setState(({ data }) => ({
      data: [
        ...data,
        { name, salary, increase: false, id: newId },
      ],
    }));
  };

  render() {
    return (
      <div className="app">
        <AppInfo />

        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>

        <EmployeesList data={this.state.data} onDelete={this.deleteItem} />
        <EmployeesAddForm onAdd={this.addItem} />  {/* ← ДОБАВЛЕНО */}
      </div>
    );
  }
}

export default App;