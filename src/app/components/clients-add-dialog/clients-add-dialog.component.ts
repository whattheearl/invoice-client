import { Component, OnInit } from '@angular/core';
import { ClientsService } from 'src/app/services/clients.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IClients } from 'src/app/interfaces/Clients';
import { first } from 'rxjs/operators';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-clients-add-dialog',
    templateUrl: './clients-add-dialog.component.html',
    styleUrls: ['./clients-add-dialog.component.scss']
})
export class ClientsAddDialogComponent implements OnInit {
    form: FormGroup;

    constructor(
        private clientsService: ClientsService,
        private fb: FormBuilder,
        private dialogRef: MatDialogRef<ClientsAddDialogComponent>
    ) { }

    ngOnInit(): void {
        this.form = this.fb.group({
            companyName: ['', Validators.required],
            billingEmail: ['', [Validators.email, Validators.required]],
            address: [''],
            hourlyRate: [45],
        });
    }

    onSave() {
        const newClient = {
            ...this.form.value
        } as IClients;
        this.clientsService.Post(newClient)
            .pipe(first())
            .subscribe(res => {
                this.dialogRef.close();
            });
    }
}
