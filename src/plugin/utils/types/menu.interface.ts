import { choice_option } from "@/plugin/utils/types.interface";

export interface menu_option extends choice_option {
	children?: menu_option[];
}