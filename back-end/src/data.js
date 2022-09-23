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
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, iusto nesciunt laboriosam recusandae vitae sed blanditiis quas eius consectetur sunt suscipit, aut dolor quia numquam expedita excepturi voluptatem beatae fuga. Ipsam praesentium autem, officia quas sit sed cum aliquid perferendis in suscipit alias, ipsum similique unde voluptatem temporibus omnis distinctio. Recusandae eius dolore libero ut aliquid similique distinctio nesciunt quia? Nihil maxime esse quis quae cum autem non praesentium, exercitationem accusamus harum expedita veritatis tempora, blanditiis adipisci aut! Iste animi molestiae libero beatae maxime magnam nam nostrum ab, fugiat illum? Exercitationem ut est blanditiis dolores perspiciatis doloremque vero vel unde maxime soluta non debitis error delectus voluptates, saepe nihil quasi. Deserunt quasi laudantium consectetur ab pariatur reprehenderit vel necessitatibus esse. Explicabo consequatur voluptatem commodi nulla amet possimus illum cum assumenda dignissimos neque, est dolore omnis veritatis facilis itaque qui maiores et veniam, obcaecati fuga eos sit velit? Deserunt, odit consectetur. Ipsum repellat harum exercitationem sequi magni! Aliquam dolore maiores alias, consequuntur libero, temporibus harum odit rem aliquid debitis sint. Veritatis ducimus delectus corrupti dolor error rem nostrum quibusdam temporibus neque! ",
      },
      {
         title: "Blog two",
         description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, iusto nesciunt laboriosam recusandae vitae sed blanditiis quas eius consectetur sunt suscipit, aut dolor quia numquam expedita excepturi voluptatem beatae fuga. Ipsam praesentium autem, officia quas sit sed cum aliquid perferendis in suscipit alias, ipsum similique unde voluptatem temporibus omnis distinctio. Recusandae eius dolore libero ut aliquid similique distinctio nesciunt quia? Nihil maxime esse quis quae cum autem non praesentium, exercitationem accusamus harum expedita veritatis tempora, blanditiis adipisci aut! Iste animi molestiae libero beatae maxime magnam nam nostrum ab, fugiat illum? Exercitationem ut est blanditiis dolores perspiciatis doloremque vero vel unde maxime soluta non debitis error delectus voluptates, saepe nihil quasi. Deserunt quasi laudantium consectetur ab pariatur reprehenderit vel necessitatibus esse. Explicabo consequatur voluptatem commodi nulla amet possimus illum cum assumenda dignissimos neque, est dolore omnis veritatis facilis itaque qui maiores et veniam, obcaecati fuga eos sit velit? Deserunt, odit consectetur. Ipsum repellat harum exercitationem sequi magni! Aliquam dolore maiores alias, consequuntur libero, temporibus harum odit rem aliquid debitis sint. Veritatis ducimus",
      },
      {
         title: "Blog three",
         description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, iusto nesciunt laboriosam recusandae vitae sed blanditiis quas eius consectetur sunt suscipit, aut dolor quia numquam expedita excepturi voluptatem beatae fuga. Ipsam praesentium autem, officia quas sit sed cum aliquid perferendis in suscipit alias, ipsum similique unde voluptatem temporibus omnis distinctio. Recusandae eius dolore libero ut aliquid similique distinctio nesciunt quia? Nihil maxime esse quis quae cum autem non praesentium, exercitationem accusamus harum expedita veritatis tempora, blanditiis adipisci aut! Iste animi molestiae libero beatae maxime magnam nam nostrum ab, fugiat illum? Exercitationem ut est blanditiis dolores perspiciatis doloremque vero vel unde maxime soluta non debitis error delectus voluptates, saepe nihil quasi. Deserunt quasi laudantium consectetur ab pariatur reprehenderit vel necessitatibus esse. Explicabo consequatur voluptatem commodi nulla amet possimus illum cum assumenda dignissimos neque, est dolore omnis veritatis facilis itaque qui maiores et veniam, obcaecati fuga eos sit velit? Deserunt, odit consectetur. Ipsum repellat harum exercitationem sequi magni! Aliquam dolore maiores alias, consequuntur libero, temporibus harum odit rem aliquid debitis sint. ",
      },
      {
         title: "Blog four",
         description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, iusto nesciunt laboriosam recusandae vitae sed blanditiis quas eius consectetur sunt suscipit, aut dolor quia numquam expedita excepturi voluptatem beatae fuga. Ipsam praesentium autem, officia quas sit sed cum aliquid perferendis in suscipit alias, ipsum similique unde voluptatem temporibus omnis distinctio. Recusandae eius dolore libero ut aliquid similique distinctio nesciunt quia? Nihil maxime esse quis quae cum autem non praesentium, exercitationem accusamus harum expedita veritatis tempora, blanditiis adipisci aut! Iste animi molestiae libero beatae maxime magnam nam nostrum ab, fugiat illum? Exercitationem ut est blanditiis dolores perspiciatis doloremque vero vel unde maxime soluta non debitis error delectus voluptates, saepe nihil quasi. Deserunt quasi laudantium consectetur ab pariatur reprehenderit vel necessitatibus esse. Explicabo consequatur voluptatem commodi nulla amet possimus illum cum assumenda dignissimos neque, est dolore omnis veritatis facilis itaque qui maiores et veniam, obcaecati fuga eos sit velit? Deserunt, odit consectetur. Ipsum repellat harum exercitationem sequi magni! Aliquam dolore maiores alias, consequuntur libero, temporibus harum odit rem aliquid debitis sint. Veritatis ducimus delectus corrupti dolor error rem nostrum quibusdam temporibus neque! ",
      },
      {
         title: "Blog five",
         description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, iusto nesciunt laboriosam recusandae vitae sed blanditiis quas eius consectetur sunt suscipit, aut dolor quia numquam expedita excepturi voluptatem beatae fuga. Ipsam praesentium autem, officia quas sit sed cum aliquid perferendis in suscipit alias, ipsum similique unde voluptatem temporibus omnis distinctio. Recusandae eius dolore libero ut aliquid similique distinctio nesciunt quia? Nihil maxime esse quis quae cum autem non praesentium, exercitationem accusamus harum expedita veritatis tempora, blanditiis adipisci aut! Iste animi molestiae libero beatae maxime magnam nam nostrum ab, fugiat illum? Exercitationem ut est blanditiis dolores perspiciatis doloremque vero vel unde maxime soluta non debitis error delectus voluptates, saepe nihil quasi. Deserunt quasi laudantium consectetur ab pariatur reprehenderit vel necessitatibus esse. Explicabo consequatur voluptatem commodi nulla amet possimus illum cum assumenda dignissimos neque, est dolore omnis veritatis facilis itaque qui maiores et veniam, obcaecati fuga eos sit velit? Deserunt, odit consectetur. Ipsum repellat harum exercitationem sequi magni! Aliquam dolore maiores alias, consequuntur libero, temporibus harum odit rem aliquid debitis sint. Veritatis ducimus delectus corrupti dolor error rem nostrum quibusdam temporibus neque! Itaque corporis reiciendis porro reprehenderit quisquam, ",
      },
      {
         title: "Blog sex",
         description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, iusto nesciunt laboriosam recusandae vitae sed blanditiis quas eius consectetur sunt suscipit, aut dolor quia numquam expedita excepturi voluptatem beatae fuga. Ipsam praesentium autem, officia quas sit sed cum aliquid perferendis in suscipit alias, ipsum similique unde voluptatem temporibus omnis distinctio. Recusandae eius dolore libero ut aliquid similique distinctio nesciunt quia? Nihil maxime esse quis quae cum autem non praesentium, exercitationem accusamus harum expedita veritatis tempora, blanditiis adipisci aut! Iste animi molestiae libero beatae maxime magnam nam nostrum ab, fugiat illum? Exercitationem ut est blanditiis dolores perspiciatis doloremque vero vel unde maxime soluta non debitis error delectus voluptates, ",
      },
   ],
   products: [
      {
         title: "Product one",
         category: "Women",
         subcategory: "Dresses",
         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, iusto nesciunt laboriosam recusandae vitae sed blanditiis quas eius consectetur sunt suscipit, aut dolor quia numquam expedita excepturi voluptatem beatae fuga. Ipsam praesentium autem",
         price: "70.00",
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
            ,{
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
         price: "70.00",
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
         title: "Product three",
         category: "Women",
         subcategory: "Dresses",
         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, iusto nesciunt laboriosam recusandae vitae sed blanditiis quas eius consectetur sunt suscipit, aut dolor quia numquam expedita excepturi voluptatem beatae fuga. Ipsam praesentium autem",
         price: "50.00",
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
         price: "100.00",
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
         price: "89.00",
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
         price: "160.00",
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
      {
         title: "Product seven",
         category: "Women",
         subcategory: "Dresses",
         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, iusto nesciunt laboriosam recusandae vitae sed blanditiis quas eius consectetur sunt suscipit, aut dolor quia numquam expedita excepturi voluptatem beatae fuga. Ipsam praesentium autem",
         price: "70.00",
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
         title: "Product 8",
         category: "Women",
         subcategory: "Dresses",
         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, iusto nesciunt laboriosam recusandae vitae sed blanditiis quas eius consectetur sunt suscipit, aut dolor quia numquam expedita excepturi voluptatem beatae fuga. Ipsam praesentium autem",
         price: "100.00",
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
         price: "90.00",
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
         category: "Kids",
         subcategory: "Dresses",
         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, iusto nesciunt laboriosam recusandae vitae sed blanditiis quas eius consectetur sunt suscipit, aut dolor quia numquam expedita excepturi voluptatem beatae fuga. Ipsam praesentium autem",
         price: "99.00",
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
         category: "Men",
         subcategory: "Dresses",
         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, iusto nesciunt laboriosam recusandae vitae sed blanditiis quas eius consectetur sunt suscipit, aut dolor quia numquam expedita excepturi voluptatem beatae fuga. Ipsam praesentium autem",
         price: "80.00",
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
   ],
   category :[
      {
         value :"Men",
         label :"Men",
      },
      {
         value :"Women",
         label :"Women",
      },
      {
         value :"Kids",
         label :"Kids",
      },
   ],
   subcategory :[
      {
         checked :false,
         label :"Dresses",
      },
      {
         checked :false,
         label :"Jeans",
      },
      {
         checked :false,
         label :"T-Shirt",
      },
      {
         checked :false,
         label :"Shorts",
      },
      {
         checked :false,
         label :"Skirts",
      },
   ],
   rating : [
      {
         value :"1",
         label :"1",
      },
      {
         value :"2",
         label :"2",
      },
      {
         value :"3",
         label :"3",
      },
      {
         value :"4",
         label :"4",
      },
      {
         value :"5",
         label :"5",
      },
   ]

};

export default data;
