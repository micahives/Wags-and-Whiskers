import React from 'react';

const ChecklistItem = ({ text, isChecked, onChange }) => {
  return (
    <div className="m-1">
      <input type="checkbox" checked={isChecked} onChange={onChange}/>
      <label>{text}</label>
    </div>
  );
};

export default ChecklistItem;