export interface IInvoice {
    id: string;
    clientId: string;
    client: any;
    invoiceNumber: number;
    sentTime: Date;
    paymentRecievedTime: Date;
    lineItems: any;
}

