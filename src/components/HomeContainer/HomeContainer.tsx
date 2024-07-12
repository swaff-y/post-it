'use client'

import { Container } from "react-bootstrap";
import "./home-container.css";
import { SectionContainer } from "../SectionContainer/SectionContainer";
import { FilterForm } from "../FilterForm/FilterForm";
import { useState } from "react";
import { Utils } from "@/utils/Utils";
import { useLocationParams } from "@/hooks/useLocationParams";

export const FILTER_OPTIONS = [
  {
    id: 'tile',
    label: 'Title',
  },
  {
    id: 'author',
    label: 'Author',
  }
];

const Home = () => {
  // const navigate = useNavigate();
  const {
    filter,
    value
  } = { filter: 'title', value: 'test' };
  const [valueState, setValueState] = useState(value || '');
  const [selection, setSelection] = useState(
    Utils.getSelectionFromFilterOptions(filter, FILTER_OPTIONS)
  );

  const onSubmit = () => {
    // navigate(`/home/?filter=${selection.id}&value=${valueState}`);
  };
  return (
    <div className="home-container">
      <SectionContainer>
        <FilterForm
          filterOptions={FILTER_OPTIONS}
          setSelection={setSelection}
          setValue={setValueState}
          selection={selection}
          value={valueState || ''}
          onSubmit={onSubmit}
        />
      </SectionContainer>
    </div>
  );
};

export default Home;