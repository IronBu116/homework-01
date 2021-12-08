import React from "react";
import PropTypes from "prop-types";

const GroupList = ({
  items,
  valueProperty,
  contentProperty,
  onItemSelect,
  selectedItem,
  onClear,
}) => {
  const renderClassName = (item) => {
    return `product__nav-item--button${selectedItem === item ? "-active" : ""}`;
  };

  if (!Array.isArray(items)) {
    return (
      <>
        <button
          className={renderClassName(undefined)}
          onClick={() => onClear()}
        >
          Все
        </button>
        {Object.keys(items).map((item) => (
          <button
            key={items[item][valueProperty]}
            className={renderClassName(items[item][contentProperty])}
            onClick={() => {
              onItemSelect(items[item][contentProperty]);
            }}
          >
            {items[item][contentProperty]}
          </button>
        ))}
      </>
    );
  }
  return (
    <>
      <button className={renderClassName(undefined)} onClick={() => onClear()}>
        Все
      </button>
      {items.map((item) => (
        <button
          key={item[valueProperty]}
          className={renderClassName(item[contentProperty])}
          onClick={() => {
            onItemSelect(item[contentProperty]);
          }}
        >
          {item[contentProperty]}
        </button>
      ))}
    </>
  );
};

GroupList.defaultProps = {
  valueProperty: "_id",
  contentProperty: "name",
};

GroupList.propTypes = {
  items: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  valueProperty: PropTypes.string.isRequired,
  contentProperty: PropTypes.string.isRequired,
  onItemSelect: PropTypes.func,
  selectedItem: PropTypes.string,
};

export default GroupList;
