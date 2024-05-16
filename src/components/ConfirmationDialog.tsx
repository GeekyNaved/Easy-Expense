
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Fragment } from 'react';

interface confirmationProps {
    title: string;
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const ConfirmationDialog: React.FC<confirmationProps> = ({ title, children, isOpen, onClose }) => {

    return (
        <Fragment>
            {children}
            <Dialog
                open={isOpen}
                onClose={onClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle sx={{ fontWeight: 'bold' }} id="alert-dialog-title">
                    {title}
                </DialogTitle>
                <DialogContent>
                </DialogContent>
                <DialogActions>
                    <button className="font-medium px-4 py-2" onClick={onClose}>No</button>
                    <button className='text-red-500 px-4 py-2 font-medium' onClick={onClose}>Yes</button>
                </DialogActions>
            </Dialog>
        </Fragment>
    );
}

export default ConfirmationDialog;
