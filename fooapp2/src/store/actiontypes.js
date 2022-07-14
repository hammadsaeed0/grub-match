const manageActionType = type => {
    return {
      start: type + '_Start',
      success: type + '_Success',
      failed: type + '_Failed',
    };
  };
  
  export const types = {
   
  
    // ==================== TOAST ======================//
    SHOW_TOAST :manageActionType('SHOW_TOAST'),
    HIDE_TOAST: manageActionType('HIDE_TOAST'),  
  };
  