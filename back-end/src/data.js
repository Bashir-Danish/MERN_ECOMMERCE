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
};

export default data ;