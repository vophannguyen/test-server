const prisma = require("../prisma");

/** Seeds the database with a user and some tasks */
const seed = async () => {
  await prisma.student.create({
    data: {
      firstName: "Nguyen",
      lastName: "Vo",
      email: "vophannguyen@gmail.com",
      imageUrl:
        "https://as1.ftcdn.net/v2/jpg/03/46/83/96/1000_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg",
      gpa: 3.9,
    },
  });
  await prisma.student.create({
    data: {
      firstName: "Anna",
      lastName: "WaterHouse",
      email: "anna@gmail.com",
      imageUrl:
        "https://as1.ftcdn.net/v2/jpg/03/46/83/96/1000_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg",
      gpa: 3.9,
    },
  });
  await prisma.student.create({
    data: {
      firstName: "Courtney",
      lastName: "Snyder",
      email: "court@gmail.com",
      imageUrl:
        "https://as1.ftcdn.net/v2/jpg/03/46/83/96/1000_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg",
      gpa: 3.9,
    },
  });
  await prisma.student.create({
    data: {
      firstName: "Haru",
      lastName: "Grossman",
      email: "haru@gmail.com",
      imageUrl:
        "https://as1.ftcdn.net/v2/jpg/03/46/83/96/1000_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg",
      gpa: 3.9,
    },
  });
};

seed()
  .then(async () => await prisma.$disconnect())
  .catch(async (err) => {
    console.error(err);
    await prisma.$disconnect();
    process.exit(1);
  });
