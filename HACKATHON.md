# AgentGuard - NEAR Hackathon Submission

## Track
AI Security & Defense

## Problem
AI agents handling crypto wallets can make errors, get hacked, or overspend. There needs to be a hardcoded safeguard to limit their financial actions.

## Solution
AgentGuard is a smart contract that acts as a financial firewall for AI agents. It enforces:
- Maximum spend per transaction
- Daily spending limits
- Whitelisted recipient addresses

## How to Test (Do X, See Y)
1. Do: Agent requests a $3 payment to a whitelisted address.
   See: System returns Auto-Approved: Payment successful.

2. Do: Agent requests a $20 payment.
   See: System returns Auto-Rejected: Amount exceeds the maximum per transaction limit.

3. Do: Agent requests a $4 payment to an unknown address.
   See: System returns Human Approval Required: Unrecognized destination address.

## Technologies Used
- NEAR SDK (TypeScript)
- NEAR Testnet
