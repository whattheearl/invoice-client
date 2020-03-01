import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvoicesDetailComponent } from './pages/invoices-detail/invoices-detail.component';
import { InvoicesComponent } from './pages/invoices/invoices.component';
import { ClientsComponent } from './pages/clients/clients.component';


const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'Invoices'},
    { path: 'Invoices', component: InvoicesComponent},
    { path: 'Invoices/:id', pathMatch: 'full', component: InvoicesDetailComponent},
    { path: 'Clients', component: ClientsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
