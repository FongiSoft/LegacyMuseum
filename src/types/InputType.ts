// src/types/types.ts
export type InputType = "checkbox" | "color" | "date" | "datetime-local" | "email" | "file" | "hidden" | "month" | "number" | "password" | "search" | "tel" | "text" | "time" | "url" | "week";

export type InputField = {
  title: string;
  type: InputType;
  isRequired: boolean;
  placeholder?: string;
}

export type InputFieldArr = {
	name: string;
	label: string;
	type: InputType;
	isRequired: boolean;
	placeholder?: string;
	value?: string | number;
};