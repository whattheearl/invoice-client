import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IClients } from 'src/app/interfaces/Clients';
import { Observable } from 'rxjs';
import { groupBy, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(private _http: HttpClient) { }

  Get(): Observable<Array<IClients>> {
    return this._http.get<IClients[]>('/api/Clients')
            .pipe(map(clients => clients.sort((a, b) => a.companyName.localeCompare(b.companyName))));
  }

  Post(client: IClients) {
    return this._http.post('/api/Clients', client);
  }
}
