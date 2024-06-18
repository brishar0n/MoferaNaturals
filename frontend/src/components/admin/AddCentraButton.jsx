import React, { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input, useDisclosure } from "@nextui-org/react";
import {Select, SelectItem} from "@nextui-org/react";
import black_plus from "../../../src/assets/admin/black_plus.svg"

function AddCentraButton({ onAddCentra }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [newCentra, setNewCentra] = useState({
    location: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCentra((prevCentra) => ({
      ...prevCentra,
      [name]: value
    }));
  };

  const handleAddCentra = () => {
    console.log("Adding centra: ", newCentra); 
    onAddCentra(newCentra);
    setNewCentra({
      location: ""
    });
    onOpenChange(false);
  };

  return (
    <>
      <Button onClick={onOpen} className="bg-quinary font-bold text-base drop-shadow-md">
        <img src={black_plus} className="w-5" alt="Add Icon" />
        Add Centra
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col font-bold text-3xl ">Add New Centra</ModalHeader>
              <ModalBody>
                <p className="font-md">In order to add a new centra, please fill the form below:</p>
                <Input
                  clearable
                  bordered
                  fullWidth
                  color="quinary"
                  size="lg"
                  label="Centra Location"
                  placeholder="Enter a new location:"
                  name="location"
                  value={newCentra.location}
                  onChange={handleInputChange}
                  className="mb-4 text-black"
                />
                
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={() => onOpenChange(false)} className="font-medium">
                  Close
                </Button>
                <Button color="primary" onClick={handleAddCentra} className="font-medium">
                  Add
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export default AddCentraButton;
