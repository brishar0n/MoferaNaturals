import React, { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input, useDisclosure } from "@nextui-org/react";
import {Select, SelectItem} from "@nextui-org/react";
import black_plus from "../../../src/assets/admin/black_plus.svg"

function AddUserButton({ onAddUser }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [newUser, setNewUser] = useState({
    id: "",
    name: "",
    email: "",
    role: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prevUser) => ({
      ...prevUser,
      [name]: value
    }));
  };

  const handleAddUser = () => {
    console.log("Adding user:", newUser); 
    onAddUser(newUser);
    setNewUser({
      id: "",
      name: "",
      email: "",
      role: ""
    });
    onOpenChange(false);
  };

  return (
    <>
      <Button onClick={onOpen} className="bg-quinary font-bold text-base drop-shadow-md">
        <img src={black_plus} className="w-5" alt="Add Icon" />
        Add User
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col font-bold text-3xl ">Add New User</ModalHeader>
              <ModalBody>
                <p className="font-md">In order to add a new user, please fill the form below:</p>
                <Input
                  clearable
                  bordered
                  fullWidth
                  color="quinary"
                  size="lg"
                  label="ID Number"
                  placeholder="Enter a new id:"
                  name="id"
                  value={newUser.id}
                  onChange={handleInputChange}
                  className="mb-4 text-black"
                />
                <Input
                  clearable
                  bordered
                  fullWidth
                  color="quinary"
                  size="lg"
                  label="Username"
                  placeholder="Enter a new username:"
                  name="name"
                  value={newUser.name}
                  onChange={handleInputChange}
                  className="mb-4"
                />
                <Input
                  clearable
                  bordered
                  fullWidth
                  color="septenary"
                  size="lg"
                  label="Email"
                  placeholder="Enter a new e-mail:"
                  name="email"
                  value={newUser.email}
                  onChange={handleInputChange}
                  className="mb-4"
                />
                <Input
                  clearable
                  bordered
                  color="quinary"
                  size="lg"
                  label="Role"
                  placeholder="Enter a new role:"
                  name="role"
                  value={newUser.role}
                  onChange={handleInputChange}
                  className="mb-4"
                />
                
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={() => onOpenChange(false)} className="font-medium">
                  Close
                </Button>
                <Button color="primary" onClick={handleAddUser} className="font-medium">
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

export default AddUserButton;
