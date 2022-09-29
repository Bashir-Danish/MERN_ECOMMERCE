import bcrypt from "bcryptjs";

const data = {
   users: [
      {
         username: "Admin",
         email: "dos-124@gmail.com",
         password: bcrypt.hashSync("admin"),
         isAdmin: true,
      },
   ],
   blogs: [
      {
         title: "Blog one",
         description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, iusto nesciunt laboriosam recusandae vitae sed blanditiis quas eius consectetur sunt suscipit, aut dolor quia numquam expedita excepturi voluptatem beatae fuga. Ipsam praesentium autem, officia quas sit sed cum aliquid perferendis in suscipit alias, ipsum similique unde voluptatem temporibus omnis distinctio. Recusandae eius dolore libero ut aliquid similique distinctio nesciunt quia? Nihil maxime esse quis quae cum autem non praesentium, exercitationem accusamus harum expedita veritatis tempora, blanditiis adipisci aut! Iste animi molestiae libero beatae maxime magnam nam nostrum ab neque, est dolore omnis veritatis facilis itaque qui maiores et veniam, obcaecati fuga eos sit velit? Deserunt, odit consectetur. Ipsum repellat harum exercitationem sequi magni! Aliquam dolore maiores alias, consequuntur libero, temporibus harum odit rem aliquid debitis sint. Veritatis ducimus delectus corrupti dolor error rem nostrum quibusdam temporibus neque! ",
      },
      {
         title: "Blog two",
         description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, iusto nesciunt laboriosam recusandae vitae sed blanditiis quas eius consectetur sunt suscipit, aut dolor quia numquam expedita excepturi voluptatem beatae fuga. Ipsam praesentium autem, officia quas sit sed cum aliquid perferendis in suscipit alias, ipsum similique unde voluptatem temporibus omnis distinctio. Recusandae eius dolore libero ut aliquid similique distinctio nesciunt quia? Nihil maxime esse quis quae cum autem non praesentium, exercitationem accusamoluta non debitia dignissimos neque, est dolore omnis veritatis facilis itaque qui maiores et veniam, obcaecati fuga eos sit velit? Deserunt, odit consectetur. Ipsum repellat harum exercitationem sequi magni! Aliquam dolore maiores alias, consequuntur libero, temporibus harum odit rem aliquid debitis sint. Veritatis ducimus",
      },
      {
         title: "Blog three",
         description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, iusto nesciunt laboriosam recusandae vitae sed blanditiis quas eius consectetur sunt suscipit, aut dolor quia numquam expedita excepturi voluptatem beatae fuga. Ipsam praesentium autem, officia quas sit sed cum aliquid perferendis in suscipit alias, ipsum similique unde voluptatem temporibus omnis distinctio. Recusandae eius dolore libero ut aliquid similique distinctio nesciunt quia? Nihil maxime esse quis quae cum autem non praesentium, exercitationem accusamus harum expedita veritatis tempora, blanditiis adipisci aut! Iste animi molestiae libero beatae maxime magnam nam nostrum ab, fugiat illum? Exercitationem ut est blanditiis dolores perspiciatis doloremque vero vel unde maxime soluta non debitis error delectus voluptates, saepe nihil quasi. Deserunt quasi laudantium consecteme esse quis quae cum autem non praesentium, exercitationem accusamus harum expedita veritatis tempora, blanditiis adipisci aut! Iste animi molestiae libero beatae maxime magnam nam nostrum ab, fugiat illum? Exercitationem ut est blanditiis dolores perspiciatis doloremque vero vel unde maxime soluta non debitis error delectus voluptates, saepe nihil quasi. Deserunt quasi laudantium consecteme esse quis quae cum autem non praesentium, exercitationem accusamus harum expedita veritatis tempora, blanditiis adipisci aut! Iste animi molestiae libero beatae maxime magnam nam nostrum ab, fugiat illum? Exercitationem ut est blanditiis dolores perspiciatis doloremque vero vel unde maxime soluta non debitis error delectus voluptates, saepe nihil quasi. Deserunt quasi laudantium consectetur ab pariatur reprehenderit vel necessitatibus esse. Explicabo consequatur voluptatem commodi nulla amet possimus illum cum assumenda dignissimos neque, est dolore omnis veritatis facilis itaque qui maiores et veniam, obcaecati fuga eos sit velit? Deserunt, odit consectetur. Ipsum repellat harum exercitationem sequi magni! Aliquam dolore maiores alias, consequuntur libero, temporibus harum odit rem aliquid debitis sint. ",
      },
      {
         title: "Blog four",
         description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, iusto nesciunt laboriosam recusandae vitae sed blanditiis quas eius consectetur sunt suscipit, aut dolor quia numquam expedita excepturi voluptatem beataevel necessitatibus esse. Explicabo consequatur voluptatem commodi nulla amet possimus illum cum assumenda dignissimos neque, est dolore omnis veritatis facilis itaque qui maiores et veniam, obcaecati fuga eos sit velit? Deserunt, odit consectetur. Ipsum repellat harum exercitationem sequi magni! Aliquam dolore maiores alias, consequuntur libero, temporibus harum odit rem aliquid debitis sint. Veritatis ducimus delectus corrupti dolor error rem nostrum quibusdam temporibus neque! ",
      },
      {
         title: "Blog five",
         description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, iusto nesciunt laboriosam recusandae vitae sed blanditiis quas eius consectetur sunt suscipit, aut dolor quia numquam expedita excepturi voluptatem beatae fuga. Ipsam praesentium autem, officia quas sisint. Veritatis ducimus delectus corrupti dolor error rem nostrum quibusdam temporibus neque! Itaque corporis reiciendis porro reprehenderit quisquam, ",
      },
      {
         title: "Blog sex",
         description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, iusto nesciunt laboriosam recusandae vitae sed blanditiis quas eius consectetur sunt suscipit, aut dolor quia numquam expedita excepturi voluptatem beatae fuga. Ipsam praesentium autem, officia quas sit sed cum aliquid perferendis in suscipit alias, ipsum similique unde voluptatem temporibus omnis distinctio. Recusandae eius dolore libero ut aliquid similique distinctio nesciunt quia? Nihil maxime esse quis quae cum autem non praesentium, exercitationem accusamus harum expedita veritatis tempora, blanditiis adipisci aut! Iste animi molestiae libero beatae maxime magnam nam nostrum ab, fugiat illum? Exercitationem ut est blanditiis dolores perspiciatis doloremque vero vel unde maxime soluta non debitis error delectus volu exercitationem accusamus harum expedita veritatis tempora, blanditiis adipisci aut! Iste animi molestiae libero beatae maxime magnam nam nostrum ab, fugiat illum? Exercitationem ut est blanditiis dolores perspiciatis doloremque vero vel unde maxime soluta non debitis error delectus voluptates, ",
      },
      {
         title: "Blog 21",
         description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, iusto nesciunt laboriosam recusandae vitae sed blanditiis quas eius consectetur sunt suscipit, aut dolor quia numquam expedita excepturi voluptatem beatae fuga. Ipsam praesentium autem, officia quas sit sed cum aliquid perferendis in suscipit alias, ipsum similique unde voluptatem temporibus omnis distinctio. Recusandae eius dolore libero ut aliquid similique distinctio nesciunt quia? Nihil maxime esse quis quae cum autem non praesentium, exercitationem accusamus harum expedita veritatis tempora, blanditiis adipisci aut! Iste animi molestiae libero beatae maxime magnam nam nostrum ab, fugiat illum? Exercitationem ut est blanditiis dolores perspiciatis doloremque vero vel unde maxime soluta non debitis error delectus volu exercitationem accusamus harum expedita veritatis tempora, blanditiis adipisci aut! Iste animi molestiae libero beatae maxime magnam nam nostrum ab, fugiat illum? Exercitationem ut est blanditiis dolores perspiciatis doloremque vero vel unde maxime soluta non debitis error delectus voluptates, ",
      },
      {
         title: "Blog 22",
         description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, iusto nesciunt laboriosam recusandae vitae sed blanditiis quas eius consectetur sunt suscipit, aut dolor quia numquam expedita excepturi voluptatem beatae fuga. Ipsam praesentium autem, officia quas sit sed cum aliquid perferendis in suscipit alias, ipsum similique unde voluptatem temporibus omnis distinctio. Recusandae eius dolore libero ut aliquid similique distinctio nesciunt quia? Nihil maxime esse quis quae cum autem non praesentium, exercitationem accusamus harum expedita veritatis tempora, blanditiis adipisci aut! Iste animi molestiae libero beatae maxime magnam nam nostrum ab, fugiat illum? Exercitationem ut est blanditiis dolores perspiciatis doloremque vero vel unde maxime soluta non debitis error delectus volu exercitationem accusamus harum expedita veritatis tempora, blanditiis adipisci aut! Iste animi molestiae libero beatae maxime magnam nam nostrum ab, fugiat illum? Exercitationem ut est blanditiis dolores perspiciatis doloremque vero vel unde maxime soluta non debitis error delectus voluptates, ",
      },
   ],
   products: [
      {
         title: "Product one",
         category: "Women",
         subcategory: "Dresses",
         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, iusto nesciunt laboriosam recusandae vitae sed blanditiis quas eius consectetur sunt suscipit, aut dolor quia numquam expedita excepturi voluptatem beatae fuga. Ipsam praesentium autem",
         price: 70,
         star: "5",
         sizes: [
            {
               title: "S"
            },
            {
               title: "L"
            },
            {
               title: "XL"
            }
         ],
         colors: [
            {
               title: "Blue",
            }
            , {
               title: "Light-Green",
            },
         ],
         image: "./assets/images/products/a1.jpg",
         imageOne: "./assets/images/products/a2.jpg",
         imageTow: "./assets/images/products/a3.jpg"
      },
      {
         title: "Product two",
         category: "Women",
         subcategory: "Dresses",
         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, iusto nesciunt laboriosam recusandae vitae sed blanditiis quas eius consectetur sunt suscipit, aut dolor quia numquam expedita excepturi voluptatem beatae fuga. Ipsam praesentium autem",
         price: 70,
         star: "5",
         sizes: [
            {
               title: "S"
            },
            {
               title: "M",
            },
            {
               title: "L"
            },
            {
               title: "XL"
            }
         ],
         colors: [
            {
               title: "Light-Green",
            },
            {
               title: "Bloue",
            }
         ],
         image: "./assets/images/products/b1.jpg",
         imageOne: "./assets/images/products/b2.jpg",
         imageTow: "./assets/images/products/b3.jpg"
      },
      {
         title: "Product seven",
         category: "Women",
         subcategory: "Dresses",
         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, iusto nesciunt laboriosam recusandae vitae sed blanditiis quas eius consectetur sunt suscipit, aut dolor quia numquam expedita excepturi voluptatem beatae fuga. Ipsam praesentium autem",
         price: 70,
         star: "4",
         sizes: [
            {
               title: "S"
            },
            {
               title: "M"
            },
            {
               title: "L"
            }
         ],
         colors: [
            {
               title: "Brown",
            },
            {
               title: "red",
            }
         ],
         image: "./assets/images/products/g1.jpg",
         imageOne: "./assets/images/products/g2.jpg",
         imageTow: "./assets/images/products/g3.jpg"
      },
      {
         title: "Kid Hoodie",
         category: "Kids",
         subcategory: "Dresses",
         description: "Lorem ipsum dolor sit amet iusto nesciunt laboriosam recusandae or quia numquam expedita excepturi voluptatem beatae fuga. Ipsam praesentium autem",
         price: 90,
         star: "5",
         sizes: [
            {
               title: "S"
            },
            {
               title: "M",
            },
            {
               title: "L"
            },
         ],
         colors: [
            {
               title: "Gray",
            },
            {
               title: "White",
            },
         ],
         image: "./assets/images/products/12.1.png",
         imageOne: "./assets/images/products/12.2.png",
         imageTow: "./assets/images/products/12.3.png"
      },

      {
         title: "Product 8",
         category: "Women",
         subcategory: "Dresses",
         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, iusto nesciunt laboriosam recusandae vitae sed blanditiis quas eius consectetur sunt suscipit, aut dolor quia numquam expedita excepturi voluptatem beatae fuga. Ipsam praesentium autem",
         price: 100,
         star: "4",
         sizes: [
            {
               title: "S"
            },
            {
               title: "M",
            },
            {
               title: "XL"
            },
            {
               title: "XXL"
            }
         ],
         colors: [
            {
               title: "Blue",
            },
            {
               title: "Green",
            },
         ],
         image: "./assets/images/products/h1.jpg",
         imageOne: "./assets/images/products/h2.jpg",
         imageTow: "./assets/images/products/h3.jpg"
      },
      {
         title: "Product 9",
         category: "Women",
         subcategory: "Dresses",
         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, iusto nesciunt laboriosam recusandae vitae sed blanditiis quas eius consectetur sunt suscipit, aut dolor quia numquam expedita excepturi voluptatem beatae fuga. Ipsam praesentium autem",
         price: 90,
         star: "4",
         sizes: [
            {
               title: "S"
            },
            {
               title: "M",
            },
            {
               title: "L"
            },
         ],
         colors: [
            {
               title: "Brown",
            },
            {
               title: "Green",
            },
         ],
         image: "./assets/images/products/i1.jpg",
         imageOne: "./assets/images/products/i2.jpg",
         imageTow: "./assets/images/products/i3.jpg"
      },
      {
         title: "Product 10",
         category: "Women",
         subcategory: "Dresses",
         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, iusto nesciunt laboriosam recusandae vitae sed blanditiis quas eius consectetur sunt suscipit, aut dolor quia numquam expedita excepturi voluptatem beatae fuga. Ipsam praesentium autem",
         price: 99,
         star: "4",
         sizes: [
            {
               title: "30"
            },
            {
               title: "40",
            },
            {
               title: "50"
            }
         ],
         colors: [
            {
               title: "Pink",
            },
         ],
         image: "./assets/images/products/j1.jpg",
         imageOne: "./assets/images/products/j2.jpg",
         imageTow: "./assets/images/products/j3.jpg"
      },
      
      {
         title: "Product 11",
         category: "Women",
         subcategory: "Dresses",
         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, iusto nesciunt laboriosam recusandae vitae sed blanditiis quas eius consectetur sunt suscipit, aut dolor quia numquam expedita excepturi voluptatem beatae fuga. Ipsam praesentium autem",
         price: 80,
         star: "4",
         sizes: [
            {
               title: "S"
            },
            {
               title: "M",
            },
            {
               title: "L"
            },
            {
               title: "XL"
            },
         ],
         colors: [
            {
               title: "Blue",
            },
            {
               title: "gray",
            },
            {
               title: "Green",
            },
         ],
         image: "./assets/images/products/k1.jpg",
         imageOne: "./assets/images/products/k2.jpg",
         imageTow: "./assets/images/products/k3.jpg"
      },
      {
         title: "Men Dresses",
         category: "Men",
         subcategory: "Dresses",
         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, ",
         price: 90,
         star: "4",
         sizes: [
            {
               title: "S"
            },
            {
               title: "M",
            },
            {
               title: "L"
            },
            {
               title: "XL"
            },
         ],
         colors: [
            {
               title: "Red",
            },
            {
               title: "Gray",
            },
            {
               title: "Green",
            },
         ],
         image: "./assets/images/products/1.1.png",
         imageOne: "./assets/images/products/1.2.png",
         imageTow: "./assets/images/products/1.3.png"
      }, {
         title: "Gray dress",
         category: "Men",
         subcategory: "Dresses",
         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, iusto nesciunt laboriosam recusandae vitae sed blanditiis quas eius consectetur sunt suscipit, aut dolor quia numquam expedita excepturi voluptatem beatae fuga. Ipsam praesentium autem",
         price: 110,
         star: "4",
         sizes: [
            {
               title: "S"
            },
            {
               title: "M",
            },
            {
               title: "L"
            },
            {
               title: "XL"
            },
         ],
         colors: [
            {
               title: "Blue",
            },
            {
               title: "gray",
            },
         ],
         image: "./assets/images/products/2.1.png",
         imageOne: "./assets/images/products/2.2.png",
         imageTow: "./assets/images/products/2.3.png"
      }, {
         title: "Shirt 2",
         category: "Men",
         subcategory: "Dresses",
         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, iusto nesciunt laboriosam recusandae vitae sed blanditiis quas eius consectetur sunt suscipit, aut dolor quia numquam expedita excepturi voluptatem beatae fuga. Ipsam praesentium autem",
         price: 110,
         star: "4",
         sizes: [
            {
               title: "S"
            },
            {
               title: "M",
            },
            {
               title: "L"
            },
         ],
         colors: [
            {
               title: "Blue",
            },

         ],
         image: "./assets/images/products/3.1.png",
         imageOne: "./assets/images/products/3.2.png",
         imageTow: "./assets/images/products/3.3.png"
      }
      , {
         title: "Blue Jeans",
         category: "Women",
         subcategory: "Jeans",
         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, iusto nesciunt laboriosam recusandae vitae sed blanditiis quas eius consectetur sunt suscipit, aut dolor quia numquam expedita excepturi voluptatem beatae fuga. Ipsam praesentium autem",
         price: 69,
         star: "4",
         sizes: [
            {
               title: "S"
            },
            {
               title: "M",
            },
         ],
         colors: [
            {
               title: "Blue",
            },
            {
               title: "gray",
            },
         ],
         image: "./assets/images/products/4.1.png",
         imageOne: "./assets/images/products/4.2.png",
         imageTow: "./assets/images/products/4.3.png"
      },{
         title: "Kid Dress",
         category: "Kids",
         subcategory: "Dresses",
         description: "Lorem ipsum dolor sit amet iusto nesciunt laboriosam recusandae or quia numquam expedita excepturi voluptatem beatae fuga. Ipsam praesentium autem",
         price: 50,
         star: "3",
         sizes: [
            {
               title: "S"
            },
            {
               title: "M",
            },
            {
               title: "L"
            },
         ],
         colors: [
            {
               title: "Orange",
            },
            {
               title: "White",
            },
         ],
         image: "./assets/images/products/14.1.png",
         imageOne: "./assets/images/products/14.2.png",
         imageTow: "./assets/images/products/14.3.png"
      },
       {
         title: "Blue Jeans",
         category: "Women",
         subcategory: "Jeans",
         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, iusto nesciunt laboriosam recusandae vitae sed blanditiis quas eius consectetur sunt suscipit, aut dolor quia numquam expedita excepturi voluptatem beatae fuga. Ipsam praesentium autem",
         price: 69,
         star: "4",
         sizes: [
            {
               title: "S"
            },
            {
               title: "M",
            },
            {
               title: "L"
            },
         ],
         colors: [
            {
               title: "Blue",
            },
         ],
         image: "./assets/images/products/5.1.png",
         imageOne: "./assets/images/products/5.2.png",
         imageTow: "./assets/images/products/5.3.png"
      }
      , {
         title: "Hoodie",
         category: "Men",
         subcategory: "Dresses",
         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, iusto nesciunt laboriosam recusandae vitae sed blanditiis quas eexcepturi voluptatem beatae fuga. Ipsam praesentium autem",
         price: 89,
         star: "4",
         sizes: [
            {
               title: "M",
            },
            {
               title: "L"
            },
            {
               title: "XL"
            },
         ],
         colors: [
            {
               title: "Black",
            },
         ],
         image: "./assets/images/products/6.1.png",
         imageOne: "./assets/images/products/6.2.png",
         imageTow: "./assets/images/products/6.3.png"
      }
      , {
         title: "Light Blue Jeans",
         category: "Men",
         subcategory: "Jeans",
         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, iusto nesciunt laboriosam recusandae or quia numquam expedita excepturi voluptatem beatae fuga. Ipsam praesentium autem",
         price: 100,
         star: "5",
         sizes: [
            {
               title: "S"
            },
            {
               title: "M",
            },
            {
               title: "L"
            },
         ],
         colors: [
            {
               title: "Light Blue",
            },
            {
               title: "Blue",
            },
         ],
         image: "./assets/images/products/7.1.png",
         imageOne: "./assets/images/products/7.2.png",
         imageTow: "./assets/images/products/7.3.png"
      },
      {
         title: "Blue Jeans",
         category: "Men",
         subcategory: "Jeans",
         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, iusto nesciunt laboriosam recusandae or quia numquam expedita excepturi voluptatem beatae fuga. Ipsam praesentium autem",
         price: 100,
         star: "5",
         sizes: [
            {
               title: "S"
            },
            {
               title: "M",
            },
            {
               title: "L"
            },
         ],
         colors: [
            {
               title: "Light Blue",
            },
            {
               title: "Blue",
            },
         ],
         image: "./assets/images/products/11.1.png",
         imageOne: "./assets/images/products/11.2.png",
         imageTow: "./assets/images/products/11.3.png"
      },
      {
         title: "Gray t-shirt",
         category: "Men",
         subcategory: "T-Shirt",
         description: "Lorem ipsum dolor sit amet iusto nesciunt laboriosam recusandae or quia numquam expedita excepturi voluptatem beatae fuga. Ipsam praesentium autem",
         price: 100,
         star: "5",
         sizes: [
            {
               title: "S"
            },
            {
               title: "M",
            },
            {
               title: "L"
            },
         ],
         colors: [
            {
               title: "Gray",
            },
            {
               title: "white",
            },
         ],
         image: "./assets/images/products/10.1.png",
         imageOne: "./assets/images/products/10.2.png",
         imageTow: "./assets/images/products/10.3.png"
      },
      {
         title: "Yellow t-shirt",
         category: "Men",
         subcategory: "T-Shirt",
         description: "Lorem ipsum dolor sit amet iusto nesciunt laboriosam recusandae or quia numquam expedita excepturi voluptatem beatae fuga. Ipsam praesentium autem",
         price: 100,
         star: "5",
         sizes: [
            {
               title: "S"
            },
            {
               title: "M",
            },
            {
               title: "L"
            },
         ],
         colors: [
            {
               title: "Gray",
            },
            {
               title: "Yellow",
            },
         ],
         image: "./assets/images/products/8.1.png",
         imageOne: "./assets/images/products/8.2.png",
         imageTow: "./assets/images/products/8.3.png"
      },
     
      {
         title: "Product three",
         category: "Women",
         subcategory: "Dresses",
         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, iusto nesciunt laboriosam recusandae vitae sed blanditiis quas eius consectetur sunt suscipit, aut dolor quia numquam expedita excepturi voluptatem beatae fuga. Ipsam praesentium autem",
         price: 50,
         star: "3",
         sizes: [
            {
               title: "30"
            },
            {
               title: "40",
            },
            {
               title: "50"
            },
         ],
         colors: [
            {
               title: "Bronw",
            },
            {
               title: "gray",
            }
         ],
         image: "./assets/images/products/c1.jpg",
         imageOne: "./assets/images/products/c2.jpg",
         imageTow: "./assets/images/products/c3.jpg"
      },
      {
         title: "Product four",
         category: "Women",
         subcategory: "Dresses",
         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, iusto nesciunt laboriosam recusandae vitae sed blanditiis quas eius consectetur sunt suscipit, aut dolor quia numquam expedita excepturi voluptatem beatae fuga. Ipsam praesentium autem",
         price: 100,
         star: "3",
         sizes: [
            {
               title: "S"
            },
            {
               title: "L"
            },
            {
               title: "XL"
            }
         ],
         colors: [
            {
               title: "Light-Pink",
            }
         ],
         image: "./assets/images/products/d1.jpg",
         imageOne: "./assets/images/products/d2.jpg",
         imageTow: "./assets/images/products/d3.jpg"
      },
      {
         title: "Product five",
         category: "Women",
         subcategory: "Dresses",
         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, iusto nesciunt laboriosam recusandae vitae sed blanditiis quas eius consectetur sunt suscipit, aut dolor quia numquam expedita excepturi voluptatem beatae fuga. Ipsam praesentium autem",
         price: 89,
         star: "4",
         sizes: [
            {
               title: "S"
            },
            {
               title: "M",
            },
            {
               title: "XL"
            },
            {
               title: "XXL"
            }
         ],
         colors: [
            {
               title: "Blue",
            },
            {
               title: "gray",
            }
         ],
         image: "./assets/images/products/e1.jpg",
         imageOne: "./assets/images/products/e2.jpg",
         imageTow: "./assets/images/products/e3.jpg"
      },
      {
         title: "Product six",
         category: "Women",
         subcategory: "Dresses",
         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, iusto nesciunt laboriosam recusandae vitae sed blanditiis quas eius consectetur sunt suscipit, aut dolor quia numquam expedita excepturi voluptatem beatae fuga. Ipsam praesentium autem",
         price: 160,
         star: "3",
         sizes: [
            {
               title: "S"
            },
            {
               title: "M",
            },
            {
               title: "L"
            },
            {
               title: "XL"
            }
         ],
         colors: [
            {
               title: "White",
            },
         ],
         image: "./assets/images/products/f1.jpg",
         imageOne: "./assets/images/products/f2.jpg",
         imageTow: "./assets/images/products/f3.jpg"
      },
   ],
   category: [
      {
         value: "Men",
         label: "Men",
      },
      {
         value: "Women",
         label: "Women",
      },
      {
         value: "Kids",
         label: "Kids",
      },
   ],
   subcategory: [
      {
         checked: false,
         label: "Dresses",
      },
      {
         checked: false,
         label: "Jeans",
      },
      {
         checked: false,
         label: "T-Shirt",
      },
   ],
   rating: [
      {
         value: "1",
         label: "1",
      },
      {
         value: "2",
         label: "2",
      },
      {
         value: "3",
         label: "3",
      },
      {
         value: "4",
         label: "4",
      },
      {
         value: "5",
         label: "5",
      },
   ]

};

export default data;
