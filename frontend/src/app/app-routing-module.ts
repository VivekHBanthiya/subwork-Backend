import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "road",
    loadChildren: () =>
      import("./features/scope/road/road-module").then((m) => m.RoadModule),
  },
  {
    path: "bridge",
    loadChildren: () =>
      import("./features/scope/bridge/bridge-module").then(
        (m) => m.BridgeModule,
      ),
  },
  {
    path: "building",
    loadChildren: () =>
      import("./features/scope/building/building-module").then(
        (m) => m.BuildingModule,
      ),
  },
  {
    path: "others",
    loadChildren: () =>
      import("./features/scope/others/others-module").then(
        (m) => m.OthersModule,
      ),
  },
  {
    path: "dropdown-master",
    loadChildren: () =>
      import("./features/scope/dropdown-admin/dropdown-admin-module").then(
        (m) => m.DropdownAdminModule,
      ),
  },
  {
    path: "scope",
    loadChildren: () =>
      import("./features/scope/scope-module").then((m) => m.ScopeModule),
  },
  { path: "", redirectTo: "road", pathMatch: "full" },
  { path: "**", redirectTo: "road" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
