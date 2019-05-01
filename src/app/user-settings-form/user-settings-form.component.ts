import { Component, OnInit } from "@angular/core";
import { UserSettings } from "../data/user-settings";

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
  constructor() {}
  ngOnInit() {}

  onSubmit(form: NgForm) {
    console.log("in onSubmit: ", form.valid);
  }
}
