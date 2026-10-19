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
        { name: "Igor", salary: 300000, increase: false, onLike: true, id: 1 },
        { name: "Alex", salary: 80000, increase: true, onLike: false, id: 2 },
        { name: "Serg", salary: 150000, increase: false, onLike: false, id: 3 },
      ],
      term: "",
      filter: "all",
    };
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter((item) => item.id !== id),
      };
    });
  };

  addItem = ({ name, salary }) => {
    const newId = Math.max(...this.state.data.map((item) => item.id), 0) + 1;
    this.setState(({ data }) => ({
      data: [
        ...data,
        { name, salary, increase: false, onLike: false, id: newId },
      ],
    }));
  };

  onToggleProp = (id, prop) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] };
        }
        return item;
      }),
    }));
  };

  searchEmp = (items, term) => {
    if (term.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.name.indexOf(term) > -1;
    });
  };

  onUpdateSearch = (term) => {
    this.setState({ term });
  };

  filterPost = (items, filter) => {
    switch (filter) {
      case "rise":
        return items.filter((item) => item.onLike);
      case "MoreThen1000":
        return items.filter((item) => item.salary > 1000);
      default:
        return items;
    }
  };

  onFilterSelect = (filter) => {
    this.setState({ filter });
  };

  onSalaryChange = (id, newSalary) => {
  this.setState(({ data }) => ({
    data: data.map((item) =>
      item.id === id ? { ...item, salary: Number(newSalary) } : item
    ),
  }));
};

  render() {
    const { data, term, filter } = this.state;
    const employees = this.state.data.length;
    const increased = this.state.data.filter((item) => item.increase).length;
    const visibleData = this.filterPost(this.searchEmp(data, term), filter);
    return (
      <div className="app">
        <AppInfo employees={employees} increased={increased} />
        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <AppFilter filter={filter} onFilterSelect={this.onFilterSelect} />
        </div>
        <EmployeesList
  data={visibleData}
  onDelete={this.deleteItem}
  onToggleProp={this.onToggleProp}
  onSalaryChange={this.onSalaryChange}
/>
        <EmployeesAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
