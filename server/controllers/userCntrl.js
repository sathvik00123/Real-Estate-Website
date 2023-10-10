import asyncHandler from "express-async-handler";
import { prisma } from "../config/prismaConfig.js";

export const createUser = asyncHandler(async (req, res) => {
  let { email } = req.body;

  const userExists = await prisma.user.findUnique({ where: { email: email } });

  if (!userExists) {
    const user = await prisma.user.create({ data: req.body });
    res.status(200).send({
      message: "User registered successfully",
      user: user,
    });
  } else {
    res.status(201).send({ message: "User already exist." });
  }
});

// function to visit a residency
export const bookVisit = asyncHandler(async (req, res) => {
  const { email, date } = req.body;
  const { id } = req.params;

  try {
    const alreadyBooked = await prisma.user.findUnique({
      where: { email },
      select: { bookedVisits: true },
    });

    if (alreadyBooked.bookedVisits.some((visit) => visit.id === id)) {
      res
        .status(400)
        .json({ message: "This residency is already booked by you" });
    } else {
      await prisma.user.update({
        where: { email: email },
        data: {
          bookedVisits: { push: { id, date } },
        },
      });
      res.send("Your visit is booked successfully.");
    }
  } catch (err) {
    throw new Error(err.message);
  }
});

// function that will return all the visit bookings
export const getAllBookings = asyncHandler(async (req, res) => {
  const { email } = req.body;

  try {
    const getAllBookings = await prisma.user.findUnique({
      where: { email },
      select: { bookedVisits: true },
    });
    res.header("Access-Control-Allow-Origin", "*");
    res.status(200).send(getAllBookings);
  } catch (err) {
    throw new Error(err.message);
  }
});

// function that will cancel the bookings
export const cancelBooking = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const { id } = req.params;

  try {
    const user = await prisma.user.findUnique({
      where: { email },
      select: { bookedVisits: true },
    });
    const index = user.bookedVisits.findIndex((visit) => visit.id === id);

    if (index === -1) {
      res.status(404).json({ message: "Booking not found" });
    } else {
      user.bookedVisits.splice(index, 1);
      await prisma.user.update({
        where: { email },
        data: {
          bookedVisits: user.bookedVisits,
        },
      });
      res.send("Booking cancelled successfully");
    }
  } catch (err) {
    throw new Error(err.message);
  }
});

// function that will add or remove the favResidencies
export const toFav = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const { rid } = req.params;

  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (user.favResidenciesID.includes(rid)) {
      const updateUser = await prisma.user.update({
        where: { email },
        data: {
          favResidenciesID: {
            set: user.favResidenciesID.filter((id) => id !== rid),
          },
        },
      });
      res.send({message : "Removed from favorites", user: updateUser})
    }else{
        const updateUser = await prisma.user.update({
            where : {email},
            data : {
                favResidenciesID : {
                    push : rid
                }
            }
        })
        res.send({message: "Updated favorites", user : updateUser })
    }
  } catch (err) {
    throw new Error(err.message);
  }
});

// function that return all the favResidencies
export const allFav = asyncHandler(async (req, res) => {
    const {email} = req.body

    try {
        const favResidencies = await prisma.user.findUnique({
            where: {email},
            select : {favResidenciesID : true}
        })
        res.status(200).send(favResidencies)

    } catch (err) {
        throw new Error(err.message)
    }
})
