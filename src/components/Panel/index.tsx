import {
  Container,
  ContainerAddPeople,
  ContainerPeopleList,
  PeopleList,
} from "./style";
import { FaPlus, FaTrash, FaUserEdit } from "react-icons/fa";
import { useEffect, useState } from "react";
import usePeople, { CreatePeople, People } from "../../providers/people";
import RegisterPeoplePopup from "../Popup/RegisterPeoplePopup";
import { IoMdPerson } from "react-icons/io";
import DetailPeoplePopup from "../Popup/DetailPeoplePopup";
import Button from "../Button";
import theme from "../../styles/theme";

const Panel = () => {
  const { listPeople } = usePeople();

  const [showRegisterPopup, setShowRegisterPopup] = useState<boolean>(false);
  const [showDetailPopup, setShowDetailPopup] = useState<boolean>(false);
  const [peoples, setPeoples] = useState<People[] | undefined>();
  const [refreshPeoples, setRefreshPeoples] = useState<boolean>(false);
  const [selectedPeople, setSelectedPeople] = useState<People>();

  const getPeoples = async () => {
    const res = await listPeople();
    setPeoples(res);
  };

  const refreshPeopleList = () => {
    setRefreshPeoples(!refreshPeoples);
  };

  useEffect(() => {
    getPeoples();
  }, [refreshPeoples]);

  return (
    <Container>
      {showRegisterPopup && (
        <RegisterPeoplePopup
          setShowPopup={setShowRegisterPopup}
          refreshPeopleList={refreshPeopleList}
        />
      )}

      {showDetailPopup && (
        <DetailPeoplePopup
          setShowPopup={setShowDetailPopup}
          refreshPeopleList={refreshPeopleList}
          people={selectedPeople as People}
        />
      )}

      <h2>CRUD People</h2>

      <ContainerAddPeople>
        <Button
          color={theme.colors.green}
          onClick={() => setShowRegisterPopup(true)}
        >
          <FaPlus /> Nova pessoa
        </Button>
      </ContainerAddPeople>
      
      <ContainerPeopleList>
        <PeopleList>
          {peoples?.map((item) => (
            <li key={item.id}>
              <div>
                <img src={item.image_url} />
                <span>{item.full_name}</span>
              </div>

              <div>
                <Button
                  onClick={() => {
                    setSelectedPeople(item);
                    setShowDetailPopup(true);
                  }}
                >
                  <IoMdPerson />
                </Button>
              </div>
            </li>
          ))}
        </PeopleList>
      </ContainerPeopleList>
    </Container>
  );
};

export default Panel;
