import { Account, RpcProvider } from "starknet";

export type BurnerStorage = {
    [address: string]: {
        privateKey: string;
        publicKey: string;
        deployTx: string;
        active: boolean;
    };
};

export type Burner = {
    address: string;
    active: boolean;
};

export interface BurnerManagerOptions {
    masterAccount: Account;
    accountClassHash: string;
    rpcProvider: RpcProvider;
}

export interface BurnerAccount {
    create: () => void;
    list: () => Burner[];
    get: (address: string) => void;
    account: Account;
    select: (address: string) => void;
    isDeploying: boolean;
    clear: () => void;
    copyToClipboard: () => Promise<void>;
    applyFromClipboard: () => Promise<void>;
}
