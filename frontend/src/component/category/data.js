import Cat1 from  '../images/cat1.jpg';
import Cat2 from  '../images/cat2.jpg';
import Cat3 from  '../images/cat3.jpg';
import Cat4 from  '../images/cat4.webp';
import Img1 from '../images/img1.webp';
import Img2 from '../images/Img2.webp';
import Img3 from '../images/Img3.webp';
import Img4 from '../images/Img4.webp';
import Cart1 from '../images/cart1.webp';
import Cart2 from '../images/cart2.jpg';
import Cart3 from '../images/cart3.webp';
import Cart4 from '../images/cart4.webp';
import Single1 from '../images/single1.webp';
import Single2 from '../images/single2.webp';
import Single3 from '../images/single3.webp';
import Single4 from '../images/single4.webp';
import Single5 from '../images/single5.webp';

import violet1 from '../images/single2i.webp';
import violet2 from '../images/single2ii.webp';
import violet3 from '../images/single2iii.webp';
import violet4 from '../images/single2iv.webp';
import violet5 from '../images/single2v.webp';
import violet6 from '../images/single2vi.webp';
import violet7 from '../images/single2vii.webp';

import bg1 from '../images/bg1.webp';
import bg2 from '../images/bg2.webp';
import bg3 from '../images/bg3.webp';
import bg4 from '../images/bg4.webp';
import bg5 from '../images/bg5.webp';
import bg6 from '../images/bg6.webp';


import yell1 from '../images/yell1.webp';
import yell2 from '../images/yell2.webp';
import yell3 from '../images/yell3.webp';
import yell4 from '../images/yell4.webp';
import yell5 from '../images/yell5.webp';




export const images = [
  {
    id: 12,
    src:Cat1,
    alt: "Image 1",
    text: "JACQUARD SUIT SETS"
  },
  {
    id: 22,
    src:Cat2,
    alt: "Image 2",
    text: "ANARKALI SUIT SETS"
  },
  {
    id: 32,
    src: Cat3,
    alt: "Image 3",
    text: "EVERDAY WEAR"
  },
  {
    id: 42,
    src: Cat4,
    alt: "Image 4",
    text: "FESTIVE EDITS"
  }
];

export const category2 = [
  {
    id: 13,
    src:Img1,
    alt: "Im1",
    text: "KURTAS"
  },
  {
    id: 23,
    src:Img2,
    alt: "Im2",
    text: "KURTA SETS"
  },
  {
    id: 33,
    src: Img3,
    alt: "Im3",
    text: "SUIT SETS"
  },
  {
    id: 43,
    src: Img4,
    alt: "Im4",
    text: "DRESSES"
  }
];


export const Cart=[
  {
    id: 1,
    description: "Yellow Viscose Rayon Abstract Printed Straight Kurta VCK9632",
    price: 799.0,
    image: Cart1,
    cutPrice: 2999.0, // Add cut price
    size: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL'],
    colors: ['Yellow'],
    title:"SKU: VCK9632_XS",
    material:"viscose ",
    addDesc: "Let the print be your canvas. Think of it as a conversation starter, a chance to showcase your unique personality. Don't be afraid to play with accessories that pick up on the colors or shapes you find within the pattern. Maybe a chunky necklace that mirrors the boldness of the print.",
    stylenote:"Layer it under a chunky cardigan or denim jacket for a touch of edge, or add a pop of color with a contrasting scarf. Dress it up with statement earrings and heels for a night out, or keep it casual with flats and a tote bag for a chic daytime look.",
    sizefit:"The model (height 5'8) is wearing a size S",
    materials:"Top Fabric: Viscose Rayon\nWash Care: Hand Wash",
    specifications:"Sleeve Length :- Three-Quarter Sleeves\n Sleeve Styling :- Regular Sleeves\nShape :- Straight\nSlit Details :- Side Slits\nDesign Styling :- Regular\nHemline :- Straight\nLength :- Calf Length\nNeck :- Round Neck\nPrint or Pattern Type :- Abstract \nOccasion :- Fusion\nWeave Pattern :- Regular \n Weave Type :- Machine Weave",
    
    images: [
     
      { image: Single1, title: "Front View" },
      { image: Single2, title: "Back View" },
      { image: Single3, title: "Front View" },
      { image: Single4, title: "Back View" },
      { image: Single5, title: "Front View" },
    
      
    ],

    youMayAlsoLike: [
      // Add products similar to the first category
      {
        id: 1,
        imageurl:"https://cdn.shopify.com/s/files/1/0604/0040/2685/files/PKSKD2200_1.jpg?v=1704369469&width=360",
        description:"Teal Silk Blend Ethnic Motifs Printed Straight Suit Set PKSKD2200",
        price: 6248,
     
        cutPrice: 1799,
        
      },
      {
        id: 2,
        imageurl:"https://cdn.shopify.com/s/files/1/0604/0040/2685/files/PKSKD2203_7.jpg?v=1704368797&width=360",
        description:"Teal Silk Blend Ethnic Motifs Printed Straight Suit Set PKSKD2203",
        price:  6248,
     
        cutPrice: 1799,

        
      },

      {
        id: 3,
        imageurl:"https://ahika.in/cdn/shop/files/PKSKD1810_1.jpg?v=1687842739&width=600",
        description:"Teal Silk Blend Solid Straight Suit Set PKSKD1810",
        price:  2998,
     
        cutPrice: 799,

        
      },
      {
        id: 4,
        imageurl:"https://ahika.in/cdn/shop/files/PKSKD2160_1_copy.jpg?v=1703135508&width=600",
        description:"Blue Silk Blend Ethnic Motifs Embroidered Straight Suit Set PKSKD2160",
        price: 5748,
     
        cutPrice: 1799,

        
      },
    ],
 
  },
  {
    id: 2,
   
    price: 599.0,
    image: Cart2,
    cutPrice: 3999.0, // Add cut price
    description: "Beige Silk Blend Ethnic Motifs Printed Straight Kurta VCK9709",

    size: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL'],
    disabledSizes: ['XS','S','M', '4XL'],
    colors: ['Beige'],
    title:"SKU: VCK9632_XS",
    material:"Blend",
    addDesc: "Let the print be your canvas. Think of it as a conversation starter, a chance to showcase your unique personality. Don't be afraid to play with accessories that pick up on the colors or shapes you find within the pattern. Maybe a chunky necklace that mirrors the boldness of the print.",
    stylenote:"Layer it under a chunky cardigan or denim jacket for a touch of edge, or add a pop of color with a contrasting scarf. Dress it up with statement earrings and heels for a night out, or keep it casual with flats and a tote bag for a chic daytime look.",
    sizefit:"The model (height 5'8) is wearing a size S",
    materials:"Top Fabric: Viscose Rayon\nWash Care: Hand Wash",
    specifications:"Sleeve Length :- Three-Quarter Sleeves\n Sleeve Styling :- Regular Sleeves\nShape :- Straight\nSlit Details :- Side Slits\nDesign Styling :- Regular\nHemline :- Straight\nLength :- Calf Length\nNeck :- Round Neck\nPrint or Pattern Type :- Abstract \nOccasion :- Fusion\nWeave Pattern :- Regular \n Weave Type :- Machine Weave",

    images: [
      { image: bg1, title: "Front View" },
      { image: bg2, title: "Back View" },
      { image: bg3, title: "Front View" },
      { image: bg4, title: "Back View" },
      { image: bg5, title: "Front View" },
      { image: bg6, title: "Front View" },
    
    ],

    youMayAlsoLike: [
      // Add products similar to the first category
      {
        id: 5,
        imageurl:"https://ahika.in/cdn/shop/files/PKSKD1841_1.jpg?v=1687843544&width=600",
        description:"Purple Silk Blend Solid Straight Suit Set PKSKD1841",
        price: 2998,
     
        cutPrice: 1200,
        
      },
      {
        id: 6,
        imageurl:"https://ahika.in/cdn/shop/files/PKSKD1548_1.jpg?v=1687510761&width=600",
        description:"Purple Poly Silk Solid Straight Suit Set PKSKD1548",
        price: 3497,
     
        cutPrice: 1999.0,

        
      },

      {
        id: 7,
        imageurl:"https://ahika.in/cdn/shop/files/PKSKD2097_1_copy_d9e3efba-273a-4bde-bf1a-2d8691836e13.jpg?v=1698923223&width=600",
        description:"Blue Silk Blend Solid Yoke Design Straight Suit Set PKSKD2097",
        price: 799,
     
        cutPrice: 1998.0,

        
      },
      {
        id: 8,
        imageurl:"https://ahika.in/cdn/shop/files/VKSKD2100_7_copy.jpg?v=1704284424&width=600",
        description:"Pink Silk Blend Yoke Design Straight Suit Set PKSKD1992",
        price: 4998,
     
        cutPrice: 1699.0,

        
      },
    ],
   
  },
  {
    id: 3,
    
    price: 799,
    image: Cart3,
    cutPrice: 1998.0, // Add cut price
    description: "Yellow Viscose Rayon Floral Printed Straight Suit Set VKSKD2162",
    size: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL'],
    
    colors: ['Yellow'],
    title:"SKU: VCK9632_XS",
    material:"Rayon",
    addDesc: "Let the print be your canvas. Think of it as a conversation starter, a chance to showcase your unique personality. Don't be afraid to play with accessories that pick up on the colors or shapes you find within the pattern. Maybe a chunky necklace that mirrors the boldness of the print.",
    stylenote:"Layer it under a chunky cardigan or denim jacket for a touch of edge, or add a pop of color with a contrasting scarf. Dress it up with statement earrings and heels for a night out, or keep it casual with flats and a tote bag for a chic daytime look.",
    sizefit:"The model (height 5'8) is wearing a size S",
    materials:"Top Fabric: Viscose Rayon\nWash Care: Hand Wash",
    specifications:"Sleeve Length :- Three-Quarter Sleeves\n Sleeve Styling :- Regular Sleeves\nShape :- Straight\nSlit Details :- Side Slits\nDesign Styling :- Regular\nHemline :- Straight\nLength :- Calf Length\nNeck :- Round Neck\nPrint or Pattern Type :- Abstract \nOccasion :- Fusion\nWeave Pattern :- Regular \n Weave Type :- Machine Weave",
    images: [
      { image: yell1, title: "Front View" },
      { image: Cart3, title: "Back View" },
      { image: yell2, title: "Front View" },
      { image: yell3, title: "Back View" },
      { image: yell4, title: "Front View" },
      { image: yell5, title: "Front View" },
     
    ],


    youMayAlsoLike: [
      // Add products similar to the first category
      {
        id: 9,
        imageurl:"https://ahika.in/cdn/shop/files/25577648_6f8793be-e92a-465a-bc70-3d3e414b02c1.jpg?v=1704544892&width=600",
        description:"Pink Silk Blend Solid Embroidered Straight Suit Set PKSKD2012",
        price:  9998,
     
        cutPrice: 1999,
        
      },
      {
        id: 10,
        imageurl:"https://ahika.in/products/yellow-silk-blend-solid-embroidered-straight-suit-set-pkskd2011?pr_prod_strat=e5_desc&pr_rec_id=0b34c2849&pr_rec_pid=8184050712829&pr_ref_pid=8271812133117&pr_seq=uniform",
        description:"Yellow Silk Blend Solid Embroidered Straight Suit Set PKSKD2011",
        price:  9998,
     
        cutPrice: 1999,

        
      },

      {
        id: 11,
        imageurl:"https://ahika.in/products/green-silk-blend-solid-embroidered-straight-style-suit-set-pkskd2027?pr_prod_strat=e5_desc&pr_rec_id=0b34c2849&pr_rec_pid=8184050843901&pr_ref_pid=8271812133117&pr_seq=uniform",
        description:"Green Silk Blend Solid Embroidered Straight Style Suit Set PKSKD2027",
        price:  9998,
     
        cutPrice: 1999,

        
      },
      {
        id: 12,
        imageurl:"https://ahika.in/products/mustard-silk-blend-solid-embroidered-straight-suit-set-pkskd2099?pr_prod_strat=e5_desc&pr_rec_id=0b34c2849&pr_rec_pid=8221057614077&pr_ref_pid=8271812133117&pr_seq=uniform",
        description:"Mustard Silk Blend Solid Embroidered Straight Suit Set PKSKD2099",
        price:  9998,
     
        cutPrice: 1999,

        
      },
    ],
  
   
  },
  {
  id: 4,
 
  price: 799,
  image: Cart4,
  cutPrice: 2998.0, // Add cut price
  description: "Violet Rayon Blend Ethnic Motifs Printed Straight Suit Set VKSKD2167",
  size: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL'],
  disabledSizes: ['s', 'XL'],
  colors: ['Violet'],
  title:"SKU: VCK9632_XS",
  material:"Rayon",
  addDesc: "Let the print be your canvas. Think of it as a conversation starter, a chance to showcase your unique personality. Don't be afraid to play with accessories that pick up on the colors or shapes you find within the pattern. Maybe a chunky necklace that mirrors the boldness of the print.",
  stylenote:"Layer it under a chunky cardigan or denim jacket for a touch of edge, or add a pop of color with a contrasting scarf. Dress it up with statement earrings and heels for a night out, or keep it casual with flats and a tote bag for a chic daytime look.",
  sizefit:"The model (height 5'8) is wearing a size S",
  materials:"Top Fabric: Viscose Rayon\nWash Care: Hand Wash",
  specifications:"Sleeve Length :- Three-Quarter Sleeves\n Sleeve Styling :- Regular Sleeves\nShape :- Straight\nSlit Details :- Side Slits\nDesign Styling :- Regular\nHemline :- Straight\nLength :- Calf Length\nNeck :- Round Neck\nPrint or Pattern Type :- Abstract \nOccasion :- Fusion\nWeave Pattern :- Regular \n Weave Type :- Machine Weave",
  images: [
    { image: violet1, title: "Front View" },
      { image: violet2, title: "Back View" },
      { image: violet3, title: "Front View" },
      { image: violet4, title: "Back View" },
      { image: violet5, title: "Front View" },
      { image: violet6, title: "Front View" },
      { image: violet7, title: "Front View" },
    
  ],


  youMayAlsoLike: [
    // Add products similar to the first category
    {
      id: 13,
      imageurl:"https://ahika.in/cdn/shop/files/PKSKD1841_1.jpg?v=1687843544&width=600",
      description:"Purple Silk Blend Solid Straight Suit Set PKSKD1841",
      price: 2998,
   
      cutPrice: 1200,
      
    },
    {
      id: 14,
      imageurl:"https://ahika.in/cdn/shop/files/PKSKD1548_1.jpg?v=1687510761&width=600",
      description:"Purple Poly Silk Solid Straight Suit Set PKSKD1548",
      price: 3497,
   
      cutPrice: 1999.0,

      
    },

    {
      id: 15,
      imageurl:"https://ahika.in/cdn/shop/files/PKSKD2097_1_copy_d9e3efba-273a-4bde-bf1a-2d8691836e13.jpg?v=1698923223&width=600",
      description:"Blue Silk Blend Solid Yoke Design Straight Suit Set PKSKD2097",
      price: 799,
   
      cutPrice: 1998.0,

      
    },
    {
      id: 16,
      imageurl:"https://ahika.in/cdn/shop/files/VKSKD2100_7_copy.jpg?v=1704284424&width=600",
      description:"Pink Silk Blend Yoke Design Straight Suit Set PKSKD1992",
      price: 4998,
   
      cutPrice: 1699.0,

      
    },
  ],
 
  },
]



