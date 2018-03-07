export class Policy {
    id: string;
    amountInsured: number;
    email: string;
    inceptionDate: Date;
    installmentPayment: boolean;
    clientId: string;
}

export class Policies {
    policies: Policy[];
}
