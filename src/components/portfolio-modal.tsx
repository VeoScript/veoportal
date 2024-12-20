import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { motion, AnimatePresence } from "framer-motion";
import { CloseIcon, NextIcon, PreviousIcon } from "~/utils/icons";

import { projects } from "~/constants/projects";

const PortfolioModal = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const openModal = (index: number) => {
    setCurrentProjectIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const nextProject = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
  };

  const prevProject = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
  };

  const { src, title, description, demo, sourceCode } = projects[currentProjectIndex];

  return (
    <>
      <div className="flex items-center justify-center space-x-4">
        <Button
          onClick={() => openModal(currentProjectIndex)}
          className="custom-button-black dark:custom-button-dim-gray px-10 py-4 text-xs"
        >
          View Portfolio
        </Button>
      </div>

      <Dialog
        open={isOpen}
        as="div"
        className="relative z-30 focus:outline-none"
        onClose={closeModal}
      >
        <div className="fixed inset-0 z-50 w-screen overflow-hidden bg-default-white bg-opacity-80 backdrop-blur-md md:overflow-y-auto md:backdrop-blur-sm dark:bg-default-black dark:bg-opacity-80 dark:backdrop-blur-md">
          <div className="flex min-h-full items-center justify-center p-0 md:p-4">
            <DialogPanel className="relative h-screen w-full max-w-[70rem] overflow-y-auto rounded-none bg-none p-0 md:h-full md:rounded-xl md:bg-default-ghost-white md:p-4 dark:bg-none md:dark:bg-default-dim-black">
              <Button
                title="Previous"
                aria-label="Previous"
                className="absolute right-3 top-3 rounded-full bg-default-dim-black bg-opacity-50 p-1 text-xs text-white transition duration-300 ease-in-out hover:opacity-50 md:right-6 md:top-6"
                onClick={closeModal}
              >
                <CloseIcon className="h-5 w-5" />
              </Button>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="w-full"
                  >
                    <motion.div
                      key={currentProjectIndex}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                      className="w-full"
                    >
                      <Image
                        className="mb-5 h-[20rem] w-full rounded-none bg-neutral-300 object-contain md:h-[60vh] md:rounded-xl dark:bg-neutral-700"
                        src={src}
                        alt={title}
                        priority
                        width={500}
                        height={500}
                        quality={100}
                        placeholder="blur"
                        blurDataURL={src}
                      />
                    </motion.div>
                    <div className="flex w-full flex-col gap-y-5 p-3 md:p-0">
                      <DialogTitle as="h2" className="text-lg font-semibold">
                        {title}
                      </DialogTitle>
                      <p className="text-sm">{description}</p>
                      <div className="mt-5 flex w-full flex-row items-center justify-between">
                        <div className="space-x-2">
                          {demo && (
                            <Link
                              href={demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="custom-button-white dark:custom-button-black border-nuetral-300 rounded-xl border px-5 py-3 text-xs md:border-none dark:border-neutral-700"
                            >
                              View Demo
                            </Link>
                          )}
                          {sourceCode && (
                            <Link
                              href={sourceCode}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="custom-button-white dark:custom-button-black border-nuetral-300 rounded-xl border px-5 py-3 text-xs md:border-none dark:border-neutral-700"
                            >
                              Source Code
                            </Link>
                          )}
                        </div>
                        <div className="flex flex-row items-center gap-x-3">
                          <Button
                            title="Previous"
                            aria-label="Previous"
                            className="rounded-full bg-default-dim-black bg-opacity-50 p-2 text-xs text-white transition duration-300 ease-in-out hover:opacity-50 md:p-3 dark:bg-default-black dark:bg-opacity-100"
                            onClick={prevProject}
                          >
                            <PreviousIcon className="h-6 w-6" />
                          </Button>
                          <Button
                            title="Next"
                            aria-label="Next"
                            className="rounded-full bg-default-dim-black bg-opacity-50 p-2 text-xs text-white transition duration-300 ease-in-out hover:opacity-50 md:p-3 dark:bg-default-black dark:bg-opacity-100"
                            onClick={nextProject}
                          >
                            <NextIcon className="h-6 w-6" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default PortfolioModal;
