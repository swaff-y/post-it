import { SectionContainer } from "@/components/SectionContainer/SectionContainer";
import { Link } from "@/models/Link";
import { Utils } from "@/utils/Utils";
import { Card } from "react-bootstrap";
import MicroLink from "@microlink/react";
import { useLinks } from "@/hooks/useLinks";

export const HomeFilterResults = () => {
  const { data, isSuccess } = useLinks();
  const links = data.getAll();

  
  
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