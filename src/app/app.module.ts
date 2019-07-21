import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { TitleComponent } from "./title/title.component";
import { TownSquareComponent } from "./town-square/town-square.component";

const routes: Routes = [
  { path: "title", component: TitleComponent },
  { path: "town", component: TownSquareComponent },
  { path: "", redirectTo: "/title", pathMatch: "full" }
];
@NgModule({
  declarations: [AppComponent, TitleComponent, TownSquareComponent],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
