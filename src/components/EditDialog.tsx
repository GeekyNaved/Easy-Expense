// Edit category form dialog box (Modal)
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Fragment, useEffect, useState } from 'react';

interface dialogProps {
    categoryName: string;
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const EditDialog: React.FC<dialogProps> = ({ categoryName, children, isOpen, onClose }) => {
    const [name, setName] = useState('');

    useEffect(() => {
        setName(categoryName)
    }, [isOpen]);

    return (
        <Fragment>
            {children}
            <Dialog
                open={isOpen}
                onClose={onClose}
                PaperProps={{
                    component: 'form',
                    onSubmit: (event) => {
                        event.preventDefault();
                        const formData = new FormData(event.currentTarget);
                        const formJson = Object.fromEntries(formData.entries());
                        const email = formJson.email;
                        console.log(email);
                        onClose();
                    },
                }}
            >
                <DialogTitle sx={{ fontWeight: 'bold' }}>Edit Categories</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="name"
                        name="email"
                        label="Enter category name"
                        value={name}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setName(event.target.value);
                        }}
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <button className='font-medium text-red-500 px-4 py-2' onClick={onClose}>Cancel</button>
                    <button className="font-medium px-4 py-2" type="submit">Save</button>
                </DialogActions>
            </Dialog>
        </Fragment>
    );
}

export default EditDialog;
