import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { TitleComponent } from "./title/title.component";

const routes: Routes = [
  { path: "title", component: TitleComponent },
  { path: "", redirectTo: "/title", pathMatch: "full" }
];
@NgModule({
  declarations: [AppComponent, TitleComponent],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
