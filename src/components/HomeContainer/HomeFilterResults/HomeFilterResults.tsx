import { SectionContainer } from "@/components/SectionContainer/SectionContainer";
import { Link } from "@/models/Link";
import { Utils } from "@/utils/Utils";
import { Card } from "react-bootstrap";
import MicroLink from "@microlink/react";
import { useLinks } from "@/hooks/useLinks";
import { useLocationParams } from "@/hooks/useLocationParams";

export const HomeFilterResults = () => {
  const { filter, value } = useLocationParams();
  const { data, isSuccess } = useLinks();
  let links = data.getAll();

  if(filter && value) {
    links = links.filter((link: Link) => {
      if(filter === 'id') {
        return link.id === value;
      } else if(filter === 'description') {
        return link.description.toLowerCase().includes(value.toLowerCase());
      } else if(filter === 'keyword') {
        return link.description.toLowerCase().includes(value.toLowerCase());
      }
    });
  };

  if(filter === 'id' && value !== '' && links.length > 1) {
    links = [];
  }
  
  return (
    <>
    { isSuccess && (
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
              <Card.Text>
                <MicroLink url={link.url}/>
              </Card.Text>
              <Card.Body>
                <Card.Text>
                  ID: {link.id}
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      </SectionContainer>
    )}
    </>
  );
}