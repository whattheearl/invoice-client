import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { InvoiceService } from './services/invoice.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LineItemComponent } from './components/line-item/line-item.component';
import { InvoicesComponent } from './pages/invoices/invoices.component';
import { InvoicesDetailComponent } from './pages/invoices-detail/invoices-detail.component';
import { InvoiceItemComponent } from './components/invoice-item/invoice-item.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ClientsAddDialogComponent } from './components/clients-add-dialog/clients-add-dialog.component';


@NgModule({
    declarations: [
        AppComponent,
        LineItemComponent,
        InvoicesComponent,
        InvoicesDetailComponent,
        InvoiceItemComponent,
        ClientsComponent,
        ClientsAddDialogComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatListModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        MatIconModule,
        MatTableModule,
        MatSidenavModule,
        MatSelectModule,
        FlexLayoutModule,
        MatDialogModule,
        MatToolbarModule,
        MatButtonModule,
        ReactiveFormsModule,
        FormsModule
    ],
    providers: [InvoiceService],
    bootstrap: [AppComponent]
})
export class AppModule { }
