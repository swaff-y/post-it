import { FilterForm } from "@/components/FilterForm/FilterForm";
import { SectionContainer } from "@/components/SectionContainer/SectionContainer";
import { useLinks } from "@/hooks/useLinks";
import { useLocationParams } from "@/hooks/useLocationParams";
import { Utils } from "@/utils/Utils";
import { FC, useState } from "react";

export const FILTER_OPTIONS = [
  {
    id: 'id',
    label: 'Link ID',
  },
  {
    id: 'description',
    label: 'Description',
  },
  {
    id: 'keyword',
    label: 'Keyword',
  }
];

export const HomeFilter: FC = () => {
  const {
    filter,
    value
  } = useLocationParams();
  const [valueState, setValueState] = useState(value || '');
  const [selection, setSelection] = useState(
    Utils.getSelectionFromFilterOptions(filter, FILTER_OPTIONS)
  );

  const onSubmit = () => {
    window.location.search = `?filter=${selection.id}&value=${valueState}`;
  };
  
  return (
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
  );
};