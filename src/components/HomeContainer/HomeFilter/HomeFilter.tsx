import { FilterForm } from "@/components/FilterForm/FilterForm";
import { SectionContainer } from "@/components/SectionContainer/SectionContainer";
import { useLinks } from "@/hooks/useLinks";
import { useLocationParams } from "@/hooks/useLocationParams";
import { Utils } from "@/utils/Utils";
import { usePathname, useRouter } from "next/navigation";
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
  const router = useRouter();
  const {
    filter,
    value
  } = useLocationParams();
  const [valueState, setValueState] = useState(value || '');
  const [selection, setSelection] = useState(
    Utils.getSelectionFromFilterOptions(filter, FILTER_OPTIONS)
  );

  const onSubmit = () => {
    router.push(`/home?filter=${selection.id}&value=${valueState}`);
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