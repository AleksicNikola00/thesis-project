const LocalStorageItem = {
  DISPLAY_MODE: "display_mode",
};

const localStorageUtil = {
  /**
   * @param {"dark" | "light"} mode sets display mode
   */
  setMode(mode) {
    localStorage.setItem(LocalStorageItem.DISPLAY_MODE, mode);
  },
  /**
   * @return {"dark" | "light"} returns  display mode
   */
  getMode() {
    return localStorage.getItem(LocalStorageItem.DISPLAY_MODE) ?? "light";
  },
};

export default localStorageUtil;
