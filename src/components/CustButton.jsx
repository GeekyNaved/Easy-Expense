const CustButton = ({ title, handleClick }) => {
    return (
        <button className="mx-10 rounded bg-blue-700 text-center py-4 text-gray-50 hover:bg-blue-500" onClick={handleClick}>
            {title}
        </button>
    )
}

export default CustButton