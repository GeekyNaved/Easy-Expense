import { IoMdEye, IoMdEyeOff } from "react-icons/io"

const InputField = ({ type, placeholder, handleToggle }) => {
    return (
        <div className="relative flex items-center">
            <input className="rounded-md px-4 py-2 min-w-full" type={type} placeholder={placeholder} />
            {handleToggle != null ? (<button className="absolute right-1 p-2 text-2xl" onClick={handleToggle}>
                {type === "text" ? <IoMdEye /> : <IoMdEyeOff />}
            </button>) : null}
        </div>
    )
}

export default InputField