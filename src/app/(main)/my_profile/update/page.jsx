'use client'

import { Button, Form, Input, Label, Modal, TextField } from "@heroui/react";
import { useForm } from "react-hook-form";
import { CgProfile } from "react-icons/cg";
import { authClient } from "@/lib/auth-client"
import { toast } from "react-toastify";
import Link from "next/link";
import { redirect, RedirectType } from "next/navigation";
 
export default function ModalPage() { 

  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const MysubmitData = async (data) => {
    console.log(data?.name, data?.image);
    const { name, image } = data;
    await authClient.updateUser({
      image: image,
      name: name,
    })
    redirect('/my_profile', RedirectType.push)

  }
  return (
    <div className="flex flex-wrap gap-4">
      <Modal  >
        <Modal variant={"blur"}>
          <Modal.Dialog className="sm:max-w-[360px]   gap-3 backdrop-blur-[5px] bg-white/3 text-white w-11/12 mx-auto shadow   mt-5 py-15 rounded-2xl space-y-1 shadow-[inset_0_2px_10px_rgba(3,3,3,1)]  shadow-white/10">
            <Modal.Header className="pb-5 flex items-center text-center justify-center">
              <Modal.Icon className="bg-default text-foreground text-white">
                <CgProfile className="size-5" />
              </Modal.Icon>
              <Modal.Heading className="text-2xl  text-white" >
                Edit Profile
              </Modal.Heading>
            </Modal.Header>
            <Form onSubmit={handleSubmit(MysubmitData)}>
              <div className={`flex flex-col space-y-2 gap-3    mb-5`}>
                <TextField
                  isRequired
                  name="name"
                  type="text"
                >
                  <Label className="text-white">Name</Label>
                  <Input placeholder="Enter your Name" className={`rounded-full`} {...register("name")} />
                </TextField>
                <TextField
                  isRequired
                  name="image"
                  type="text"
                >
                  <Label className="text-white">Image</Label>
                  <Input placeholder="Enter your Image link" className={`rounded-full`} {...register("image")} />
                </TextField>
              </div>
              <Modal.Footer slot="close">
                <Link href={'/my_profile'} className="w-full">
                  <Button className="w-full" type="submit" slot="close" onClick={() => toast('🤩 Updated you data!')}>
                    Submit
                  </Button>
                </Link>
              </Modal.Footer>
            </Form>
          </Modal.Dialog>
        </Modal>
      </Modal>
    </div>
  );
}