import { MdDelete, MdEdit } from "react-icons/md";

interface CategoriesCardProps {
    name: string;
}
const CategoriesCard: React.FC<CategoriesCardProps> = ({ name }) => {
    return (
        <div className="flex justify-between items-center rounded-xl bg-slate-50 shadow-lg px-5 py-5 mb-5">
            <p className="text-xl font-medium">{name}</p>
            <div className="flex gap-5  md:gap-8">
                <button className="text-2xl flex flex-col items-center hover:underline">
                    <MdEdit />
                    <p className="text-sm font-semibold">
                        Edit
                    </p>
                </button>
                <button className="text-2xl flex flex-col items-center hover:underline">
                    <MdDelete className="text-red-600"/>
                    <p className="text-sm text-red-600 font-semibold">
                        Delete
                    </p>
                </button>
            </div>
        </div>
    );
};

export default CategoriesCard;
