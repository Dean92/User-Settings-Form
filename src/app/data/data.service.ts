import { Injectable } from "@angular/core";
import { UserSettings } from "./user-settings";
import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor() {}

  postUserSettingsForm(userSettings: UserSettings): Observable<UserSettings> {
    return of(userSettings);
  }
}
