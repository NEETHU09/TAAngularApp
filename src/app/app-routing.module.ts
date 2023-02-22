import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardAdminComponent } from './components/dashboard-admin/dashboard-admin.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { LayoutComponent } from './shared/layout/layout.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent, data: { pageTitle: 'Dashboard' } },
      { path: 'dashboard-admin', component: DashboardAdminComponent, data: { pageTitle: 'Admin Dashboard' } },
      { path: 'invoice', component: InvoiceComponent, data: { pageTitle: 'Invoice' } },
    ],
  },
  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
