import React, { useState, useEffect } from "react";
import { BentoGrid, BentoGridItem } from "./components/ui/BentoGrid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export default function BentoGridSecondDemo() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:8080/");
        const data = await res.json();
        setServices(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  // Dynamically create items array based on services
  const items =
    services.length > 0
      ? services.map((service, i) => ({
          title: service.service,
          image: service.image,
          description: service.description || "No description available.",
          header: React.createElement(Skeleton),
          className: i % 2 === 0 ? "md:col-span-2" : "md:col-span-1",
          icon:
            i === 0
              ? React.createElement(IconClipboardCopy, {
                  className: "h-4 w-4 text-neutral-500",
                })
              : i === 1
              ? React.createElement(IconFileBroken, {
                  className: "h-4 w-4 text-neutral-500",
                })
              : i === 2
              ? React.createElement(IconSignature, {
                  className: "h-4 w-4 text-neutral-500",
                })
              : React.createElement(IconTableColumn, {
                  className: "h-4 w-4 text-neutral-500",
                }),
        }))
      : [];

  return React.createElement(
    BentoGrid,
    { className: " max-h-3xl max-w-[1230px] mx-auto md:auto-rows-[20rem]" },
    items.length > 0
      ? items.map((item, i) =>
          React.createElement(BentoGridItem, {
            key: i,
            title: item.title,
            description: item.description,
            header: item.header,
            className: item.className,
            icon: item.icon,
            imageSrc: item.image,
          })
        )
      : React.createElement("p", null, "No services available")
  );
}

function Skeleton() {
  return React.createElement("div", {
    className:
      "flex flex-1 w-full h-full min-h-[0rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black",
  });
}
