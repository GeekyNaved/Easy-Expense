const CustButton = ({ title, handleClick, className }) => {
    return (
        <button className={`${className} rounded-xl bg-blue-700 text-center py-4 text-gray-50 hover:bg-blue-500 font-bold`} onClick={handleClick} >
            {title}
        </button>
    )
}

export default CustButton