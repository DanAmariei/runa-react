import * as Dialog from "@radix-ui/react-dialog";
import React, { Fragment } from "react";
import { Transition } from "@headlessui/react";
import {
  XMarkIcon,
  Bars3BottomRightIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const RadixDrawer = () => {
  const [open, setOpen] = React.useState(false);

  let links = [
    { name: "HOME", link: "/" },
    { name: "Runa Calculator", link: "/runa-calculator" },
    { name: "Formule Runice", link: "/formule-runice" },
    { name: "BLOG'S", link: "/" },
    { name: "CONTACT", link: "/" },
  ];

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button className="cursor-pointer hover:bg-slate-200 rounded-full ml-2 p-1">
          <Bars3BottomRightIcon className="h-6 w-6" />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal forceMount>
        <Transition.Root show={open}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay
              forceMount
              className="DialogOverlay fixed transition-all duration-200 inset-0 bg-gray-500 bg-opacity-40 
              overflow-y-auto  w-full"
            />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 right-[-260px]"
            enterTo="opacity-100 right-0"
            leave="ease-in duration-300"
            leaveFrom="opacity-100 right-0"
            leaveTo="opacity-0 right-[-260px]"
          >
            {/* fixed top-0 right-0 h-full shadow-xl p-2 delay-400 duration-500 
            ease-in-out transition-all transform translate-x-0
             */}
            <Dialog.Content
              forceMount
              className="bg-white fixed top-0 h-full 

              overflow-y-auto z-10
                 py-2 max-w-[260px]"
            >
              <Dialog.Title className="flex items-center h-[60px]">
                <p className="text-base font-bold">Runa</p>
                <Dialog.Close asChild>
                  <button
                    className="cursor-pointer hover:bg-slate-200 rounded-full p-1 flex justify-center items-center ml-auto"
                    aria-label="Close"
                  >
                    <XMarkIcon className="w-6 h-6" />
                  </button>
                </Dialog.Close>
              </Dialog.Title>

              <div className="flex flex-col gap-1 w-[250px]">
                {links.map((linkObj) => (
                  <Link
                    to={linkObj.link}
                    className="hover:bg-gray-200 duration-150 p-2"
                    key={linkObj.link}
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    <span className="font-semibold text-gray-500">
                      {linkObj.name}
                    </span>
                  </Link>
                ))}
              </div>
            </Dialog.Content>
          </Transition.Child>
        </Transition.Root>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default RadixDrawer;
