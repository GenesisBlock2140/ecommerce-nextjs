export const removeUrlFormat = (name:string):string => {
  return name.toLocaleLowerCase().split('-').join(' ')
}