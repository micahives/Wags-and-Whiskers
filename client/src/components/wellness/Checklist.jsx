import React from 'react';

const ChecklistItem = ({ text, isChecked, onChange }) => {
  return (
    <div>
      <input type="checkbox" checked={isChecked} onChange={onChange} />
      <label>{text}</label>
    </div>
  );
};

export default ChecklistItem;