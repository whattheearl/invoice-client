import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { InvoiceService } from '../../services/invoice.service';

@Component({
    selector: 'app-line-item',
    templateUrl: './line-item.component.html',
    styleUrls: ['./line-item.component.scss']
})
export class LineItemComponent implements OnInit {
    @Input() lineItem: any;
    @Input() selected: string;
    @Output() selectedChange:EventEmitter<string> = new EventEmitter();
    @Output() delete:EventEmitter<string> = new EventEmitter();
    @Output() update:EventEmitter<boolean> = new EventEmitter();

    constructor(private invoiceService : InvoiceService) { }

    ngOnInit() {
    }

    async updateItem() {
        await this.invoiceService.updateLineItem(this.lineItem);
        this.selected = null;
        this.selectedChange.emit(this.selected);
        this.update.emit(true);
    }

    deleteItem() {
        this.delete.emit(this.lineItem.id);
    }
}
