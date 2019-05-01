import { Injectable } from "@angular/core";
import { UserSettings } from "./user-settings";
import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor(private http: HttpClient) {}

  getSubscriptionTypes(): Observable<string[]> {
    return of(["Monthly", "Annual", "Lifetime"]);
  }

  postUserSettingsForm(userSettings: UserSettings): Observable<any> {
    //putsreq - https://putsreq.com/
    return this.http.post("url", userSettings);

    //return of(userSettings);
  }
}
