import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ClientsAddDialogComponent } from 'src/app/components/clients-add-dialog/clients-add-dialog.component';
import { ClientsService } from 'src/app/services/clients.service';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-clients',
    templateUrl: './clients.component.html',
    styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit, OnDestroy {
    displayedColumns: string[] = ['companyName', 'billingEmail', 'address'];
    clients$ = this.clientsService.Get();
    addClientsClick$ = new Subject();

    constructor(
        public dialog: MatDialog,
        private clientsService: ClientsService,
    ) { }

    ngOnInit(): void {
        this.onAddClients();
    }

    ngOnDestroy() {
        this.addClientsClick$.unsubscribe();
    }

    onAddClients() {
        this.addClientsClick$.subscribe(() => {
            const dialogRef = this.dialog.open(ClientsAddDialogComponent, {
                width: '600px',
                // data: {name: this.name, animal: this.animal}
            });

            dialogRef.afterClosed().subscribe(result => {
                console.log('The dialog was closed');
                // this.animal = result;
            });
        });
    }
}
