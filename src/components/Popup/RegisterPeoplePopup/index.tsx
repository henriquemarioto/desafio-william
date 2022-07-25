import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IoMdClose } from "react-icons/io";
import Popup from "..";
import { Form } from "./style";
import { Input } from "../../Input";
import { Select } from "../../Select";
import toast from "react-hot-toast";
import usePeople, { CreatePeople } from "../../../providers/people";
import setAddress from "../../../utils/setAddress";
import Button from "../../Button";

interface Props {
  setShowPopup: any;
  refreshPeopleList: any;
}

const RegisterPeoplePopup = ({ setShowPopup, refreshPeopleList }: Props) => {
  const { createPeople } = usePeople();

  const registerPeople = async (data: CreatePeople) => {
    await createPeople(data);
  };

  const formSchema = yup.object().shape({
    full_name: yup.string().required("Full name required"),
    surname: yup.string().required("Surname required"),
    cpf: yup.string().required("Cpf required").length(11),
    cellphone: yup.string().required("Cellphone required").length(11),
    gender: yup.string().required("Gender required"),
    street: yup.string().required("Street required"),
    number: yup.string().required("Number required"),
    district: yup.string().required("District required"),
    city: yup.string().required("City required"),
    state: yup.string().required("State required"),
    comments: yup.string(),
    image: yup.mixed().required("Image required"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = async (data: any) => {
    data.address = setAddress(data);
    data.image = data.image[0];

    try {
      await registerPeople(data);
      toast.success("Successful");
      reset();
      refreshPeopleList();
      setShowPopup(false);
    } catch (error) {
      toast.error("Failed");
      console.log(error);
    }
  };

  console.log(errors)

  return (
    <Popup title="Register people" setShowPopup={setShowPopup}>
      <Form
        onSubmit={handleSubmit(onSubmitFunction)}
        encType="multipart/form-data"
      >
        <Input
          title="Full name"
          err={errors?.full_name?.message as string | undefined}
          {...register("full_name")}
        />
        <Input
          title="Surname"
          err={errors?.surname?.message as string | undefined}
          {...register("surname")}
        />
        <Input
          title="Cpf"
          type="number"
          err={errors?.cpf?.message as string | undefined}
          {...register("cpf")}
        />
        <Input
          title="Cellphone"
          type="number"
          err={errors?.cellphone?.message as string | undefined}
          {...register("cellphone")}
        />
        <Select title="Gender" {...register("gender")}>
          <option value="M">M</option>
          <option value="F">F</option>
        </Select>
        <Input
          title="Street"
          err={errors?.street?.message as string | undefined}
          {...register("street")}
        />
        <Input
          title="Number"
          err={errors?.number?.message as string | undefined}
          {...register("number")}
        />
        <Input
          title="District"
          err={errors?.district?.message as string | undefined}
          {...register("district")}
        />
        <Input
          title="City"
          err={errors?.city?.message as string | undefined}
          {...register("city")}
        />
        <Input
          title="State"
          err={errors?.state?.message as string | undefined}
          {...register("state")}
        />
        <Input
          title="Comments"
          err={errors?.comments?.message as string | undefined}
          {...register("comments")}
        />
        <Input
          title="Avatar image"
          err={errors?.image?.message as string | undefined}
          type="file"
          accept="image/png, image/jpeg, image/jfif"
          {...register("image")}
        />
        <Button type="submit">Cadastrar</Button>
      </Form>
    </Popup>
  );
};

export default RegisterPeoplePopup;
