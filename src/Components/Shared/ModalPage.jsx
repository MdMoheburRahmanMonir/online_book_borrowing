'use client'

import { Button, Form, Input, Label, Modal, TextField } from "@heroui/react";
import { useForm } from "react-hook-form";
import { BiEdit } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { authClient } from "@/lib/auth-client"
import { toast } from "react-toastify";


export function ModalPage() {

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

  }
  return (
    <div className="flex flex-wrap gap-4">

      <Modal  >
        <Button variant="secondary" className={`flex justify-center items-center text-center gap-2   mx-auto py-1 px-3 hover:bg-white/5 hover:text-blue-400/70  hover:shadow hover:shadow-white/[0.2] hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]  backdrop-blur-[2px] shadow shadow-white/[0.2] rounded-full   text-white  `}>
          <BiEdit /> 
        </Button>
        <Modal.Backdrop variant={"blur"}>
          <Modal.Container>
            <Modal.Dialog className="sm:max-w-[360px]   gap-4 backdrop-blur-[5px] bg-white/10  w-11/12 mx-auto shadow   mt-5 py-15 rounded-2xl space-y-1 shadow-[inset_0_2px_10px_rgba(3,3,3,1)]  shadow-white/10">
              <Modal.CloseTrigger />
              <Modal.Header className="pb-5">
                <Modal.Icon className="bg-default text-foreground text-white">
                  <CgProfile className="size-5" />
                </Modal.Icon>
                <Modal.Heading className="text-2xl text-white">
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
                  <Button className="w-full" type="submit" slot="close" onClick={() => toast('🤩 Updated you data!')}>
                    Submit
                  </Button>
                </Modal.Footer>
              </Form>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>

    </div>
  );
}