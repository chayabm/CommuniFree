interface ModalProps {
    setOpenModal: (open: boolean) => void;
    handleDeleteClick: () => void;
}

export default function DeleteButton ({ handleDeleteClick }:ModalProps){

    return(
        <>
        <button onClick={handleDeleteClick}> 
            Cancel
            </button>
        </>
    )
}