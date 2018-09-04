import { GetterTree } from "vuex";
import { RootState } from "../types";
import { ProfileState } from "./types";

export const getters: GetterTree<ProfileState, RootState> = {
  fullName(state): string {
    const { user } = state;
    const name = (user && user.name) || "";
    return `${name}`;
  }
};
