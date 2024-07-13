import './homeFilterResultsLoader.css';
import { SectionContainer } from "@/components/SectionContainer/SectionContainer";
import { Link } from "@/models/Link";
import { Card, Placeholder } from "react-bootstrap";
import { useLinks } from "@/hooks/useLinks";

export const HomeFilterResultsLoader = () => {
  const { data, isLoading } = useLinks();
  const links = Array.from({ length: 10 }, (_, index) => index);
  
  return (
    <>
    { isLoading && (
      <SectionContainer>
        <div className='card-container'>
          {links.map((_link: number, index: number) => (
            <Card
            bg="dark"
            text="light"
            key={index}
            className='link-card-loader'
            >
              <Card.Header>
                <Card.Title>
                  <Placeholder as={Card.Title} animation="glow">
                    <Placeholder xs={12} bg="light"/>
                  </Placeholder>
                </Card.Title>
              </Card.Header>
              <Card.Text>
                <Placeholder as={Card.Img} style={{
                  height: '100px',
                }} />
              </Card.Text>
              <Card.Body>
                <Placeholder as={Card.Text} animation="glow">
                  <Placeholder xs={6} bg="light"/>
                </Placeholder>
              </Card.Body>
            </Card>
          ))}
        </div>
      </SectionContainer>
    )}
    </>
  );
}