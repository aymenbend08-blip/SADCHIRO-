export type ProductStatus = "live" | "in-development" | "coming-soon";
export interface Product { slug:string; name:string; tagline:string; description:string; status:ProductStatus; statusLabel:string; href:string; }
export const products:Product[]=[
 {slug:"suma",name:"SUMA",tagline:"Simplifying everyday commerce",description:"A practical technology platform for stores, products, pricing, barcodes and connected daily operations.",status:"live",statusLabel:"Available",href:"/products/suma"},
 {slug:"debrah",name:"Debrah",tagline:"A new product taking shape",description:"A SADCHIRO digital product in development, being shaped around a real need before its final launch.",status:"in-development",statusLabel:"In development",href:"/products/debrah"}
];
export const getProduct=(slug:string)=>products.find(product=>product.slug===slug);
