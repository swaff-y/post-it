import './filterForm.css';
import { FC } from "react";
import { Button, Dropdown, DropdownButton, Form, InputGroup } from "react-bootstrap";

type FilterAttributes = {
  id: string;
  label: string;
};
interface FilterOptions {
  filterOptions: FilterAttributes[];
  setSelection: (selection: FilterAttributes) => void;
  setValue: (value: string) => void;
  selection: FilterAttributes;
  value: string | number;
  onSubmit: () => void;
};

export const FilterForm:FC<FilterOptions> = ({ 
  filterOptions,
  setSelection,
  setValue,
  selection,
  value,
  onSubmit
}) => {
  
  return (
    <Form 
      className="filter-form"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
    <InputGroup className="mb-3">
      <DropdownButton
        variant="outline-secondary"
        title={selection.label}
        id="input-group-dropdown-1"
      >
        { filterOptions.map((option, index) => (
          <Dropdown.Item key={index} onClick={() => setSelection(option)}>{option.label}</Dropdown.Item>
        ))}
      </DropdownButton>
      <Form.Control 
        aria-label="Text input with dropdown button"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </InputGroup>
    <Button 
      className="mb-3 filter-button"
      variant="dark"
      type='submit'
    >
      Search
    </Button>
  </Form>
  )
};