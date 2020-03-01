import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InvoiceService } from '../../services/invoice.service';

@Component({
  selector: 'app-invoices-detail',
  templateUrl: './invoices-detail.component.html',
  styleUrls: ['./invoices-detail.component.scss']
})
export class InvoicesDetailComponent implements OnInit {

    invoice = null;
    client = null;
    clients = null;
    billableHours = 0;
    id = null;
    selectedItemId = null;

    constructor(
        private invoiceService: InvoiceService,
        private route : ActivatedRoute,
    ) { }

    async ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id');
        this.loadInvoice();
        this.loadClients();
    }

    async loadInvoice() {
        this.invoice = await this.invoiceService.getById(this.id);
        this.client = this.invoice.client;
        this.calculateBillableHours();
    }

    calculateBillableHours() {
        let lineItems = this.invoice.lineItems;
        this.billableHours = lineItems.map(item => item.minutes).reduce((a,b)=>a+b,0);
    }

    async loadClients() {
        this.clients = await this.invoiceService.getClients();
    }

    async addLineItem() {
        await this.invoiceService.addLineItem(this.id);
        await this.loadInvoice();
    }

    async deleteLineItem(lineItemId) {
        await this.invoiceService.deleteLineItem(lineItemId);
        await this.loadInvoice();
    }

    selectItem(id) {
        this.selectedItemId = id;
    }

    async selectClient(clientId) {
        let c = this.clients.filter(c => c.id == clientId);
        let invoice = {
            ...this.invoice,
            clientId: clientId,
            client: c[0],
        };
        await this.invoiceService.updateInvoice(invoice);
        await this.loadInvoice();
    }
}
