"use client"
import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Avatar, { Piece } from "avataaars";

const EyeType = [
  "EyeRoll",
  "Hearts",
  "WinkWacky",
  "Wink",
  "Surprised",
  "Squint",
  "Side",
  "Hearts",
  "Happy",
  "EyeRoll",
  "Dizzy",
  "Default",
  "Cry",
  "Close",
];
const Top = [
  "NoHair",
  "EyePatch",
  "Hat",
  "Hajab",
  "Turban",
  "WinterHat1",
  "WinterHat2",
  "WinterHat3",
  "LongHairBigHair",
  "LongHairBob",
  "LongHairBun",
  "LongHairCrly",
  "LongHairCurvy",
  "LongHairDreads",
  "LongHairFrida",
  "LongHairFro",
  "LongHairFroBand",
];
const Clothes = [
  "BlazerShirt",
  "BlazerSweater",
  "CollarSweater",
  "GraphicShirt",
  "Hoodie",
  "Overall",
  "ShirtCrewNeck",
  "ShirtScoopNeck",
  "ShirtVNeck",
];
const HairColor = [
  "Auburn",
  "Black",
  "Blonde",
  "BlondeGolden",
  "Brown",
  "BrownDark",
  "Red",
  "Platinum",
];
const Mouth = [
  "Vomit",
  "Twinkle",
  "Tongue",
  "Smile",
  "Serious",
  "ScreamOpen",
  "Sad",
  "Grimace",
  "Eating",
  "Disblief",
  "Default",
  "Concerned",
];
const SignUp = () => {

  const [signupdata, setsignupdata] = useState({
    name: "",
    email: "",
    password: "",
    avatar: {},
  });
  const [avatardata, setavatardata] = useState({
    eyes: "Default",
    clothes: "Default",
    hair: "Default",
    mouth: "Default",
    top: "NoHair",
  });
  const [tabs, settabs] = useState("eyes");
  const [showmenue, setshowmenue] = useState(false);
  const [color, setcolor] = useState("Red");
  const HandleSubmit = async () => {

    try {
    const response=await getpost()
    console.log("Response",response)
  } catch(error) {
    // Ensures that the client will close when you finish/error
    // await mongoose.disconnect();
    console.log("ERROR___")
  }
  };
  // Animation variants for staggered items
  const staggerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Delay between each child animation
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 }, // Start hidden and below
    show: { y: 0, opacity: 1, transition: { duration: 0.5 } }, // Animate to visible position
  };
  function AvatarModel(){
    return(
        <div className="z-50">
              {[...Array(6)].map((index) => (
                
                <div key={index} className={`absolute top-[40%] text-3xl text-red-800`}>
                  -
                </div>
              ))}

              <motion.div
                inital={{ x: -20, opacity: 0 }}
                animate={{
                  x: 0,
                  opacity: 1,
                  transition: { duration: 2, delay: 1 },
                }}
                exit={{ x: -20, opacity: 0 }}
                className="overflow-hidden absolute -top-[80px] left-[400px] min-w-[95%] h-[340px] z-50 px-2 py-4 bg-white"
              >
                <div>
                  <ul className="flex gap-4">
                    <li onClick={() => settabs("eyes")}>Eyes</li>
                    <li onClick={() => settabs("clothes")}>Clothes</li>
                    <li onClick={() => settabs("hair")}>Hair</li>
                    <li onClick={() => settabs("mouth")}>Mouth</li>
                  </ul>
                  <div className="w-full mt-4">
                    {tabs == "eyes" && (
                      <div className="flex min-w-92 flex-wrap overflow-y-auto gap-4">
                        {EyeType.map((index, number) => (
                          <div
                          key={number}
                            onClick={() => {
                              setavatardata({ ...avatardata, eyes: index });
                            }}
                            className="h-16 w-16 flex justify-center items-center border rounded-md  shadow-md shadow-black"
                          >
                            <Piece
                              pieceType="eyes"
                              pieceSize="200"
                              eyeType={index}
                            />
                          </div>
                        ))}
                      </div>
                    )}
                    {tabs == "hair" && (
                      <>
                        <div>
                          <select
                            className="my-2"
                            onChange={(e) => {
                              setavatardata({
                                ...avatardata,
                                top: e.target.value,
                              });
                            }}
                          >
                            {Top.map((item) => (
                              <option key={item}>{item}</option>
                            ))}
                          </select>
                        </div>
                        <div className="flex min-w-92 flex-wrap overflow-y-auto gap-4">
                          {HairColor.map((index, number) => (
                            <div
                            key={number}
                              onClick={() => {
                                setavatardata({ ...avatardata, hair: index });
                              }}
                              className="h-16 w-16 flex justify-center items-center border rounded-md  shadow-md shadow-black"
                            >
                              <Piece
                                pieceType="top"
                                pieceSize="100"
                                topType={avatardata.top}
                                hairColor={index}
                              />
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                    {tabs == "mouth" && (
                      <div className="flex min-w-92 flex-wrap overflow-y-auto gap-4">
                        {Mouth.map((index, number) => (
                          <div
                          key={number}
                            onClick={() => {
                              setavatardata({ ...avatardata, mouth: index });
                            }}
                            className="h-16 w-16 flex justify-center items-center border rounded-md  shadow-md shadow-black"
                          >
                            <Piece
                              pieceType="mouth"
                              pieceSize="100"
                              mouthType={index}
                            />
                          </div>
                        ))}
                      </div>
                    )}
                    {tabs == "clothes" && (
                      <>
                        <ul className="flex flex-wrap my-2 gap-2">
                          <li
                            className="w-8 rounded-md h-8 bg-blue-600"
                            onClick={() => setcolor("White")}
                          ></li>
                          <li
                            className="w-8 rounded-md h-8 bg-pink-600"
                            onClick={() => setcolor("Pink")}
                          ></li>
                          <li
                            className="w-8 rounded-md h-8 bg-green-600"
                            onClick={() => setcolor("Red")}
                          ></li>
                          <li
                            className="w-8 rounded-md h-8 bg-black"
                            onClick={() => setcolor("Black")}
                          ></li>
                          <li
                            className="w-8 rounded-md h-8 bg-green-600"
                            onClick={() => setcolor("Blue01")}
                          ></li>
                          <li
                            className="w-8 rounded-md h-8 bg-green-600"
                            onClick={() => setcolor("Blue02")}
                          ></li>
                          <li
                            className="w-8 rounded-md h-8 bg-green-600"
                            onClick={() => setcolor("Blue03")}
                          ></li>
                          <li
                            className="w-8 rounded-md h-8 bg-green-600"
                            onClick={() => setcolor("Gray01")}
                          ></li>
                          <li
                            className="w-8 rounded-md h-8 bg-green-600"
                            onClick={() => setcolor("Gray02")}
                          ></li>
                          <li
                            className="w-8 rounded-md h-8 bg-green-600"
                            onClick={() => setcolor("PastelOrange")}
                          ></li>
                          <li
                            className="w-8 rounded-md h-8 bg-green-600"
                            onClick={() => setcolor("PastelRed")}
                          ></li>
                          <li
                            className="w-8 rounded-md h-8 bg-green-600"
                            onClick={() => setcolor("PastelYellow")}
                          ></li>
                        </ul>

                        <div className="flex min-w-92 flex-wrap overflow-y-auto gap-4">
                          {Clothes.map((index, number) => (
                            <div
                            key={number}
                              onClick={() => {
                                setavatardata({
                                  ...avatardata,
                                  clothes: index,
                                });
                              }}
                              className="h-16 w-16 flex justify-center items-center border rounded-md  shadow-md shadow-black"
                            >
                              <Piece
                                pieceType="clothe"
                                pieceSize="100"
                                clotheType={index}
                                clotheColor={color}
                              />
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
    )
  }
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      className="z-10 bg-black/50 w-96 py-10 rounded-xl"
    >
      <h1 className="text-stone-400 text-5xl text-center py-4">Sign up</h1>
      <motion.div
        variants={staggerVariants}
        initial="hidden"
        animate="show"
        className="relative w-full flex place-content-center cursor-pointer"
      >
        <motion.span
          variants={itemVariants}
          onClick={() => setshowmenue(!showmenue)}
        >
          <Avatar
            style={{ width: "100px", height: "100px" }}
            avatarStyle="Circle"
            topType={avatardata.top}
            accessoriesType="Prescription02"
            hairColor={avatardata.hair}
            facialHairType="Blank"
            clotheType={avatardata.clothes}
            clotheColor={color}
            eyeType={avatardata.eyes}
            eyebrowType="Default"
            mouthType={avatardata.mouth}
            skinColor="Light"
          />
        </motion.span>
        <AnimatePresence>
          {showmenue && AvatarModel()}
        </AnimatePresence>
      </motion.div>
      <motion.p
        variants={itemVariants}
        className="text-stone-400 text-xl  py-1 px-3"
      >
        Name
      </motion.p>
      <motion.input
        variants={itemVariants}
        type="text"
        className="mx-4 my-2 py-1.5 px-2 rounded-full w-[90%] z-20"
        onChange={(e) => {
          setsignupdata({ ...signupdata, name: e.target.value });
        }}
      />
      <motion.p
        variants={itemVariants}
        className="text-stone-400 text-xl  py-1 px-3"
      >
        Email
      </motion.p>
      <motion.input
        variants={itemVariants}
        type="text"
        className="mx-4 my-2 py-1.5 px-2 rounded-full w-[90%] z-20"
        onChange={(e) => {
          setsignupdata({ ...signupdata, email: e.target.value });
        }}
      />
      <motion.p
        variants={itemVariants}
        className="text-stone-400 text-xl  py-1 px-3"
      >
        Password
      </motion.p>
      <motion.input
        variants={itemVariants}
        type="text"
        className="mx-4 my-2 px-2 py-1.5 rounded-full w-[90%] z-20"
        onChange={(e) => {
          setsignupdata({ ...signupdata, password: e.target.value });
        }}
      />
      <motion.button
        variants={itemVariants}
        onClick={() => HandleSubmit()}
        className="bg-lime-900 my-2 text-center w-[90%] mx-3 rounded-full py-1.5 text-xl text-stone-400"
      >
        Sign up
      </motion.button>
    </motion.div>
  );
};

export default SignUp;
