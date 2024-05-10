import { IoMdEye, IoMdEyeOff } from "react-icons/io"

interface InputFieldProps {
    type: string;
    placeholder: string;
    handleToggle: () => void;
}


const InputField: React.FC<InputFieldProps> = ({ type, placeholder, handleToggle }) => {
    return (
        <div className="relative flex items-center">
            <input className="rounded-md border-2 border-gray-200 px-4 py-4 min-w-full" type={type} placeholder={placeholder} />
            {handleToggle != null ? (<button className="absolute right-1 p-2 text-2xl" onClick={handleToggle}>
                {type === "text" ? <IoMdEye /> : <IoMdEyeOff />}
            </button>) : null}
        </div>
    )
}

export default InputField