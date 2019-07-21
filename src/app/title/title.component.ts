import { Component, OnInit } from "@angular/core";
import { MainService } from "../main.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-title",
  templateUrl: "./title.component.html",
  styleUrls: ["./title.component.scss"]
})
export class TitleComponent implements OnInit {
  data = { name: "" };
  constructor(private main: MainService, private router: Router) {}

  submit() {
    this.main.name = this.data.name;
    this.router.navigate("/town");
  }
  ngOnInit() {}
}
