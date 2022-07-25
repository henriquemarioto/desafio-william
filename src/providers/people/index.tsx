import { createContext, ReactNode, useContext, useState } from "react";
import api from "../../service/api";

export interface CreatePeople {
  full_name: string;
  cpf: string;
  surname: string;
  gender: string;
  cellphone: string;
  address: string;
  comments: string | null;
  image: string;
}

export interface People extends Omit<CreatePeople, "image"> {
  id: string;
  image_url: string;
  created_at: string;
  updated_at: string;
}

interface ContextProps {
  createPeople: (data: CreatePeople) => Promise<People>;
  listPeople: () => Promise<People[]>;
  updatePeople: (id: string, data: CreatePeople) => Promise<People>;
  deletePeople: (id: string) => Promise<void>;
}

interface ProviderProps {
  children: ReactNode;
}

export const PeopleContext = createContext<ContextProps>({} as ContextProps);

export const PeopleProvider = ({ children }: ProviderProps) => {
  const createPeople = async (data: CreatePeople) => {
    const res = await api.post("/people", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return res.data
  }

  const listPeople = async () => {
    const res = await api.get("/people")
    return res.data
  }

  const updatePeople = async (id: string, data: CreatePeople) => {
    const res = await api.patch(`/people/${id}`, data)
    return res.data
  }

  const deletePeople = async (id: string) => {
    await api.delete(`/people/${id}`);
  }

  return (
    <PeopleContext.Provider
      value={{ listPeople, createPeople, updatePeople, deletePeople }}
    >
      {children}
    </PeopleContext.Provider>
  );
};

export default function usePeople() {
  return useContext(PeopleContext);
}
