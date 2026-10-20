import { NearBindgen, call, view, UnorderedSet } from 'near-sdk-js';

@NearBindgen({})
export class AgentGuard {
    max_per_tx: number = 5;
    max_daily: number = 10;
    daily_spent: number = 0;
    whitelist: UnorderedSet<string> = new UnorderedSet<string>('w');

    @call({})
    add_to_whitelist({ account_id }: { account_id: string }) {
        this.whitelist.set(account_id);
    }

    @call({})
    request_payment({ amount, to_account }: { amount: number, to_account: string }): string {
        if (amount > this.max_per_tx) {
            return 'Auto-Rejected: Amount exceeds the maximum per transaction limit.';
        }

        if (this.daily_spent + amount > this.max_daily) {
            return 'Auto-Rejected: Daily spending limit reached.';
        }

        if (!this.whitelist.contains(to_account)) {
            return 'Human Approval Required: Unrecognized destination address.';
        }

        this.daily_spent += amount;
        return 'Auto-Approved: Payment successful.';
    }

    @view({})
    get_status(): string {
        return `Total spent today: ${this.daily_spent} out of ${this.max_daily}`;
    }
}
