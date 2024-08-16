"use client";
import React from "react";
import { AnimatedTooltip } from "../ui/Tooltip";

// Define the people array without TypeScript types
const people = [
  {
    id: 1,
    name: "Facebook",
    designation: "https://www.facebook.com/app.o.3367?mibextid=ZbWKwL",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/640px-Facebook_logo_%28square%29.png",
  },
  {
    id: 2,
    name: "Discord",
    designation: "discordapp.com/users/629537698972958730",
    image:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9d2b8def-7b8d-4476-800d-597e3fcb5f07/dgt0pmh-6b1f2ed0-bcac-42da-92d3-4ef3dae67671.jpg/v1/fill/w_800,h_800,q_75,strp/discord_logo_hd_by_ijungakrom_dgt0pmh-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODAwIiwicGF0aCI6IlwvZlwvOWQyYjhkZWYtN2I4ZC00NDc2LTgwMGQtNTk3ZTNmY2I1ZjA3XC9kZ3QwcG1oLTZiMWYyZWQwLWJjYWMtNDJkYS05MmQzLTRlZjNkYWU2NzY3MS5qcGciLCJ3aWR0aCI6Ijw9ODAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.vpmXlAP3PkcjUmMN8TTVo5zgV6o0WrCci22uOwyhUDE",
  },
  {
    id: 3,
    name: "Telegram",
    designation: "https://t.me/AungPaingOo2277",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSAsBVbekAD5AvjqkMwL9h7cr4IA_Tc6diG7NOiKxo3w5vPIfJnFOhcW46C_OBjYqCvhE&usqp=CAU",
  },
];

export default function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
