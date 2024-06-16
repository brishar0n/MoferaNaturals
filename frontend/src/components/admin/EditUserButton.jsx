    import React, { useState } from "react";
    import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input, useDisclosure } from "@nextui-org/react";

    function EditUserButton({ user, onEditUser }) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [editUser, setEditUser] = useState({ ...user });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditUser((prevUser) => ({
        ...prevUser,
        [name]: value
        }));
    };

    const handleEditUser = () => {
        // console.log("Editing user:", editUser);
        onEditUser(editUser);
        onOpenChange(false);
    };

    return (
        <>
        <Button onClick={onOpen} 
            auto
            flat
            color="secondary"
            className="flex items-center justify-center text-white font-medium drop-shadow-md w-24 text-base"
        >
            Edit
        </Button>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
            {() => (
                <>
                <ModalHeader className="flex flex-col font-bold text-3xl">Edit User</ModalHeader>
                <ModalBody>
                    <p className="font-md">To edit the user, please update the form below:</p>
                    <Input
                    clearable
                    bordered
                    fullWidth
                    color="quinary"
                    size="lg"
                    label="ID Number"
                    placeholder="Enter the updated id:"
                    name="id"
                    value={editUser.id}
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
                    placeholder="Enter the updated username:"
                    name="name"
                    value={editUser.name}
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
                    placeholder="Enter the updated e-mail:"
                    name="email"
                    value={editUser.email}
                    onChange={handleInputChange}
                    className="mb-4"
                    />
                    <Input
                    clearable
                    bordered
                    color="quinary"
                    size="lg"
                    label="Role"
                    placeholder="Enter the updated role:"
                    name="role"
                    value={editUser.role}
                    onChange={handleInputChange}
                    className="mb-4"
                    />
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" variant="light" onPress={() => onOpenChange(false)} className="font-medium">
                    Close
                    </Button>
                    <Button color="primary" onClick={handleEditUser} className="font-medium">
                    Save Changes
                    </Button>
                </ModalFooter>
                </>
            )}
            </ModalContent>
        </Modal>
        </>
    );
    }

    export default EditUserButton;
