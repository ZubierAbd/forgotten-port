import { Component, OnInit } from "@angular/core";
import { MainService } from "../main.service";
@Component({
  selector: "app-town-square",
  templateUrl: "./town-square.component.html",
  styleUrls: ["./town-square.component.scss"]
})
export class TownSquareComponent implements OnInit {
  constructor(private main: MainService) {}
  name = this.main.name;
  firstTextFlag = true;
  secondTextFlag = false;
  changeFlag() {
    this.firstTextFlag = false;
  }
  firstText =
    "You don’t know why you decided to stop at this sleepy port as you are making your way back. Perhaps it reminded you of someplace similar you had attended with your grandfather a long time ago. It was his funeral that you are returning from - you remember the flowers, you remember seeing your father break down in tears, you remember wanting to reach out to him but unable to. You remember getting out of there as fast as possible - the majority of the time you spent smoking with your relatives. You remember leaving. ";

  secondText =
    "The drive down the coast wasn’t so bad but it was long and you find yourself tired out, your eyelids heavy and drooping. A look out across the horizon tells you that a storm is coming and you don’t want to risk it. You don’t want anymore death in your family. You drive down the narrow streets of the city and find that there is no one - the streets are empty, the miles are long and you find a hotel in front of you that looks open. ";
  ngOnInit() {}
}
