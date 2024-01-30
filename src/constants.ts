export const FORM_NAMES_MAP: Record<string, string> = {
  firstname: 'Prénom',
  lastname: 'Nom',
  email: 'Adresse email',
  phone: 'Numéro de téléphone',
  address: 'Adresse domicile',
};
export const EMAIL_REGEX = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
export const PHONE_REGEX = /^\d{10}$/;
