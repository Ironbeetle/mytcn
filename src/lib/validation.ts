import { z } from "zod";

// fnmember schema
export const fnmemberSchema = z.object({
  id: z.string().uuid().optional(),
  created: z.date().optional(),
  updated: z.date().optional(),
  birthdate: z.date(),
  first_name: z.string().min(1, "First name is required"),
  last_name: z.string().min(1, "Last name is required"),
  t_number: z.string().min(1, "T number is required"),
  gender: z.string().min(1, "Gender is required"),
  o_r_status: z.string().default("onreserve"),
  community: z.string().min(1, "Community is required"),
  contact_number: z.string().min(1, "Contact number is required"),
  option: z.string().default("none"),
  email: z.string().email("Invalid email format").optional(),
  dependents: z.number().int().min(0).default(0).optional(),
  deceased: z.boolean().default(false),
});

export const fnmemberCreateSchema = fnmemberSchema.omit({
  id: true,
  created: true,
  updated: true,
});

export const fnmemberUpdateSchema = fnmemberCreateSchema.partial();

// Barcode schema
export const barcodeSchema = z.object({
  id: z.string().uuid().optional(),
  created: z.date().optional(),
  updated: z.date().optional(),
  barcode: z.string().min(1, "Barcode is required"),
  fnmemberId: z.string().uuid("Invalid fnmember ID"),
  activated: z.boolean().default(false),
});

export const barcodeCreateSchema = barcodeSchema.omit({
  id: true,
  created: true,
  updated: true,
});

export const barcodeUpdateSchema = barcodeCreateSchema.partial();

// Household schema
export const householdSchema = z.object({
  id: z.string().uuid().optional(),
  created: z.date().optional(),
  updated: z.date().optional(),
  housenumber: z.string().default("0"),
  fnmemberId: z.string().uuid("Invalid fnmember ID"),
});

export const householdCreateSchema = householdSchema.omit({
  id: true,
  created: true,
  updated: true,
});

export const householdUpdateSchema = householdCreateSchema.partial();

// User schema
export const userSchema = z.object({
  id: z.string().optional(),
  email: z.string().email("Invalid email format"),
  first_name: z.string().min(1, "First name is required"),
  last_name: z.string().min(1, "Last name is required"),
  created: z.date().optional(),
  department: z.string().default("admin"),
});

export const userCreateSchema = userSchema.omit({
  id: true,
  created: true,
});

export const userUpdateSchema = userCreateSchema.partial();

// Session schema
export const sessionSchema = z.object({
  id: z.string().uuid().optional(),
  sessionToken: z.string().min(1, "Session token is required"),
  userId: z.string().min(1, "User ID is required"),
  expires: z.date(),
  created: z.date().optional(),
});

export const sessionCreateSchema = sessionSchema.omit({
  id: true,
  created: true,
});

// SmsLog schema
export const smsLogSchema = z.object({
  id: z.string().uuid().optional(),
  created: z.date().optional(),
  message: z.string().min(1, "Message is required"),
  recipients: z.array(z.string().email("Invalid email in recipients")),
  status: z.string().min(1, "Status is required"),
  messageIds: z.array(z.string()),
  error: z.string().optional(),
  userId: z.string().min(1, "User ID is required"),
});

export const smsLogCreateSchema = smsLogSchema.omit({
  id: true,
  created: true,
});

// EmailLog schema
export const emailLogSchema = z.object({
  id: z.string().uuid().optional(),
  created: z.date().optional(),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
  recipients: z.array(z.string().email("Invalid email in recipients")),
  status: z.string().min(1, "Status is required"),
  messageId: z.string().optional(),
  error: z.string().optional(),
  attachments: z.any().optional(), // JSON type
  userId: z.string().min(1, "User ID is required"),
});

export const emailLogCreateSchema = emailLogSchema.omit({
  id: true,
  created: true,
});

// MsgApiLog schema
export const msgApiLogSchema = z.object({
  id: z.string().uuid().optional(),
  title: z.string().min(1, "Title is required"),
  content: z.string().min(1, "Content is required"),
  priority: z.enum(["high", "medium", "low"]).default("medium"),
  type: z.string().default("notice"),
  created: z.date().optional(),
  expiryDate: z.date().optional(),
  isPublished: z.boolean().default(false),
  userId: z.string().min(1, "User ID is required"),
  date: z.date(), // Add the separate date field
  time: z.date(), // Add the separate time field
  location: z.string().min(1, "Location is required"),
});

// Update the create schema
export const msgApiLogCreateSchema = msgApiLogSchema.omit({
  id: true,
  created: true,
});

// Add a schema for the bulletin item with User relation
export const bulletinItemSchema = msgApiLogSchema.extend({
  User: userSchema.pick({
    first_name: true,
    last_name: true,
    department: true,
  }),
});

export const bulletinItemsSchema = z.array(bulletinItemSchema);

// EResponse schema
export const eResponseSchema = z.object({
  id: z.number().int().optional(),
  created: z.date().optional(),
  updated: z.date().optional(),
  fnmemberId: z.string().uuid("Invalid fnmember ID"),
  evac_destination: z.string().min(1, "Evacuation destination is required"),
  relocation_desination: z
    .string()
    .min(1, "Relocation destination is required"),
  travel_type: z.string().min(1, "Travel type is required"),
  dep_travel_date: z.date(),
  ret_travel_date: z.date(),
  dep_musterpoint: z.string().min(1, "Departure muster point is required"),
  dep_location: z.string().min(1, "Departure location is required"),
  ret_musterpoint: z.string().min(1, "Return muster point is required"),
  ret_location: z.string().min(1, "Return location is required"),
  accommodation_type: z.string().min(1, "Accommodation type is required"),
  accommodation_location: z
    .string()
    .min(1, "Accommodation location is required"),
  medical_status: z.string().min(1, "Medical status is required"),
});

export const eResponseCreateSchema = eResponseSchema.omit({
  id: true,
  created: true,
  updated: true,
});

export const eResponseUpdateSchema = eResponseCreateSchema.partial();

// EResponseTeam schema
export const eResponseTeamSchema = z.object({
  id: z.number().int().optional(),
  created: z.date().optional(),
  updated: z.date().optional(),
  userId: z.string().min(1, "User ID is required"),
});

export const eResponseTeamCreateSchema = eResponseTeamSchema.omit({
  id: true,
  created: true,
  updated: true,
});



// Export types for TypeScript
export type FnmemberInput = z.infer<typeof fnmemberCreateSchema>;
export type FnmemberUpdate = z.infer<typeof fnmemberUpdateSchema>;
export type BarcodeInput = z.infer<typeof barcodeCreateSchema>;
export type BarcodeUpdate = z.infer<typeof barcodeUpdateSchema>;
export type HouseholdInput = z.infer<typeof householdCreateSchema>;
export type HouseholdUpdate = z.infer<typeof householdUpdateSchema>;
export type UserInput = z.infer<typeof userCreateSchema>;
export type UserUpdate = z.infer<typeof userUpdateSchema>;
export type SessionInput = z.infer<typeof sessionCreateSchema>;
export type SmsLogInput = z.infer<typeof smsLogCreateSchema>;
export type EmailLogInput = z.infer<typeof emailLogCreateSchema>;
export type MsgApiLogInput = z.infer<typeof msgApiLogCreateSchema>;
export type MsgApiLogUpdate = z.infer<typeof msgApiLogSchema>;
export type EResponseInput = z.infer<typeof eResponseCreateSchema>;
export type EResponseUpdate = z.infer<typeof eResponseUpdateSchema>;
export type EResponseTeamInput = z.infer<typeof eResponseTeamCreateSchema>;
export type BulletinItem = z.infer<typeof bulletinItemSchema>;
export type BulletinItems = z.infer<typeof bulletinItemsSchema>;