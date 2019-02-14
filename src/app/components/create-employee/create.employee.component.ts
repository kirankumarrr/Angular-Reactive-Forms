import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
@Component({
  selector: "create-employee",
  templateUrl: "./create.employee.component.html",
  styleUrls: ["./create.employee.component.css"]
})
export class CreateEmployeeComponent implements OnInit {
  employeeForm: FormGroup;
  constructor() {}
  ngOnInit() {
    this.employeeForm = new FormGroup({
      fullName: new FormControl(),
      email: new FormControl()
    });
  }
  OnSubmit() {
    console.log(this.employeeForm);
  }
}
