export  const buttonorder = (first, second) =>{
    first?.classList.remove("btnorderprioripressed");
    second.classList.add("btnorderprioripressed");
}
export const fecha = (nota)=>{
    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Setiembre", "Octubre", "Noviembre", "Diciembre"];
      const fechita = new Date(nota.date);
      const mes = meses[fechita.getMonth()];
      const año = fechita.getFullYear();
      const dia = fechita.getDate();
      return `${dia}/${mes}/${año}`;
  }
  