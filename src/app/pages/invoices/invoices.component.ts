import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../../services/invoice.service';
import { ClientsService } from 'src/app/services/clients.service';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.scss']
})
export class InvoicesComponent implements OnInit {
    displayedColumns: string[] = ['number', 'name', 'hours', 'actions'];
    title = 'invoiceclient';
    invoices;
    clients;
    selectedClient;

    constructor(
        private invoiceService: InvoiceService,
        private clientsService: ClientsService,
    ) {}

    async ngOnInit() {
      this.invoices = await this.invoiceService.getAll();
      this.clients = await this.clientsService.Get().toPromise();
    }
    
    async deleteInvoice(id) {
        await this.invoiceService.deleteById(id);
        this.invoices = await this.invoiceService.getAll();
    }

    async selectClient(clientId) {
        this.selectedClient = clientId;
    }

    async addInvoice(event: Event) {
        console.log('other', event);
        if (!this.selectedClient) {
            alert('please select a client');
            return;
        }
        await this.invoiceService.addInvoice({ clientId: this.selectedClient });
        this.invoices = await this.invoiceService.getAll();
    }
}
