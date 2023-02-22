import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InvoiceMetricsComponent } from './components/dashboard/invoice-metrics/invoice-metrics.component';
import { SourcefileTableComponent } from './components/dashboard/sourcefile-table/sourcefile-table.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { InvoicePdfComponent } from './components/invoice/invoice-pdf/invoice-pdf.component';
import { DashboardAdminComponent } from './components/dashboard-admin/dashboard-admin.component';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { AuthService } from './services/auth.service';
import { ApiService } from './services/api.service';
import { MaterialModule } from './material-ui.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    InvoiceMetricsComponent,
    SourcefileTableComponent,
    InvoiceComponent,
    InvoicePdfComponent,
    DashboardAdminComponent,
    ErrorPageComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
  ],
  providers: [AuthService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
