"use client";

import * as Select from "@radix-ui/react-select";
import { Icon } from "@iconify/react";
import { useState } from "react";

interface Course {
  id: number;
  name: string;
  price: string;
  icon: string;
}

const SelectMenu = () => {
  const courses: Course[] = [
    {
      id: 1,
      name: "DSA",
      price: "$100",
      icon: "solar:structure-bold",
    },
    {
      id: 2,
      name: "OS",
      price: "$80",
      icon: "carbon:laptop",
    },
    {
      id: 3,
      name: "DBMS",
      price: "$70",
      icon: "ph:database",
    },
    {
      id: 4,
      name: "CN",
      price: "$60",
      icon: "gis:network-o",
    },
  ];

  const [currentCoursePrice, setCurrentCoursePrice] = useState<string>();

  return (
    <>
      <div className="flex w-70 items-center">
        <div className="w-2/3 rounded-s-xl border-y border-l px-4 py-3">
          <Select.Root
            onValueChange={(val) => {
              setCurrentCoursePrice(val);
            }}
            value={currentCoursePrice}
          >
            <Select.Trigger className="flex w-full justify-between text-base text-neutral-500 outline-none">
              <Select.Value placeholder="Select a course"></Select.Value>
              <Select.Icon>
                <Icon
                  icon="iconamoon:arrow-up-2-light"
                  className="h-6 w-6"
                  rotate={2}
                />
              </Select.Icon>
            </Select.Trigger>
            <Select.Portal>
              <Select.Content
                position="popper"
                className="ml-[-14px] mt-4 w-44 rounded-2xl bg-white px-5 pb-3 pt-5 shadow-2xl"
              >
                <Select.Viewport>
                  <Select.Group>
                    {courses.map((course) => (
                      <Select.Item
                        value={course.price}
                        className="mb-3 cursor-pointer text-base font-normal text-neutral-500 outline-none hover:text-neutral-700"
                        key={course.id}
                      >
                        <Select.ItemText>
                          <div className="flex items-center">
                            <Icon icon={course.icon} className="mr-2" />
                            <span>{course.name}</span>
                          </div>
                        </Select.ItemText>
                      </Select.Item>
                    ))}
                  </Select.Group>
                </Select.Viewport>
              </Select.Content>
            </Select.Portal>
          </Select.Root>
        </div>

        <div className="flex w-1/3 items-center justify-center rounded-e-xl border py-3 text-base text-neutral-500">
          {currentCoursePrice ? currentCoursePrice : "$0"}
        </div>
      </div>
    </>
  );
};

export default SelectMenu;
