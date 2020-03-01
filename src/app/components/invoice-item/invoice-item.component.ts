import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { InvoiceService } from '../../services/invoice.service';
@Component({
    selector: 'app-invoice-item',
    templateUrl: './invoice-item.component.html',
    styleUrls: ['./invoice-item.component.scss']
})
export class InvoiceItemComponent implements OnInit {
    @Input() invoiceItem: any;
    @Output() delete:EventEmitter<boolean> = new EventEmitter();

    constructor(private invoiceService : InvoiceService) { }

    ngOnInit() {
    }

    deleteItem($event) {
        $event.stopPropagation();
        $event.preventDefault();
        this.delete.emit(true);
    }

}
