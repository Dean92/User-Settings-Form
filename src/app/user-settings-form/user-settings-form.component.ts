import { Component, OnInit } from "@angular/core";

import { UserSettings } from "../data/user-settings";
import {NgForm, NgModel } from "@angular/forms";
import { DataService } from "../data/data.service";

@Component({
  selector: "app-user-settings-form",
  templateUrl: "./user-settings-form.component.html",
  styleUrls: ["./user-settings-form.component.css"]
})
export class UserSettingsFormComponent implements OnInit {
  originalUserSettings: UserSettings = {
    name: null,
    emailOffers: true,
    interfaceStyle: "dark",
    subscriptionType: "Annual",
    notes: "here are some notes..."
  };

  //Makes a copy using the spread operator.
  //UserSettings : UserSettings = { ...this.originalUserSettings };
  constructor(private dataService: DataService) {}
  ngOnInit() {}

  onBlur(field: NgModel) {
    console.log("in onBlur: ", field.valid);
  }

  onSubmit(form: NgForm) {
    console.log("in onSubmit: ", form.valid);
  }
}
