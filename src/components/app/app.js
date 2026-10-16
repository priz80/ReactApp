import React from "react";
import PropTypes from "prop-types";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import "./app.css";

// Вынесенные неизменяемые данные
const INITIAL_DATA = [
  { name: "Igor", salary: 800, increase: false, id: 1 },
  { name: "Alex", salary: 3000, increase: true, id: 2 },
  { name: "Serg", salary: 15000, increase: false, id: 3 },
];

function App() {
  return (
    <div className="app">
      <AppInfo />

      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>

      <EmployeesList data={INITIAL_DATA} />
      <EmployeesAddForm />
    </div>
  );
}

// PropTypes для валидации (если будут пропсы)
App.propTypes = {};

export default App;
