import Joi from "joi";

const LoginValidation = Joi.object({
  email: Joi.string().required().trim().messages({
    "any.required": "E-mail alanı boş olamaz.",
    "string.empty": "E-mail alanı boş olamaz.",
    "string.email": "Geçerli bir email adresi giriniz.",
  }),
  password: Joi.string().required().trim().min(6).max(30).messages({
    "any.required": "Şifre alanı boş olamaz.",
    "string.empty": "Şifre alanı boş olamaz.",
    "string.min": "Şifre en az 6 karakter olmalıdır.",
    "string.max": "Şifre en fazla 30 karakter olmalıdır.",
  }),
});
const RegisterValidation = Joi.object({
  email: Joi.string().required().trim().email().messages({
    "any.required": "E-mail alanı boş olamaz.",
    "string.email": "Geçerli bir email adresi giriniz.",
  }),
  password: Joi.string().required().trim().min(6).max(30).messages({
    "any.required": "Şifre alanı boş olamaz.",
    "string.min": "Şifre en az 6 karakter olmalıdır.",
    "string.max": "Şifre en fazla 30 karakter olmalıdır.",
  }),
  name: Joi.string().required().trim().min(3).max(30).messages({
    "any.required": "Ad alanı boş olamaz.",
    "string.min": "İsim en az 3 karakter olmalıdır.",
    "string.max": "İsim en fazla 30 karakter olmalıdır.",
  }),
  surname: Joi.string().required().trim().min(3).max(30).messages({
    "any.required": "Soyad alanı boş olamaz.",
    "string.min": "İsim en az 3 karakter olmalıdır.",
    "string.max": "İsim en fazla 30 karakter olmalıdır.",
  }),
  profilePic: Joi.string().messages({
    "string.empty": "İsim alanı boş olamaz.",
  }),
  role: Joi.string().required().trim().messages({
    "any.required": "Rol alanı boş olamaz.",
  }),
});
const ResetPassword = Joi.object({
  password: Joi.string().required().trim().min(6).max(30).messages({
    "any.required": "Şifre alanı boş olamaz.",
    "string.min": "Şifre en az 6 karakter olmalıdır.",
    "string.max": "Şifre en fazla 30 karakter olmalıdır.",
  }),
  passwordAgain: Joi.string().required().trim().min(6).max(30).messages({
    "any.required": "Şifre alanı boş olamaz.",
    "string.min": "Şifre en az 6 karakter olmalıdır.",
    "string.max": "Şifre en fazla 30 karakter olmalıdır.",
  }),
});
const ForgotPassword = Joi.object({
  email: Joi.string().required().trim().email().messages({
    "any.required": "E-mail alanı boş olamaz.",
    "string.email": "Geçerli bir email adresi giriniz.",
  }),
});

export { LoginValidation, RegisterValidation, ResetPassword, ForgotPassword };
