export const productUrlFormat = (name:string):string => {
  return name.toLocaleLowerCase().split(' ').join('-')
}