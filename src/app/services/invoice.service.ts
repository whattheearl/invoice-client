import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IInvoice } from 'src/app/interfaces/Invoices';
@Injectable({
    providedIn: 'root'
})
export class InvoiceService {

    url = 'api/invoices';
    constructor(
        private http: HttpClient,
    ) { }

    getAll() {
        return this.http.get<IInvoice[]>(this.url)
                .pipe(
                    map((invoices) => invoices.sort((a, b) => b.invoiceNumber - a.invoiceNumber))
                )
                .toPromise();
    }

    getById(id) {
        return this.http.get(`${this.url}/${id}`).toPromise();
    }

    async updateInvoice(invoice) {
        return this.http.put(`api/Invoices/${invoice.id}`, invoice).toPromise();
    }

    addInvoice(clientId) {
        return this.http.post(`${this.url}`, clientId).toPromise();
    }

    deleteById(id) {
        return this.http.delete(`${this.url}/${id}`).toPromise();
    }

    addLineItem(id) {
        return this.http.post(`${this.url}/${id}/lineitems`, {}).toPromise();
    }

    updateLineItem(item) {
        return this.http.put(`api/lineitems/${item.id}`, item).toPromise();
    }

    deleteLineItem(id) {
        return this.http.delete(`api/lineitems/${id}`).toPromise();
    }

    // todo: set up back end to know UserCompany by sub
    getClients() {
        return this.http.get(`api/Clients`).toPromise();
    }


}
