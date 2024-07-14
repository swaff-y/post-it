import { SectionContainer } from "@/components/SectionContainer/SectionContainer";
import { Image } from "react-bootstrap";
import { useLinks } from "@/hooks/useLinks";

export const HomeFilterError = () => {
  const { data, isError } = useLinks();
  const imageUrl = 'Error.png'
  
  return (
    <>
    { isError && (
      <SectionContainer>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <h1>Error Loading API</h1>
          <Image src={imageUrl} roundedCircle width='150px' />
        </div>
      </SectionContainer>
    )}
    </>
  );
}