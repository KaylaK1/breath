// declare module "*.jpg" {
//   export default "" as string;
// }
declare module "*.png" {
  const value: any;
  export default value;
}
declare module '*.jpg' {
  const content: any;
  export default content;
}
