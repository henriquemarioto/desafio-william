import Popup from "..";
import usePeople, { People } from "../../../providers/people";
import { Input } from "../../Input";
import { Select } from "../../Select";
import { ButtonsContainer, Form, ImageContainer } from "./style";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import Button from "../../Button";
import { FaSave, FaTrash, FaUserEdit } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import theme from "../../../styles/theme";
import toast from "react-hot-toast";
import setAddress from "../../../utils/setAddress";

interface Props {
  setShowPopup: any;
  refreshPeopleList: any;
  people: People;
}

const DetailPeoplePopup = ({
  setShowPopup,
  refreshPeopleList,
  people,
}: Props) => {
  const { updatePeople, deletePeople } = usePeople();

  const [isEditing, setIsediting] = useState<boolean>(false);
  const [confirmDelete, setConfirmaDelete] = useState<boolean>(false);

  const handleDeletePeople = async () => {
    try {
      await deletePeople(people.id);
      toast.success("Successful");
      await refreshPeopleList();
      setShowPopup(false);
    } catch (error) {
      toast.error("Something wrong")
      console.log(error)
    }
  };

  const formSchema = yup.object().shape({
    full_name: yup.string().required("Full name required"),
    surname: yup.string().required("Surname required"),
    cpf: yup.string().required("Cpf required"),
    gender: yup.string().required("Gender required"),
    cellphone: yup.string().required("Cellphone required"),
    street: yup.string().required("Street required"),
    number: yup.string().required("Number required"),
    district: yup.string().required("District required"),
    city: yup.string().required("City required"),
    state: yup.string().required("State required"),
    comments: yup.string(),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  console.log(errors);

  const onSubmitFunction = async (data: any) => {
    data.address = setAddress(data);

    try {
      await updatePeople(people.id, data);
      toast.success("Successful");
      reset();
      refreshPeopleList();
      setShowPopup(false);
    } catch (error) {
      toast.error("Failed");
      console.log(error);
    }
  };

  return (
    <Popup title="Profile" setShowPopup={setShowPopup}>
      <Form onSubmit={handleSubmit(onSubmitFunction)}>
        <ImageContainer>
          <img src={people?.image_url} />
          {/* <input
            type="file"
            accept="image/png, image/jpeg, image/jfif"
            {...register("image")}
          /> */}
        </ImageContainer>

        <Input
          disabled={!isEditing}
          title="Full name"
          defaultValue={people?.full_name}
          {...register("full_name")}
        />
        <Input
          disabled={!isEditing}
          title="Surname"
          {...register("surname")}
          defaultValue={people?.surname}
        />
        <Input
          disabled={!isEditing}
          title="Cpf"
          {...register("cpf")}
          defaultValue={people?.cpf}
        />
        <Select disabled={!isEditing} title="Gender" {...register("gender")}>
          <option defaultValue="M">M</option>
          <option defaultValue="F">F</option>
        </Select>
        <Input
          disabled={!isEditing}
          title="Cellphone"
          {...register("cellphone")}
          defaultValue={people?.cellphone}
        />
        <Input
          disabled={!isEditing}
          title="Street"
          {...register("street")}
          defaultValue={people?.address.split(", ")[0]}
        />
        <Input
          disabled={!isEditing}
          title="Number"
          {...register("number")}
          defaultValue={people?.address.split(", ")[1]}
        />
        <Input
          disabled={!isEditing}
          title="District"
          {...register("district")}
          defaultValue={people?.address.split(", ")[2]}
        />
        <Input
          disabled={!isEditing}
          title="City"
          {...register("city")}
          defaultValue={people?.address.split(", ")[3]}
        />
        <Input
          disabled={!isEditing}
          title="State"
          {...register("state")}
          defaultValue={people?.address.split(", ")[4]}
        />
        <Input
          disabled={!isEditing}
          title="Comments"
          {...register("comments")}
          defaultValue={people?.surname}
        />

        <ButtonsContainer>
          {!isEditing ? (
            <>
              <Button type="button" onClick={() => setIsediting(true)}>
                <FaUserEdit />
                Edit
              </Button>

              {!confirmDelete ? (
                <Button
                  color={theme.colors.red}
                  type="button"
                  onClick={() => setConfirmaDelete(true)}
                >
                  <FaTrash />
                  Delete
                </Button>
              ) : (
                <Button
                  color={theme.colors.red}
                  type="button"
                  onClick={handleDeletePeople}
                >
                  Confirm delete?
                </Button>
              )}
            </>
          ) : (
            <>
              <Button color={theme.colors.green} type="submit">
                <FaSave />
                Save
              </Button>
              <Button
                color={theme.colors.yellow}
                type="button"
                onClick={() => setIsediting(false)}
              >
                <IoMdClose />
                Cancel
              </Button>
            </>
          )}
        </ButtonsContainer>
      </Form>
    </Popup>
  );
};

export default DetailPeoplePopup;
