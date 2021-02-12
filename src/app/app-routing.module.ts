import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "walkthrough",
    pathMatch: "full",
  },
  {
    path: "walkthrough",
    loadChildren: () =>
      import("./screens/walkthrough/walkthrough.module").then(
        (m) => m.WalkthroughPageModule
      ),
  },
  {
    path: "",
    redirectTo: "/public",
    pathMatch: "full",
  },
  {
    path: "public",
    loadChildren: () =>
      import("./screens/public/public.module").then((m) => m.PublicModule),
  },
  {
    path: "navigation",
    loadChildren: () =>
      import("./screens/navigation/navigation.module").then(
        (m) => m.NavigationModule
      ),
  },
  {
    path: "",
    redirectTo: "/flights",
    pathMatch: "full",
  },
  {
    path: "flights",
    loadChildren: () =>
      import("./screens/flights/flights.module").then((m) => m.FlightsModule),
  },
  {
    path: "",
    redirectTo: "/checkout",
    pathMatch: "full",
  },
  {
    path: "checkout",
    loadChildren: () =>
      import("./screens/checkout/checkout.module").then(
        (m) => m.CheckoutModule
      ),
  },
  {
    path: "",
    redirectTo: "/bookings",
    pathMatch: "full",
  },
  {
    path: "bookings",
    loadChildren: () =>
      import("./screens/bookings/bookings.module").then(
        (m) => m.BookingsModule
      ),
  },
  {
    path: "",
    redirectTo: "/cruises",
    pathMatch: "full",
  },
  {
    path: "cruises",
    loadChildren: () =>
      import("./screens/cruises/cruises.module").then((m) => m.CruisesModule),
  },
  {
    path: "",
    redirectTo: "/profile",
    pathMatch: "full",
  },
  {
    path: "profile",
    loadChildren: () =>
      import("./screens/profile/profile.module").then((m) => m.ProfileModule),
  },

  {
    path: "",
    redirectTo: "/shared",
    pathMatch: "full",
  },
  {
    path: "shared",
    loadChildren: () =>
      import("./screens/shared/shared.module").then((m) => m.SharedModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
