import { IRepository } from "@hooks/repositories.hooks";

export function splitFullName(full_name: string) {
  const fullNameSplited = full_name.split("/");


  return fullNameSplited
}


export function deleteDuplicates(arrayOriginal: Array<IRepository>, itensParaEliminar: Array<IRepository>, propriedade: string) {
  return arrayOriginal.filter(objOriginal =>
    !itensParaEliminar.some(objParaEliminar =>
      objOriginal[propriedade] === objParaEliminar[propriedade]));
}