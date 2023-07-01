import { collection, getDocs } from 'firebase/firestore';
import { auth, firestore } from "../Components/SignInButton";

const checkCode = async (code: string) => { 
  const lobbyRef = firestore.collection("gameLobby");
  const query = lobbyRef.where("code", "==", code);
  const querySnapshot = await query.get();
  if (querySnapshot.empty) {
    return false;
  }
  return true;
};

export const randomCode = async () => {
  let code = '';
  const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const codeLength = 6;

  for (let i = 0; i < codeLength; i++) {
    code += alpha.charAt(Math.floor(Math.random() * alpha.length));
  }
  await checkCode(code).then((res) => {if (res){ 
    randomCode();
  }});

  return code;
};

