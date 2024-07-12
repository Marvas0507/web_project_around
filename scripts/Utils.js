export function handleEscapeKey(e, popup) {
    if (e.key === "Escape") {
      handleClosePopups(popup);
    }
  }
  
  export function handleClickOutside(e) {
    if (e.target.className === "popup popup_show") {
      handleClosePopups(e.target);
    }
  }
  
  export function handleClosePopups(popup) {
    popup.classList.remove("popup_show");
  }