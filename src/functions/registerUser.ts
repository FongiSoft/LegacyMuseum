import CryptoJS from "crypto-js";

export function hashPasswrd(password: string) {
  const SECRET:string = import.meta.env.SECRETWORD;
  // Genera el hash de la contraseña
  try {
    const hashedPassword = CryptoJS.AES.encrypt(password, SECRET);
    return hashedPassword.toString();
  } catch (error) {
    console.error("Error while creating password ", error);
    throw new Error("Error while creating password");
  };
}
export function decryptPasswrd(password: string) {
  const SECRET:string = import.meta.env.SECRETWORD;
  // Genera el hash de la contraseña
  try {
    const hashedPassword = CryptoJS.AES.decrypt(password, SECRET);
    return hashedPassword.toString(CryptoJS.enc.Utf8);

  } catch (error) {
    console.error("Error while decrypting password ", error);
    throw new Error("Error while decrypting password");
  };
}