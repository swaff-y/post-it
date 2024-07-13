'use client'

import "./home-container.css";
import { SectionContainer } from "../SectionContainer/SectionContainer";
import { FilterForm } from "../FilterForm/FilterForm";
import { FC, useState } from "react";
import { Utils } from "@/utils/Utils";
import { useLocationParams } from "@/hooks/useLocationParams";
import { useLinks } from "@/hooks/useLinks";
import { Button, Card } from "react-bootstrap";
import { Link } from "@/models/Link";

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

const Home: FC = () => {
  const {
    filter,
    value
  } = useLocationParams();
  const [valueState, setValueState] = useState(value || '');
  const [selection, setSelection] = useState(
    Utils.getSelectionFromFilterOptions(filter, FILTER_OPTIONS)
  );
  const { data } = useLinks();
  const links = data.getAll();

  const onSubmit = () => {
    window.location.search = `?filter=${selection.id}&value=${valueState}`;
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
      <SectionContainer>
        <div className='card-container'>
          {links.map((link: Link, index: number) => (
            <Card
              bg="dark"
              text="light"
              key={index}
              className='link-card'
            >
              <Card.Header>
                <Card.Title>
                  {Utils.toTitleCase(link.description)}
                </Card.Title>
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  ID: {link.id}
                </Card.Text>
                <Button 
                  variant="outline-light"
                  href={link.url}
                  target="_blank"
                >
                  Visit Link
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </SectionContainer>
    </div>
  );
};

export default Home;