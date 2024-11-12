export const selectorsAccountPage = {
  accountCreated: "Account Created!",
  continue: '[data-qa="continue-button"]',
  usernameLogged: (username) => `Logged in as ${username}`,
  deleteAccount: 'a[href="/delete_account"] .fa.fa-trash-o',
  accountDeleted: "Account Deleted!",
};
