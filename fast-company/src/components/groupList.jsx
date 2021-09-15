import React from "react";
import PropTypes from "prop-types";

const GroupList = ({
    items,
    valuePropety,
    contentProperty,
    onItemSelect,
    selectedItem
}) => {
    if (Array.isArray(items)) {
        return (
            <ul className="list-group">
                {items.map((item) => (
                    <li
                        key={item[valuePropety]}
                        className={
                            "list-group-item" +
                            (item === selectedItem ? " active" : "")
                        }
                        onClick={() => onItemSelect(item)}
                        role="button"
                    >
                        {item[contentProperty]}
                    </li>
                ))}
            </ul>
        );
    } else {
        return (
            <ul className="list-group">
                {Object.keys(items).map((item) => (
                    <li
                        key={items[item][valuePropety]}
                        className={
                            "list-group-item" +
                            (items[item] === selectedItem ? " active" : "")
                        }
                        onClick={() => onItemSelect(items[item])}
                        role="button"
                    >
                        {items[item][contentProperty]}
                    </li>
                ))}
            </ul>
        );
    }
};

GroupList.defaultProps = {
    valuePropety: "_id",
    contentProperty: "name"
};

GroupList.propTypes = {
    items: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    valuePropety: PropTypes.string.isRequired,
    contentProperty: PropTypes.string.isRequired,
    onItemSelect: PropTypes.func,
    selectedItem: PropTypes.object
};

export default GroupList;
