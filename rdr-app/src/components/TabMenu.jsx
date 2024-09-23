const TabMenu = ({ children, ...props }) => {
    return (
        <button {...props} className="tab-button"> {children} </button>
    )
}

export default TabMenu;