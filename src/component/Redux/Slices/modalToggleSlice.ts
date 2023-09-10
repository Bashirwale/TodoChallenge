import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface ModalToggleState {
  modalToggle: any;
  isAddModal: boolean;
  isEditModal: boolean;
  isTodoModal: boolean;
  isCalenderModal: boolean;
}

const initialState: ModalToggleState = {
  isAddModal: false,
  isEditModal: false,
  isTodoModal: false,
  isCalenderModal: false,
  modalToggle: undefined,
};

const modalToggleSlice = createSlice({
  name: "modalToggle",
  initialState,
  reducers: {
    openAddModal: (state) => {
      state.isAddModal = true;
      state.isEditModal = false;
      state.isTodoModal = false;
      state.isCalenderModal = false;
    },
    openTodoModal: (state) => {
      state.isAddModal = false;
      state.isEditModal = false;
      state.isTodoModal = true;
      state.isCalenderModal = false;
    },
    openEditModal: (state) => {
      state.isAddModal = false;
      state.isEditModal = true;
      state.isTodoModal = false;
      state.isCalenderModal = false;
    },
    openCalenderModal: (state) => {
      state.isAddModal = false;
      state.isEditModal = false;
      state.isTodoModal = false;
      state.isCalenderModal = true;
    },
    closeAllModals: (state) => {
      state.isAddModal = false;
      state.isEditModal = false;
      state.isTodoModal = false;
      state.isCalenderModal = false;
    },
  },
});

export const {
  openAddModal,
  openTodoModal,
  openEditModal,
  openCalenderModal,
  closeAllModals,
} = modalToggleSlice.actions;

export default modalToggleSlice.reducer;
export const selectedModalToggle = (state: RootState) =>
  state.modalToggle.modalToggle;
