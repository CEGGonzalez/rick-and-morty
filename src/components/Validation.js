
const validation = (data) => {
   const emailRegexp = new RegExp(/\S+@\S+\.\S+/)
   const passwordRegexp = new RegExp(/\d/)
  let errors = {}

  if(!emailRegexp.test(data.email)) {
    errors.email = 'Debe de ingresar un email valido'
  }
  if(!data.email) {
    errors.emailVacio = 'Debes ingresar un email'
  }
  if(data.email.length >= 35) {
    errors.characters = 'Debe ingresar menos de 35 caracteres'
  }
  if(!passwordRegexp.test(data.password)) {
    errors.password = 'Debe combinar letras y numeros'
  }
  if(data.password.length < 6 || data.password.length > 10 ) {
    errors.longitud = 'Su password excede la longitud'
  }
  return errors;  
}
export default validation;