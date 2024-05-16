import { MdDelete, MdEdit } from "react-icons/md";
import EditDialog from "./EditDialog";
import { useState } from "react";
import ConfirmationDialog from "./ConfirmationDialog";

interface CategoriesCardProps {
    name: string;
}
const CategoriesCard: React.FC<CategoriesCardProps> = ({ name }) => {
    const [open, setOpen] = useState(false);
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

    const handleClickOpen = (e) => {
        // console.log('name', name)
        setOpen(true);
    };
    const handleDeleteDialog = (e) => {
        // console.log('name', name)
        setOpenDeleteDialog(true);
    };


    const handleClose = () => {
        setOpen(false);
    };

    const handleDeleteDialogClose = () => {
        setOpenDeleteDialog(false);
    };
    return (
        <div className="flex justify-between items-center rounded-xl bg-slate-50 shadow-lg px-5 py-5 mb-5">
            <p className="text-xl font-medium">{name}</p>
            <div className="flex gap-5 md:gap-8">
                <EditDialog categoryName={name} isOpen={open} onClose={handleClose}>
                    <button className="text-2xl flex flex-col items-center hover:underline" onClick={handleClickOpen}>
                        <MdEdit />
                        <p className="text-sm font-semibold">
                            Edit
                        </p>
                    </button>
                </EditDialog>
                <ConfirmationDialog title="Are you sure to delete?" isOpen={openDeleteDialog} onClose={handleDeleteDialogClose}>
                    <button className="text-2xl flex flex-col items-center hover:underline" onClick={handleDeleteDialog}>
                        <MdDelete className="text-red-600" />
                        <p className="text-sm text-red-600 font-semibold">
                            Delete
                        </p>
                    </button>
                </ConfirmationDialog>
            </div>
        </div >
    );
};

export default CategoriesCard;
