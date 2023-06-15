"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";

import { getPhoto } from "@/lib/unsplash";

export default function DynamicModalSinglePhoto({ params }) {
  const router = useRouter();
  const [photo, setPhoto] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(true);

  useEffect(() => {
    getPhoto(params.id).then((res) => setPhoto(res));
  }, [params]);

  return (
    <>
      <Dialog.Root open={isModalOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/70" />

          <Dialog.DialogContent className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            {/* content */}
            <div className="mx-auto max-h-[800px] max-w-[800px] overflow-hidden bg-white">
              <div className="h-[600px] w-[600px]">
                <Image
                  src={photo?.data?.urls?.regular}
                  width={600}
                  height={600}
                  alt={photo?.data?.alt_description}
                  className="h-[600px] w-[600px] object-cover"
                  priority
                />
              </div>

              <div className="p-2">
                <h3 className="text-2xl font-semibold text-gray-800">{photo?.data?.user?.name}</h3>
                <h4 className="text-lg font-normal text-gray-600">
                  Taken by{" "}
                  <a
                    href={`https://www.instagram.com/${photo?.data?.user?.social?.instagram_usernamem}/`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-gray-700"
                  >
                    {`@${photo?.data?.user?.social?.instagram_username}`}
                  </a>
                </h4>
              </div>
            </div>

            <Dialog.Close
              asChild
              onClick={() => {
                setIsModalOpen(false);
                router.back();
              }}
            >
              <button
                className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
                aria-label="Close"
              >
                X
              </button>
            </Dialog.Close>
          </Dialog.DialogContent>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}
