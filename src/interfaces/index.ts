
// ==========================================
// User
// ==========================================
export enum UserType { USER = 0, ADMIN = 1, }
export enum UserStatus { ACTIVE = 1, BLOCKED = 2, UNVERIFIED = 3, }
export interface UserData {
     _id?: string; accType: string; wallet: number; appPass?: string; userType?: UserType; status?: UserStatus; profile?: string; doc?: string; upi?: string; firstName: string; lastName: string; email: string; username: string; password: string; dob?: Date; phone: string; address:string; zip:string; city?: string; state?: string; country?: string; app_username?: string; app_password?: string; firstDeposit?: number; createdAt?: Date; updatedAt?: Date;
}



export interface ProfileFormData { firstName: string; lastName: string; email: string; phone: string; address: string; city: string; state: string; country: string; zip: string; }

export interface InitUserData {
    users: UserData[];
    user: UserData | null;
    loading: boolean;
    error: string;
    message: string;
}

export const initialState: InitUserData = {
    users: [],
    user: null,
    loading: false,
    error: "",
    message: "",
};


// ==========================================
// Receipt
// ==========================================
export enum PayByStatus { UPI= "UPI", BANK= "BANK_TRANSFER",}
export enum ReceiptStatus { PENDING = 0, APPROVED = 1, REJECTED = 2,}
export interface ReceiptData { _id?: string; amount: number; receipt: string; status?: ReceiptStatus; userId: string; accId: string; payBy: string; createdAt?: Date; updatedAt?: Date; }
interface InitReceiptData{
    receipts:ReceiptData[],
    receipt:ReceiptData | null,
    loading:boolean,
    error:string,
    message:string
}

export const initialReceiptState: InitReceiptData = {
    receipts: [],
    receipt: null,
    loading: false,
    error: "",
    message: "",
};

// ==========================================
// Deposit
// ==========================================
export enum DepositPayType { ADD_VAL = "add_val", LESS_VAL = "less_val" }
export interface DeipositSettlementFormPayload { userId:string; amount:number; payType:string;}

export interface DepositData { _id?: string; userId: string; crAmount: number; preAmount: number; finalAmount?:number; payType: DepositPayType; createdAt?: Date; updatedAt?: Date; }
interface InitDepositData{
    deposits:DepositData[],
    deposit:DepositData | null,
    loading:boolean,
    error:string,
    message:string
}

export const initialDepositState: InitDepositData = {
    deposits: [],
    deposit: null,
    loading: false,
    error: "",
    message: "",
};
// ==========================================
// Account
// ==========================================
export enum AccountStatus { PENDING = 0, ACTIVE = 1, REJECTED = 2, }
export interface AccountData { _id: string; userId: string; upi: string; bankName: string; holderName: string; accNo: string; ifscCode: string; qr?: string; note?: string; status?: AccountStatus; createdAt?: Date; updatedAt?: Date; }
interface InitAccountData{
    accounts:AccountData[],
    account:AccountData | null,
    loading:boolean,
    error:string,
    message:string
}

export const initialAccountState: InitAccountData = {
    accounts: [],
    account: null,
    loading: false,
    error: "",
    message: "",
};

// ==========================================
// Withdraw
// ==========================================
export interface WithdrawFormPayload { userId:string; amount:number; payType:string;}
export enum WithdrawPayType { BANK = "India local banks", PAYPAL = "PayPal", PAYTM = "PAYTM", STRIPE = "Stripe", RAZORPAY = "Razorpay", }
export enum WithdrawStatus { PENDING = 0, COMPLETE = 1, REJECT = 2, }
export interface WithdrawData { _id?: string; userId: string; amount: number; balance: number; payType: string; status?: WithdrawStatus; createdAt?: Date; updatedAt?: Date; }

interface InitWithdrawData{
    withdraws:WithdrawData[],
    withdraw:WithdrawData | null,
    loading:boolean,
    error:string,
    message:string
}

export const initialWithdrawState: InitWithdrawData = {
    withdraws: [],
    withdraw: null,
    loading: false,
    error: "",
    message: "",
};


export interface GenAppPayload { userId:string; data:FormPayloadData; }
export interface FormPayloadData {username:string; password:string; server:string; }
interface InitGenAppData{
    appPassGens:FormPayloadData[],
    appPassGen:FormPayloadData | null,
    loading:boolean,
    error:string,
    message:string
}

export const initialGenAppState: InitGenAppData = {
    appPassGens: [],
    appPassGen: null,
    loading: false,
    error: "",
    message: "",
};


export interface ChangePasswordPayload {
  currentPassword: string;
  newPassword: string;
}

export interface ProfileFormData { firstName: string; lastName: string; email: string; phone: string; address: string; city: string; state: string; country: string; zip: string; }



// ==========================================
// Ticket Reply
// ==========================================
export interface TicketReplyData { _id?: string; userId: string; ticketId: string; message: string; createdAt?: Date; updatedAt?: Date; }


// interfaces/ticket.ts

// export interface TicketFormData { subject: string; message: string; }
// export interface TicketReplyData { message: string; }
// export interface Ticket {
//   _id: string; userId: string; subject: string; message: string; status: "open" | "pending" | "closed";
//   replies: { sender: string; message: string; createdAt: string;
//   }[];

//   createdAt: string;
// }