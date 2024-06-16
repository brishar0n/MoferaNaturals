    import React, { useState } from "react";
    import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input, useDisclosure ,DatePicker,Textarea} from "@nextui-org/react";

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
        console.log("Editing id:", editUser);
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
                <ModalHeader className="flex flex-col font-bold text-3xl">Edit Shipping Information</ModalHeader>
                <ModalBody>
                    <p className="font-md">To edit the Shipping Information, please update the form below:</p>
                    <Input
                    clearable
                    bordered
                    fullWidth
                    color="quinary"
                    size="lg"
                    label="ID"
                    placeholder="Enter the updated id:"
                    name="id"
                    value={editUser.id}
                    onChange={handleInputChange}
                    className="mb-4 text-black"
                    />
                    <DatePicker
                    clearable
                    bordered
                    fullWidth
                    color="quinary"
                    size="lg"
                    label="Arrival Date"
                    placeholder="Enter the updated C Date:"
                    name="arrival_datetime"
                    
                    onChange={handleInputChange}
                    className="mb-4"
                    />
                    <Input
                    clearable
                    bordered
                    fullWidth
                    color="septenary"
                    size="lg"
                    label="Total Package"
                    placeholder="Enter the updated Total Package:"
                    name="total_packages"
                    value={editUser.total_packages}
                    onChange={handleInputChange}
                    className="mb-4"
                    />
                    <Input
                    clearable
                    bordered
                    color="quinary"
                    size="lg"
                    label="Shipping ID"
                    placeholder="Enter the updated Shipping ID:"
                    name="shipping_id"
                    value={editUser.shipping_id}
                    onChange={handleInputChange}
                    className="mb-4"
                    />
                    <Textarea
                    clearable
                    bordered
                    color="quinary"
                    size="lg"
                    label="Notes"
                    placeholder="Enter the updated Notes:"
                    name="note"
                    value={editUser.note}
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
