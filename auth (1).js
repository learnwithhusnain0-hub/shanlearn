// ============================================================
// AUTHENTICATION FUNCTIONS
// ============================================================

// Check if user is signed in
function isUserSignedIn() {
  return auth.currentUser !== null;
}

// Get current user
function getCurrentUser() {
  return auth.currentUser;
}

// Sign out
function signOutUser() {
  return auth.signOut();
}

// Sign in with Google popup
function signInWithGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  return auth.signInWithPopup(provider);
}

// Sign in with Google redirect
function signInWithGoogleRedirect() {
  const provider = new firebase.auth.GoogleAuthProvider();
  return auth.signInWithRedirect(provider);
}

// Get ID token
async function getIdToken() {
  const user = auth.currentUser;
  if (user) {
    return await user.getIdToken();
  }
  return null;
}

// Auth state observer
function onAuthStateChanged(callback) {
  return auth.onAuthStateChanged(callback);
}

// Export functions (if using modules)
// export { 
//   isUserSignedIn, 
//   getCurrentUser, 
//   signOutUser, 
//   signInWithGoogle,
//   signInWithGoogleRedirect,
//   getIdToken,
//   onAuthStateChanged
// };
