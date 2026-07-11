import * as yup from "yup";
export const receiptSchema = yup.object({
    payBy: yup.string().oneOf(["UPI", "BANK_TRANSFER"]).required("Please select payment method"),
    amount: yup.number().typeError("Amount is required").required("Amount is required").min(100, "Minimum amount is $100").max(1000, "Maximum amount is $1000"),
    receipt: yup.mixed<FileList>().test("required", "Receipt image is required", (value) => value && value.length > 0),
});

export const settlementFundSchema = yup.object({
  payType: yup.string().oneOf(["add_val", "less_val"]).required("Please select transaction type"),
  amount: yup.number().transform((value, originalValue) => originalValue === "" ? undefined : value)
    .typeError("Amount is required").required("Amount is required").min(100, "Minimum amount is $100").max(1000, "Maximum amount is $1000"),
});

export const accountSchema = yup.object({
  bankName: yup.string().trim().required("Bank name is required").min(3, "Bank name must be at least 3 characters").max(100, "Bank name cannot exceed 100 characters"),

  holderName: yup.string().trim().required("Account holder name is required").matches(/^[a-zA-Z\s]+$/,  "Account holder name can contain only letters and spaces").min(3, "Account holder name must be at least 3 characters").max(100, "Account holder name cannot exceed 100 characters"),

  accNo: yup.string().required("Account number is required").matches(/^[0-9]{9,18}$/,  "Account number must contain 9 to 18 digits"),

  ifscCode: yup.string().required("IFSC code is required").matches(/^[A-Z]{4}0[A-Z0-9]{6}$/,  "Please enter a valid IFSC code (e.g. SBIN0001234)"),

  upi: yup.string().nullable().notRequired().test("upi-validation",  "Please enter a valid UPI ID (e.g. user@paytm)",  (value) => !value || /^[a-zA-Z0-9.\-_]{2,}@[a-zA-Z]{2,}$/.test(value)),
  note: yup.string().max(500, "Notes cannot exceed 500 characters").nullable(),
  qr: yup.mixed().nullable(),
});



export const withdrawSchema = yup.object({
  payType: yup.string().oneOf(["India local banks", "PayPal", "PAYTM","Stripe", "Razorpay"]).required("Please select transaction type"),
  amount: yup.number().transform((value, originalValue) => originalValue === "" ? undefined : value)
    .typeError("Amount is required").required("Amount is required").min(10, "Minimum amount is $10").max(1000, "Maximum amount is $1000"),
});

export const withdrawNewSchema = yup.object({
  payType: yup.string().oneOf(["onlineBank", "binance", "cryptocurrency"]).required("Please select transaction type"),
  amount: yup.number().transform((value, originalValue) => originalValue === "" ? undefined : value)
    .typeError("Amount is required").required("Amount is required").min(15, "Minimum amount is $15").max(1000, "Maximum amount is $1000"),
});


export const credentialSchema = yup.object({
  username: yup.string().required("Username is required").min(4, "Minimum 4 characters"),
  password: yup.string().required("Password is required").min(6, "Minimum 6 characters"),
});


export const offerSchema = yup.object({
  offerNote: yup.string().required("Offer note is required"),
  amount: yup.number().typeError("Amount is required").positive("Amount must be greater than 0").required(),
  userType: yup.string().required(),
  userId: yup.array().when("userType", {is: "selected", then: (schema) => schema.min(1, "Select at least one user"), otherwise: (schema) => schema.optional(), }),
  offerDate: yup.string().required("Offer date is required"),
  status: yup.number().required(),
});

export const changePasswordSchema = yup.object({
  currentPassword: yup.string().required("Current password is required"),
  newPassword: yup.string().min(6, "Password must be at least 6 characters").required("New password is required"),
  confirmPassword: yup.string().oneOf([yup.ref("newPassword")], "Passwords do not match").required("Confirm password is required"),
});


export const profileUpdateSchema = yup.object({
  firstName: yup.string().required("First name is required").min(2, "Minimum 2 characters"),
  lastName: yup.string().required("Last name is required").min(2, "Minimum 2 characters"),
  phone: yup.string().required("Phone number is required").matches(/^[0-9]{10}$/, "Phone number must be 10 digits"),
  address: yup.string().required("Address is required"),
  city: yup.string().required("City is required"),
  state: yup.string().required("State is required"),
  country: yup.string().required("Country is required"),
  zip: yup.string().required("Zip code is required").matches(/^[0-9]{5,6}$/, "Invalid zip code"),
});

export const registerSchema = yup.object({
  firstName: yup.string().required("First name is required").min(2, "Minimum 2 characters"),
  lastName: yup.string().required("Last name is required").min(2, "Minimum 2 characters"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup.string().required("Phone number is required").matches(/^[0-9]{10}$/, "Phone number must be 10 digits"),
  password: yup.string().min(8, "Password must be at least 8 characters").required("Password is required"),
  confirmPassword: yup.string().oneOf([yup.ref("password")], "Passwords do not match").required("Confirm password is required"),
});

export const loginSchema = yup.object({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required").min(8, "Password must be at least 8 characters"),
});


export const createTicketSchema = yup.object({
  // token: yup
  //   .string()
  //   .required("Ticket is required")
  //   .min(5, "Minimum 5 characters"),

  subject: yup
    .string()
    .required("Subject is required")
    .min(5, "Minimum 5 characters"),

  message: yup
    .string()
    .required("Message is required")
    .min(10, "Minimum 10 characters"),
});

// export const createTicketSchema = yup.object({
//   subject: yup.string().required("Subject is required").min(5, "Minimum 5 characters"),
//   message: yup.string().required("Message is required").min(10, "Minimum 10 characters"),
// });

export const replyTicketSchema = yup.object({
  message: yup.string().required("Reply is required").min(2, "Minimum 2 characters"),
});